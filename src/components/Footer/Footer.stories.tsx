import React from 'react'
import Footer from 'components/Footer/Footer'
import withBaseStyles from '../../../.storybook/decorators/withBaseStyles'

export default {
  title: 'components/Footer',
  component: Footer,
  decorators: [withBaseStyles]
}

export const Default = () => <Footer />
