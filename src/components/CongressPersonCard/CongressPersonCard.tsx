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
    'sm:h-auto',
    'flex-none',
    // 'rounded-full',
    'sm:rounded-t',
    'rounded-r-none',
    'sm:rounded-t-none',
    'sm:rounded-l',
    'object-cover',
    'overflow-hidden',
    'border-b-8',
    'sm:border-b-0',
    'sm:border-l-8',
    'h-20',
    'w-20',
    // 'w-3/4',
    // 'w-full',
    {
      'border-background-blue': party === 'D',
      'border-red-flag': party === 'R',
      'border-gray-500': party === '***'
    }
  )

  return (
    <div className="sm:flex w-full md:w-1/2 bg-white mb-4 px-0 sm:px-2 sm:rounded-md rounded-t">
      <div className="flex">
        <img className={imageClasses} src={avatar} alt={`Senator ${lastName} ${firstName}`} width={150} />
        <div className="sm:hidden p-4">
          <p className="text-sm text-gray-600 font-lulo">{usState} - {party}</p>
          <small className="text-gray-700 text-xs italic">Up for re-election in {upForReElection}</small>
        </div>
      </div>

      <div className="bg-white sm:rounded-r rounded-b p-2 leading-normal w-full overflow-auto">
        <div className="mb-4 leading-tight">
          <p className="hidden sm:inline-block text-sm text-gray-600 font-lulo">{usState} - {party}</p>
          <h3 className="text-gray-900 font-bold text-xl font-luloBold">{firstName} {lastName}</h3>
          <small className="hidden sm:inline-block text-gray-700 text-xs italic">Up for re-election in {upForReElection}</small>
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
