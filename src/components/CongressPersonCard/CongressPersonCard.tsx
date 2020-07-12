import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhone } from '@fortawesome/pro-regular-svg-icons'
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
    <div className="flex w-full md:w-1/2 mb-4 px-0 sm:px-2 rounded-md">
      <img className={imageClasses} src={avatar} alt={`Senator ${lastName} ${firstName}`} width={150} />

      <div className="bg-white border border-gray-400 rounded-r p-2 leading-normal w-full overflow-auto">
        <div className="mb-4 leading-tight">
          <p className="text-sm text-gray-600 font-lulo">{usState} - {party}</p>
          <h3 className="text-gray-900 font-bold text-xl font-luloBold">{firstName} {lastName}</h3>
          <small className="text-gray-700 text-xs italic">Up for re-election in {upForReElection}</small>
        </div>

        <ul>
          <li className="truncate">
            <a href={facebook.url} className="text-gray-900">
              <FontAwesomeIcon className="mr-1" icon={faFacebook} fixedWidth />
              <span className="tooltip">
                <span className="tooltip-text bg-black rounded text-white -ml-8 -mt-8">{facebook.handle}</span>
                {facebook.handle}
              </span>
            </a>
          </li>
          <li className="truncate">
            <a href={twitter.url} className="text-gray-900">
              <FontAwesomeIcon className="mr-1" icon={faTwitter} fixedWidth />
              <span className="tooltip">
                <span className="tooltip-text bg-black rounded text-white -ml-8 -mt-8">{twitter.handle}</span>
                {twitter.handle}
              </span>
            </a>
          </li>
          <li className="truncate">
            <a href={instagram.url} className="text-gray-900">
              <FontAwesomeIcon className="mr-1" icon={faInstagram} fixedWidth />
              <span className="tooltip">
                <span className="tooltip-text bg-black rounded text-white -ml-8 -mt-8">{instagram.handle}</span>
                {instagram.handle}
              </span>
            </a>
          </li>
          <li className="truncate">
            <a href={phone.url} className="text-gray-900">
              <FontAwesomeIcon className="mr-1" icon={faPhone} fixedWidth />
              <span className="tooltip">
                <span className="tooltip-text bg-black rounded text-white -ml-8 -mt-8">{phone.handle}</span>
                {phone.handle}
              </span>
            </a>
          </li>
          <li className="truncate">
            <a href="https://www.extendpua.org/write" className="text-gray-900">
              <FontAwesomeIcon className="mr-1" icon={faMailBulk} fixedWidth />
              Write your senator
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CongressPersonCard
