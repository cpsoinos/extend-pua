import React from 'react'
import SenatorBasicInfo from './SenatorBasicInfo'
import withBaseStyles from '../../../.storybook/decorators/withBaseStyles'

export default {
  title: 'components/SenatorBasicInfo',
  component: SenatorBasicInfo,
  decorators: [withBaseStyles]
}

export const Default = () => {
  return <SenatorBasicInfo lastName="Murkowski" firstName="Lisa" usState="AK" party="R" upForReElection={2022} />
}
