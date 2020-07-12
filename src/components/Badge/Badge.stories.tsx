import React from 'react'
import Badge from './Badge'

export default {
  title: 'components/Badge',
  component: Badge
}

export const Democrat = () => <Badge party="D">CA - D</Badge>

export const Republican = () => <Badge party="R">TN - R</Badge>
