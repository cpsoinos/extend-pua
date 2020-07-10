import React from 'react'
import SenatorBasicInfo from './SenatorBasicInfo'

export default {
  title: 'components/SenatorBasicInfo',
  component: SenatorBasicInfo,
  parameters: {
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ]
  }
}

export const Default = () => {
  return <SenatorBasicInfo lastName="Murkowski" firstName="Lisa" usState="AK" party="R" upForReElection={2022} />
}
