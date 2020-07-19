import React from 'react'
import StatesList from 'pages/StatesList/StatesList'
import withBaseStyles from '../../../.storybook/decorators/withBaseStyles'

export default {
  title: 'pages/StatesList',
  component: StatesList,
  decorators: [withBaseStyles]
}

export const Default = () => <StatesList />
