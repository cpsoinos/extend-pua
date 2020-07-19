import React, { useState, useEffect } from 'react';
import { useAWRAStates } from 'hooks/useAWRAStates'
import { AWRAState } from 'types/AWRAState'
import StateCard from 'components/StateCard/StateCard'
import { useSearch } from 'hooks/useSearch'
import sortBy from 'lodash/sortBy'

interface StatesListProps {
  hide3moAvg?: boolean
  hideAdditionalFunding?: boolean
}

const StatesList = (props: StatesListProps) => {
  const { hide3moAvg = false, hideAdditionalFunding = false } = props

  const [states, setStates] = useState<AWRAState[]>([])
  const [filteredStates, filterStates] = useState<AWRAState[]>([])
  const { getAWRAStates } = useAWRAStates()
  const [orderBy, setOrderBy] = useState('state')
  const { addIndex, addDocuments, search } = useSearch()

  useEffect(() => {
    ['tier', 'currentUeRate', 'state', 'stateMaxUnemploymentPayout', 'additionalFpucUnderAwfrAct', 'monthAverage', 'prepandemicUePopulation', 'juneUePopulation'].map(addIndex)
    getAWRAStates().then((data) => {
      const sorted = sortBy(data, orderBy)
      setStates(sorted)
      filterStates(sorted)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    filterStates(sortBy(filteredStates, orderBy))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderBy])

  const onOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setOrderBy(value)
  }

  useEffect(() => {
    if (states.length) addDocuments(states)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [states])

  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value
    if (query === '') filterStates(states)
    else {
      const results = search(query) as AWRAState[]
      filterStates(results)
    }
  }

  const sortOptions = [
    { value: 'state', text: 'State name' },
    { value: 'tier', text: 'Tier' },
    { value: 'currentUeRate', text: 'Current unemployment rate' },
    { value: 'prepandemicUePopulation', text: 'Pre-pandemic unemployment population' },
    { value: 'juneUePopulation', text: 'June unemployment population' },
    { value: 'stateMaxUnemploymentPayout', text: 'State maximum unemployment payout' },
  ]
  if (!hide3moAvg) sortOptions.push({ value: 'monthAverage', text: '3-month avgerage unemployment rate' })
  if (!hideAdditionalFunding) sortOptions.push({ value: 'additionalFpucUnderAwfrAct', text: 'Additional FPUC Under AWFR Act' })

  return (
    <>
      <div className="flex flex-wrap justify-between items-center px-2 md:px-4 mt-4 mb-6">
        <div className="flex justify-center">
          <label className="text-right mb-4 sm:mb-0">
            <span className="text-white mr-2">Order by:</span>
            <select className="text-gray-900 p-1 rounded-md" onChange={onOrderChange}>
              {sortOptions.map((sortOption, i) => {
                return <option key={i} value={sortOption.value}>{sortOption.text}</option>
              })}
            </select>
          </label>
        </div>

        <div className="flex w-full sm:max-w-1/2 sm:pl-4">
          <input className="text-gray-900 rounded-md w-full p-1" type="search" placeholder="Search..." onInput={onSearch}></input>
        </div>
      </div>

      <div className="flex flex-wrap mb-20">
        {filteredStates.map((usState, i) => {
          return (
            <StateCard hide3moAvg={hide3moAvg} hideAdditionalFunding={hideAdditionalFunding} usState={usState} key={i} />
          )
        })}
      </div>
    </>
  )
}

export default StatesList
