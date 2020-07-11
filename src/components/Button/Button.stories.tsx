import React from 'react'
import Button from './Button'

export default {
  title: 'components/Button',
  component: Button,
  parameters: {
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ]
  }
}

export const Default = () => <Button>foo</Button>

export const Link = () => <Button href="foo">foo</Button>
