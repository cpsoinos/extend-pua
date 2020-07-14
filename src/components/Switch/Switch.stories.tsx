import React from 'react'
import Switch from 'components/Switch/Switch'

export default {
  title: 'components/Switch',
  component: Switch
}

export const Default = () => <Switch label="Filter" name="switch" onChange={() => 'foo'} />
