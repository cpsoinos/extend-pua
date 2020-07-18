import React, { useState, useEffect } from 'react';
import { useAWRAStates } from 'hooks/useAWRAStates'
import { AWRAState } from 'types/AWRAState'
import StateCard from 'components/StateCard/StateCard'

const StatesList = () => {
  const [states, setStates] = useState<AWRAState[]>([])
  const { getAWRAStates } = useAWRAStates()

  useEffect(() => {
    getAWRAStates().then(setStates)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="flex flex-wrap mb-20">
      {states.map((usState, i) => {
        return (
          <StateCard usState={usState} key={i} />
        )
      })}
    </div>
  )
}

export default StatesList
