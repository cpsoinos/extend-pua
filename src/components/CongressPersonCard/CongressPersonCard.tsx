import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/pro-regular-svg-icons'
import classNames from 'classnames'
import { SocialHandleButtonProps } from '../SocialHandleButton/SocialHandleButton'

export interface CongressPersonCardProps {
  avatar?: string,
  lastName: string
  firstName: string
  party: string
  usState: string
  upForReElection: number
  instagram: SocialHandleButtonProps
  twitter: SocialHandleButtonProps
  facebook: SocialHandleButtonProps
  phone: SocialHandleButtonProps
  email: SocialHandleButtonProps
}

const CongressPersonCard = (props: CongressPersonCardProps) => {
  const { avatar, lastName, firstName, party, usState, upForReElection, instagram, twitter, facebook, email, phone } = props

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
    <div className="flex w-full">
      <img className={imageClasses} src={avatar} alt={`Senator ${lastName} ${firstName}`} width={200} />

      <div className="border border-gray-400 bg-white rounded-r p-4 leading-normal w-full overflow-auto">
        <div className="mb-4">
          <p className="text-sm text-gray-600 flex items-center font-lulo">
            {usState} - {party}
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2 font-luloBold">{firstName} {lastName}</div>
          <p className="text-gray-700 text-xs italic">Up for re-election in {upForReElection}</p>
        </div>

        <ul>
          <li className="truncate">
            <a href={facebook.url} className="text-gray-900">
              <FontAwesomeIcon className="mr-1" icon={faFacebook} fixedWidth />
              {facebook.handle}
            </a>
          </li>
          <li className="truncate">
            <a href={twitter.url} className="text-gray-900">
              <FontAwesomeIcon className="mr-1" icon={faTwitter} fixedWidth />
              {twitter.handle}
            </a>
          </li>
          <li className="truncate">
            <a href={instagram.url} className="text-gray-900">
              <FontAwesomeIcon className="mr-1" icon={faInstagram} fixedWidth />
              {instagram.handle}
            </a>
          </li>
          <li className="truncate">
            <a href={email.url} className="text-gray-900">
              <FontAwesomeIcon className="mr-1" icon={faEnvelope} fixedWidth />
              {email.handle}
            </a>
          </li>
          <li className="truncate">
            <a href={phone.url} className="text-gray-900">
              <FontAwesomeIcon className="mr-1" icon={faPhone} fixedWidth />
              {phone.handle}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CongressPersonCard
