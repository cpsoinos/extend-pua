import React, { useState, useEffect } from 'react';
import { useAWRAStates } from 'hooks/useAWRAStates'
import StateCard from 'components/StateCard/StateCard'
import { useSearch } from 'hooks/useSearch'
import sortBy from 'lodash/sortBy'
import { useUsStates } from 'hooks/useUsStates'
import { UsState } from 'types/UsState'

interface StatesListProps {
  hide3moAvg?: boolean
  hideAdditionalFunding?: boolean
}

const StatesList = (props: StatesListProps) => {
  const { hide3moAvg = false, hideAdditionalFunding = false } = props

  const [states, setStates] = useState<UsState[]>([])
  const [filteredStates, filterStates] = useState<UsState[]>([])
  const { getAWRAStates } = useAWRAStates()
  const { fullStateName } = useUsStates()
  const [orderBy, setOrderBy] = useState('state')
  const { addIndex, addDocuments, search } = useSearch()

  useEffect(() => {
    ['tier', 'currentUeRate', 'state', 'stateName', 'stateMaxUnemploymentPayout', 'additionalFpucUnderAwfrAct', 'monthAverage', 'prepandemicUePopulation', 'juneUePopulation'].map(addIndex)
    getAWRAStates().then((data) => {
      const usStates = data.map((awraState) => {
        return {
          ...awraState,
          stateName: fullStateName(awraState.state)
        }
      })
      const sorted = sortBy(usStates, orderBy)
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
      const results = search(query) as UsState[]
      filterStates(results)
    }
  }

  const sortOptions = [
    { value: 'state', text: 'State name' },
    { value: 'tier', text: 'Tier' },
    { value: 'currentUeRate', text: 'Current unemployment rate' },
    { value: 'prepandemicUePopulation', text: 'Unemployed (pre-pandemic)' },
    { value: 'juneUePopulation', text: 'Unemployed (June)' },
    { value: 'stateAvg', text: 'State avg unempl payout' },
  ]
  if (!hide3moAvg) sortOptions.push({ value: 'monthAverage', text: '3-mo avg unempl rate' })
  if (!hideAdditionalFunding) sortOptions.push({ value: 'additionalFpucUnderAwfrAct', text: 'Add\'l FPUC under AWFR Act' })

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

        <div className="flex flex-grow sm:max-w-1/2 sm:pl-4">
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
      <small className="leading-none text-left px-2 md:px-4">* Anderson, J. (2020, June 30). This Is the Living Wage You Need in All 50 States [Blog post]. <em>GOBankingRates</em>. Retrieved from <a href="https://www.gobankingrates.com/money/jobs/living-wage-every-state">https://www.gobankingrates.com/money/jobs/living-wage-every-state</a></small>
    </>
  )
}

export default StatesList
