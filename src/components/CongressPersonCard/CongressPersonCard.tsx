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
    'rounded-tl',
    'sm:rounded-br-none',
    'sm:rounded-bl',
    'object-cover',
    'overflow-hidden',
    'border-b-8',
    'sm:border-b-0',
    'sm:border-l-8',
    'h-32',
    'w-32',
    'sm:w-full',
    {
      'border-background-blue': party === 'D',
      'border-red-flag': party === 'R',
      'border-gray-500': party === '***'
    }
  )

  return (
    <div className="sm:flex w-full md:w-1/2 mb-4 px-0 sm:px-2 sm:rounded-md rounded-t">
      <div className="flex bg-white rounded-t rounded-l">
        <img className={imageClasses} src={avatar} alt={`Senator ${lastName} ${firstName}`} width={150} />
        <div className="flex flex-col justify-center sm:hidden bg-red-flag w-full rounded-tr p-6">
          <p className="text-sm text-white font-lulo">{usState} - {party}</p>
          <p className="text-white text-xs italic leading-tight mt-4">Up for re-election <br />in {upForReElection}</p>
        </div>
      </div>

      <div className="bg-white sm:rounded-r rounded-b sm:rounded-bl-none p-2 leading-normal w-full overflow-auto">
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
