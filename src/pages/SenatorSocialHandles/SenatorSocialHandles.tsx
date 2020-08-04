import React, { useState, useEffect } from 'react';
import CongressPersonCard from 'components/CongressPersonCard/CongressPersonCard'
import { SenatorSocialHandleRecord } from "types/SenatorSocialHandleRecord"
import { useSenatorSocialHandles } from 'hooks/useSenatorSocialHandles'
import { useBuildSocialInfo } from 'hooks/useBuildSocialInfo'
import { useSearch } from 'hooks/useSearch'
import sortBy from 'lodash/sortBy'
import Switch from 'components/Switch/Switch'
import { useUsStates } from 'hooks/useUsStates'

const SenatorSocialHandles = () => {
  const [senators, setSenators] = useState<SenatorSocialHandleRecord[]>([])
  const [filteredSenators, filterSenators] = useState<SenatorSocialHandleRecord[]>([])
  const { getSenatorSocialHandles } = useSenatorSocialHandles()
  const { buildInstagram, buildFacebook, buildTwitter, buildPhone, buildMail } = useBuildSocialInfo()
  const [orderBy, setOrderBy] = useState('st')
  const { addIndex, addDocuments, search } = useSearch()

  useEffect(() => {
    ['st', 'first', 'last', 'party', 'reElection'].map(addIndex)
    getSenatorSocialHandles().then((data) => {
      const sorted = sortBy(data, orderBy)
      setSenators(sorted)
      filterSenators(sorted)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    filterSenators(sortBy(filteredSenators, orderBy))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderBy])

  const onOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setOrderBy(value)
  }

  useEffect(() => {
    if (senators.length) addDocuments(senators)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [senators])

  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value
    if (query === '') filterSenators(senators)
    else {
      const results = search(query) as SenatorSocialHandleRecord[]
      filterSenators(results)
    }
  }

  const { fullStateName } = useUsStates()
  const onFilteredToKeyStates = (toggle: boolean) => {
    if (toggle) {
      const keyStates = ['KY', 'SC', 'OH', 'FL', 'NC', 'PA', 'WI', 'AZ', 'NY', 'ME'].map((abbr) => {
        return fullStateName(abbr)
      })
      const filtered = senators.filter((senator) => {
        return keyStates.includes(senator.st) && senator.party === 'R'
      })
      filterSenators(filtered)
    } else {
      filterSenators(senators)
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
      <div className="flex flex-wrap justify-between items-center px-2 md:px-4 mt-4 mb-6">

        <div className="flex justify-center">
          <label className="text-right mb-4 sm:mb-0">
            <span className="text-white mr-2">Sort:</span>
            <select className="text-gray-900 p-1 rounded-md" onChange={onOrderChange}>
              {sortOptions.map((sortOption, i) => {
                return <option key={i} value={sortOption.value}>{sortOption.text}</option>
              })}
            </select>
          </label>
        </div>

        <div className="flex w-full sm:max-w-1/2">
          <input className="text-gray-900 rounded-md w-full p-1" type="search" placeholder="Search..." onInput={onSearch}></input>
        </div>

        <div className="flex w-full justify-end">
          <Switch className="text-white mt-4" label="Show only key states" name="filter_to_key_states" onChange={onFilteredToKeyStates} />
        </div>
      </div>

      <div className="flex flex-wrap mb-20">
        {filteredSenators.map((senator, i) => {
          return (
            <div className="flex flex-1 sm:flex-auto sm:w-1/2 px-2">
              <CongressPersonCard
                key={i}
                avatar={senator.avatar}
                lastName={senator.last}
                firstName={senator.first}
                usState={senator.st}
                party={senator.party}
                upForReElection={+senator.reElection}
                instagram={buildInstagram(senator)}
                twitter={buildTwitter(senator)}
                facebook={buildFacebook(senator)}
                phone={buildPhone(senator)}
                mail={buildMail(senator)}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SenatorSocialHandles;
