import React from 'react'
import Button from './Button'
import withBaseStyles from '../../../.storybook/decorators/withBaseStyles'

export default {
  title: 'components/Button',
  component: Button,
  decorators: [withBaseStyles]
}

export const Default = () => <Button>foo</Button>

export const Link = () => <Button href="foo">foo</Button>
