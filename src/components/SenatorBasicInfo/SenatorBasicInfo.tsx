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
      <p className="text-xl text-white uppercase tracking-widest leading-none -mb-1 truncate">{lastName}</p>
      <p className="text-red-flag uppercase tracking-widest leading-none -mb-1">{firstName}</p>
      <p className="text-white uppercase tracking-widest leading-none">
        <span>{usState}</span>
        <span className="ml-2">{party}</span>
      </p>
      <p className="font-sans text-xxs text-white italic">Up for Re-Election: {upForReElection}</p>
    </div>
  )
}

export default SenatorBasicInfo
