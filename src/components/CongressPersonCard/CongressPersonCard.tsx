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

  const imageWrapperClasses = classNames(
    'flex',
    'justify-center',
    'rounded-t',
    'sm:rounded-l',
    'w-full',
    'p-8',
    'sm:pl-4',
    'sm:pr-0',
    'sm:py-0',
    {
      'bg-background-blue': party === 'D',
      'bg-red-flag': party === 'R',
      'bg-gray-400': party === 'I***'
    }
  )

  const imageClasses = classNames(
    'sm:h-auto',
    'flex-none',
    'rounded',
    'sm:rounded-none',
    'object-cover',
    'overflow-hidden',
    'sm:w-full',
    {
      'border-background-blue': party === 'D',
      'border-red-flag': party === 'R',
      'border-gray-400': party === 'I***'
    }
  )

  return (
    <div className="sm:flex w-full mb-4 px-0 sm:px-2 sm:rounded-md rounded-t">
      <div className={imageWrapperClasses}>
        <img className={imageClasses} loading="lazy" src={avatar} alt={`Senator ${lastName} ${firstName}`} />
      </div>

      <div className="bg-white sm:rounded-r rounded-b sm:rounded-bl-none p-2 leading-normal w-full overflow-auto">
        <div className="mb-4 leading-tight">
          <p className="inline-block text-sm text-gray-600 font-lulo">{usState} - {party}</p>
          <h3 className="text-gray-900 font-bold text-xl font-luloBold">{firstName} {lastName}</h3>
          <small className="inline-block text-gray-700 text-xs italic">Up for re-election in {upForReElection}</small>
        </div>

        <ul>
          {socialHandles.map((socialHandle, i) => (
            <li className="truncate" key={i}>
              <SocialHandleLink {...socialHandle} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CongressPersonCard
