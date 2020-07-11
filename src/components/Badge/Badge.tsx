import React, { ReactChild } from 'react'
import classNames from 'classnames'

interface BadgeProps {
  party: string
  children: ReactChild
}

const Badge = (props: BadgeProps) => {
  const { party, children } = props

  const classes = classNames('inline-block', 'text-xs', 'px-2', 'rounded-full', 'uppercase', 'text-white', {
    'text-blue-600 bg-blue-200': party === 'D',
    // 'bg-blue-deep-sky': party === 'D',
    // 'bg-red-flag': party === 'R',
    'text-red-600 bg-red-200': party === 'R',
    'bg-gray-500': party === '***'
  })

  return (
    <span className={classes}>{children}</span>
  )
}

export default Badge
