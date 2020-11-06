import React from 'react'
import classNames from 'classnames'
import SocialHandleLink, { SocialHandleLinkProps } from 'components/SocialHandleLink/SocialHandleLink'
import { Image } from 'cloudinary-react'

export interface CongressPersonCardProps {
  branch: string
  lastName: string
  firstName: string
  party: string
  usState: string
  upForReElection?: number
  instagram: SocialHandleLinkProps
  twitter: SocialHandleLinkProps
  facebook: SocialHandleLinkProps
  phone: SocialHandleLinkProps
  email: SocialHandleLinkProps
  meet: SocialHandleLinkProps
}

const CongressPersonCard = (props: CongressPersonCardProps) => {
  const { branch, lastName, firstName, party, usState, upForReElection, instagram, twitter, facebook, phone, email, meet } = props

  const socialHandles = [facebook, twitter, instagram, email, meet, phone]

  const imageWrapperClasses = classNames(
    'flex',
    'justify-center',
    'rounded-t',
    'sm:rounded-l',
    'w-5/6',
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

  const branchMap = new Map([
    ['House', 'Representative'],
    ['Senate', 'Senator'],
  ])

  const imageProps = {
    cloudName: "extend-pua",
    publicId: facebook.handle ? facebook.handle : twitter.handle,
    type: facebook.handle ? "facebook" : "twitter_name",
    dpr: "auto",
    responsive: true,
    width: 200,
    height: 500,
    crop: "fill",
    gravity: 'face',
    fetchFormat: 'auto',
    responsiveUseBreakpoints: "true",
    loading: "lazy",
    alt: `${branchMap.get(branch)} ${lastName} ${firstName}`
  }

  return (
    <div className="sm:flex w-full mb-4 sm:rounded-md rounded-t">
      <div className={imageWrapperClasses}>
        <Image className={imageClasses} {...imageProps} />
      </div>

      <div className="bg-white sm:rounded-r rounded-b sm:rounded-bl-none p-2 leading-normal w-full overflow-auto">
        <div className="mb-4 leading-tight">
          <p className="inline-block text-gray-600 font-futuraPTLight">{usState} - {party}</p>
          <h3 className="text-gray-900 font-bold text-xl font-luloBold">{firstName} {lastName}</h3>
          <small className="inline-block text-gray-700 text-sm font-futuraPTLightOblique">Up for re-election in {upForReElection}</small>
        </div>

        <ul>
          {socialHandles.map((socialHandle, i) => (
            <li className="truncate font-futuraPTLight mb-2" key={i}>
              <SocialHandleLink {...socialHandle} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CongressPersonCard
