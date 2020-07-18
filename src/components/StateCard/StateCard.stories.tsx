import React from 'react'
import StateCard from './StateCard'

export default {
  title: 'components/StateCard',
  component: StateCard
}

export const Tier1 = () => {
  const usState = {
    tier: 'Tier 1',
    currentUeRate: 6.7,
    state: 'NE',
    id: '1',
    stateMaxUnemploymentPayout: 440,
    additionalFpucUnderAwfrAct: '$100',
    monthAverage: 6.9,
    prepandemicUePopulation: '42,628',
    juneUePopulation: '70,646'
  }

  return <StateCard usState={usState} />
}
