import React from 'react'
import { BaseProps } from '../../types/BaseProps'

export interface SenatorBasicInfoProps extends BaseProps {
  lastName: string
  firstName: string
  party: string
  usState: string
  upForReElection: number
}

const SenatorBasicInfo = (props: SenatorBasicInfoProps) => {
  const { lastName, firstName, party, usState, upForReElection, className } = props

  return (
    <div className={className}>
      <p className="text-2xl text-white font-bold uppercase tracking-widest leading-none -mb-1">{lastName}</p>
      <p className="text-red-600 font-bold uppercase tracking-widest leading-none -mb-1">{firstName}</p>
      <p className="text-white font-bold uppercase tracking-widest leading-none">{usState} {party}</p>
      <p className="text-xs text-white italic">Up for Re-Election: {upForReElection}</p>
    </div>
  )
}

export default SenatorBasicInfo
