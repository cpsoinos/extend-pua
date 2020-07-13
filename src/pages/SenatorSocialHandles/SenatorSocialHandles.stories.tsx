import React from 'react'
import SenatorSocialHandles from 'pages/SenatorSocialHandles/SenatorSocialHandles'
import withBaseStyles from '../../../.storybook/decorators/withBaseStyles'

export default {
  title: 'pages/SenatorSocialHandles',
  component: SenatorSocialHandles,
  decorators: [withBaseStyles]
}

export const Default = () => <SenatorSocialHandles />
