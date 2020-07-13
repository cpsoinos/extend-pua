import React from 'react'
import classNames from 'classnames'
import SocialHandleLink, { SocialHandleLinkProps } from 'components/SocialHandleLink/SocialHandleLink'

export interface CongressPersonCardProps {
  avatar?: string,
  lastName: string
  firstName: string
  party: string
  usState: string
  upForReElection: number
  instagram: SocialHandleLinkProps
  twitter: SocialHandleLinkProps
  facebook: SocialHandleLinkProps
  phone: SocialHandleLinkProps
  mail: SocialHandleLinkProps
}

const CongressPersonCard = (props: CongressPersonCardProps) => {
  const { avatar, lastName, firstName, party, usState, upForReElection, instagram, twitter, facebook, phone, mail } = props

  const socialHandles = [facebook, twitter, instagram, phone, mail]

  const imageClasses = classNames(
    'h-auto',
    'flex-none',
    'rounded-t-none',
    'rounded-l',
    'object-cover',
    'overflow-hidden',
    'border-l-8',
    {
      'border-background-blue': party === 'D',
      'border-red-flag': party === 'R',
      'border-gray-500': party === '***'
    }
  )

  return (
    <div className="flex w-full md:w-1/2 mb-4 px-0 sm:px-2 rounded-md">
      <img className={imageClasses} src={avatar} alt={`Senator ${lastName} ${firstName}`} width={150} />

      <div className="bg-white border border-gray-400 rounded-r p-2 leading-normal w-full overflow-auto">
        <div className="mb-4 leading-tight">
          <p className="text-sm text-gray-600 font-lulo">{usState} - {party}</p>
          <h3 className="text-gray-900 font-bold text-xl font-luloBold">{firstName} {lastName}</h3>
          <small className="text-gray-700 text-xs italic">Up for re-election in {upForReElection}</small>
        </div>

        <ul>
          {socialHandles.map((socialHandle) => (
            <li className="truncate">
              <SocialHandleLink {...socialHandle} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CongressPersonCard
