import React from 'react'
import Header from 'components/Header/Header'
import withBaseStyles from '../../../.storybook/decorators/withBaseStyles'

export default {
  title: 'components/Header',
  component: Header,
  decorators: [withBaseStyles]
}

export const Default = () => <Header />
