import React, { useState, useEffect } from 'react';
import CongressPersonCard from 'components/CongressPersonCard/CongressPersonCard'
import { SenatorSocialHandleRecord } from "types/SenatorSocialHandleRecord"
import { useSenatorSocialHandles } from 'hooks/useSenatorSocialHandles'
import { useBuildSocialInfo } from 'hooks/useBuildSocialInfo'
import { useSearch } from 'hooks/useSearch'
import sortBy from 'lodash/sortBy'
import Switch from 'components/Switch/Switch'

const SenatorSocialHandles = () => {
  const [senators, setSenators] = useState<SenatorSocialHandleRecord[]>([])
  const [filteredSenators, filterSenators] = useState<SenatorSocialHandleRecord[]>([])
  const { getSenatorSocialHandles } = useSenatorSocialHandles()
  const { buildInstagram, buildFacebook, buildTwitter, buildPhone, buildMail } = useBuildSocialInfo()
  const [orderBy, setOrderBy] = useState('st')
  const { addDocuments, search } = useSearch()

  useEffect(() => {
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

  const onFilteredToKeyStates = (toggle: boolean) => {
    if (toggle) {
      const keyStates = ['KY', 'SC', 'OH', 'FL', 'NC', 'PA', 'WI', 'AZ', 'NY', 'ME']
      const filtered = senators.filter((senator) => {
        return keyStates.includes(senator.st) && senator.party === 'R'
      })
      filterSenators(filtered)
    } else {
      filterSenators(senators)
    }
  }

  return (
    <>
      <div className="py-12">
        <p className="text-white font-luloBold text-3xl">@ your senator</p>
        <p className="text-red-flag font-luloBold text-xl leading-none">Take your message straight to them</p>
      </div>

      <div className="flex flex-wrap justify-between items-center mx-2 mt-4 mb-6">
        <div className="flex justify-center">
          <label className="text-right mb-4 sm:mb-0">
            <span className="text-white mr-2">Order by:</span>
            <select className="p-1 rounded-md" onChange={onOrderChange}>
              <option value="st">State</option>
              <option value="party">Party</option>
              <option value="reElection">Re-election</option>
              <option value="last">Name</option>
            </select>
          </label>
        </div>

        <div className="flex w-full sm:max-w-1/2">
          <input className="rounded-md w-full p-1" type="search" placeholder="Search..." onInput={onSearch}></input>
        </div>

        <div className="flex w-full justify-end">
          <Switch className="text-white mt-4" label="Show only key states" name="filter_to_key_states" onChange={onFilteredToKeyStates} />
        </div>
      </div>

      <div className="flex flex-wrap mb-20">
        {filteredSenators.map((senator, i) => {
          return (
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
          )
        })}
      </div>
    </>
  )
}

export default SenatorSocialHandles;
