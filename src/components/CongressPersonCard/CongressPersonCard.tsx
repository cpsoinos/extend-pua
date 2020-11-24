import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import SocialHandleLink from 'components/SocialHandleLink/SocialHandleLink'
import Button from 'components/Button/Button'
import { CongressDbRecord } from 'types/CongressDbRecord'
import { useBuildSocialInfo } from 'hooks/useBuildSocialInfo'
import { useCloudinary } from 'hooks/useCloudinary'
import Logo from 'components/Logo/Logo'
import useWindowDimensions from 'hooks/useWindowDimensions'

export interface CongressPersonCardProps {
  congressPerson: CongressDbRecord
  nextElection?: string
}

const branchMap = new Map([
  ['House', 'Representative'],
  ['Senate', 'Senator'],
])

const imageWidth = 272
const mobileImageHeight = 272
const desktopImageHeight = 460

const CongressPersonCard = (props: CongressPersonCardProps) => {
  const { congressPerson, nextElection } = props
  const {
    branch,
    last: lastName,
    first: firstName,
    party,
    st: usState,
  } = congressPerson
  const { buildInstagram, buildFacebook, buildTwitter, buildPhone, buildEmail, buildMeet } = useBuildSocialInfo()
  const [imageSrc, setImageSrc] = useState('')
  const { width: windowWidth } = useWindowDimensions()
  const [imageHeight, setImageHeight] = useState(mobileImageHeight)

  useEffect(() => {
    if (windowWidth < 768) {
      setImageHeight(mobileImageHeight)
    } else {
      setImageHeight(desktopImageHeight)
    }
  }, [windowWidth])

  const { src: fbSrc } = useCloudinary({
    height: imageHeight,
    width: imageWidth,
    type: 'facebook',
    publicId: congressPerson.facebookPage
  })

  const { src: twSrc } = useCloudinary({
    height: imageHeight,
    width: imageWidth,
    type: 'twitter_name',
    publicId: congressPerson.twitterHandle
  })

  useEffect(() => {
    setImageSrc(fbSrc)
  }, [fbSrc])

  const onImageError = () => setImageSrc(twSrc)

  const socialHandles = {
    facebook: buildFacebook(congressPerson),
    twitter: buildTwitter(congressPerson),
    instagram: buildInstagram(congressPerson),
    email: buildEmail(congressPerson),
    meet: buildMeet(congressPerson),
    phone: buildPhone(congressPerson)
  }

  const imageWrapperClasses = classNames(
    'flex',
    'justify-center',
    'rounded-t',
    'sm:rounded-l',
    'sm:w-5/6',
    'p-8',
    'sm:pl-4',
    'sm:pr-0',
    'sm:py-0',
    {
      'bg-brand-blue': party === 'D',
      'bg-brand-red': party === 'R',
      'bg-brand-purple': !['D', 'R'].includes(party)
    }
  )

  const imageClasses = classNames(
    'sm:h-auto',
    'shadow-lg',
    'sm:shadow-none',
    'flex-none',
    'rounded',
    'sm:rounded-none',
    'object-cover',
    'overflow-hidden',
    'sm:w-full',
    {
      'border-brand-blue': party === 'D',
      'border-brand-red': party === 'R',
      'bg-brand-purple': !['D', 'R'].includes(party)
    }
  )

  return (
    <div className="congress-person-card sm:flex w-full mb-4 rounded shadow">
      <div className={imageWrapperClasses}>
        <img
          className={imageClasses}
          src={imageSrc}
          onError={onImageError}
          alt={`${branchMap.get(branch)} ${lastName} ${firstName}`}
          loading="lazy"
          height={imageHeight}
          width={272}
        />
      </div>

      <div className="relative overflow-y-hidden bg-white sm:rounded-r rounded-b sm:rounded-bl-none p-2 leading-normal w-full overflow-auto">
        <div className="mb-4 leading-tight">
          <p className="inline-block text-xl text-gray-600 font-futuraPTLight">{usState} - {party} - {branch}</p>
          <h3 className="text-gray-900 font-bold text-xl font-luloBold">{firstName} {lastName}</h3>
          <small className="inline-block text-gray-700 text-sm font-futuraPTLightOblique">Up for re-election in {nextElection}</small>
        </div>

        <ul className="mb-12" >
          {Object.values(socialHandles).map((socialHandle, i) => (
            <li className="font-futuraPTLight mb-2" key={i}>
              <SocialHandleLink {...socialHandle} />
            </li>
          ))}
        </ul>
        <Logo className="absolute bottom-0 pb-6" party={party} />
        <small className="absolute bottom-0 right-0 pr-2">
          <Button href="mailto:fyi@extendpua.org" name="report_inaccurate_information">Report inaccurate information</Button>
        </small>
      </div>
    </div>
  )
}

export default React.memo(CongressPersonCard)
