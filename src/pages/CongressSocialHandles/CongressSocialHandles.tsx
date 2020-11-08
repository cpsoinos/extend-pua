import React, { useState, useEffect } from 'react';
import CongressPersonCard from 'components/CongressPersonCard/CongressPersonCard'
import { useCongressDatabase } from 'hooks/useCongressDatabase'
import { useSearch } from 'hooks/useSearch'
import sortBy from 'lodash/sortBy'
import Switch from 'components/Switch/Switch'
import { useUsStates } from 'hooks/useUsStates'
import { CongressDbRecord } from 'types/CongressDbRecord'

const CongressSocialHandles = () => {
  const [congressMembers, setCongressMembers] = useState<CongressDbRecord[]>([])
  const [filteredSenators, setFilteredSenators] = useState<CongressDbRecord[]>([])
  const { getCongressMembers } = useCongressDatabase()
  const [orderBy, setOrderBy] = useState('st')
  const { addIndex, addDocuments, search } = useSearch()

  useEffect(() => {
    ['st', 'first', 'last', 'party', 'reElection'].map(addIndex)
    getCongressMembers().then((data) => {
      const sorted = sortBy(data, orderBy)
      setCongressMembers(sorted)
      setFilteredSenators(sorted)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setFilteredSenators(sortBy(filteredSenators, orderBy))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderBy])

  const onOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setOrderBy(value)
  }

  useEffect(() => {
    if (congressMembers.length) addDocuments(congressMembers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [congressMembers])

  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value
    if (query === '') setFilteredSenators(congressMembers)
    else {
      const results = search(query) as CongressDbRecord[]
      setFilteredSenators(results)
    }
  }

  const { fullStateName } = useUsStates()
  const onFilteredToKeyStates = (toggle: boolean) => {
    if (toggle) {
      const keyStates = ['KY', 'SC', 'OH', 'FL', 'NC', 'PA', 'WI', 'AZ', 'NY', 'ME'].map((abbr) => {
        return fullStateName(abbr)
      })
      const filtered = congressMembers.filter((senator) => {
        return keyStates.includes(senator.st) && senator.party === 'R'
      })
      setFilteredSenators(filtered)
    } else {
      setFilteredSenators(congressMembers)
    }
  }

  const sortOptions = [
    { value: 'st', text: 'State' },
    { value: 'party', text: 'Party' },
    { value: 'reElection', text: 'Re-election' },
    { value: 'last', text: 'Name' },
  ]

  return (
    <>
      <div className="flex flex-wrap justify-between items-center mt-4 mb-6">

        <div className="flex justify-center">
          <label className="text-right mb-4 md:mb-0">
            <span className="text-white mr-2">Sort:</span>
            <select className="text-gray-900 p-1 rounded-md" onChange={onOrderChange}>
              {sortOptions.map((sortOption, i) => {
                return <option key={i} value={sortOption.value}>{sortOption.text}</option>
              })}
            </select>
          </label>
        </div>

        <div className="flex w-full md:max-w-1/2">
          <input className="text-gray-900 rounded-md w-full p-1" type="search" placeholder="Search..." onInput={onSearch}></input>
        </div>

        <div className="flex w-full justify-end">
          <Switch className="text-white mt-4" label="Show only key states" name="filter_to_key_states" onChange={onFilteredToKeyStates} />
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly mb-20">
        {filteredSenators.map((congressPerson, i) => {
          return (
            <div className="container flex w-full md:w-1/2 px-1" key={i}>
              <CongressPersonCard congressPerson={congressPerson} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CongressSocialHandles
