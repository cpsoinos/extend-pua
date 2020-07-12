import React from 'react'
import Button from './Button'

export default {
  title: 'components/Button',
  component: Button
}

export const Default = () => <Button>foo</Button>

export const Link = () => <Button href="foo">foo</Button>
