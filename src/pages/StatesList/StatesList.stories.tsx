import React from 'react'
import StatesList from 'pages/StatesList/StatesList'
import withBaseStyles from '../../../.storybook/decorators/withBaseStyles'

export default {
  title: 'pages/StatesList',
  component: StatesList,
  // decorators: [withBaseStyles]
}

export const Default = () => <StatesList />

export const Without3moAvgAndAdditionalFunding = () => <StatesList hide3moAvg={true} hideAdditionalFunding={true} />
