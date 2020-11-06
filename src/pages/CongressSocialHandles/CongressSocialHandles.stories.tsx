import React from 'react'
import CongressSocialHandles from 'pages/CongressSocialHandles/CongressSocialHandles'
import withBaseStyles from '../../../.storybook/decorators/withBaseStyles'

export default {
  title: 'pages/CongressSocialHandles',
  component: CongressSocialHandles,
  decorators: [withBaseStyles]
}

export const Default = () => <CongressSocialHandles />
