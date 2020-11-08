import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import SocialHandleLink from 'components/SocialHandleLink/SocialHandleLink'
import { ReactComponent as LogoBlue } from 'assets/svgs/Handles_XPUAFooter_Blue-SVG.svg'
import { ReactComponent as LogoRed } from 'assets/svgs/Handles_XPUAFooter_Red-SVG.svg'
import { ReactComponent as LogoPurple } from 'assets/svgs/Handles_XPUAFooter_Purple-SVG.svg'
import { CongressDbRecord } from 'types/CongressDbRecord'
import { useBuildSocialInfo } from 'hooks/useBuildSocialInfo'
import { useCloudinary } from 'hooks/useCloudinary'

export interface CongressPersonCardProps {
  congressPerson: CongressDbRecord
}

const branchMap = new Map([
  ['House', 'Representative'],
  ['Senate', 'Senator'],
])

interface LogoProps {
  party: 'D' | 'R' | 'I***'
  className?: string
}

const Logo = (props: LogoProps) => {
  const { party, className } = props

  switch (party) {
    case 'D': {
      return <LogoBlue className={className} />
    }
    case 'R': {
      return <LogoRed className={className} />
    }
    default: {
      return <LogoPurple className={className} />
    }
  }
}

const CongressPersonCard = (props: CongressPersonCardProps) => {
  const { congressPerson } = props
  const {
    branch,
    last: lastName,
    first: firstName,
    party,
    st: usState,
    reElection: upForReElection
  } = congressPerson
  const { buildInstagram, buildFacebook, buildTwitter, buildPhone, buildEmail, buildMeet } = useBuildSocialInfo()
  const [imageSrc, setImageSrc] = useState('')

  const { src: fbSrc } = useCloudinary({
    height: 360,
    width: 272,
    type: 'facebook',
    publicId: congressPerson.facebookPage
  })

  const { src: twSrc } = useCloudinary({
    height: 360,
    width: 272,
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
    <div className="congress-person-card sm:flex w-full mb-4 rounded shadow">
      <div className={imageWrapperClasses}>
        <img
          className={imageClasses}
          src={imageSrc}
          onError={onImageError}
          alt={`${branchMap.get(branch)} ${lastName} ${firstName}`}
          loading="lazy"
          height={360}
          width={272}
        />
      </div>

      <div className="relative bg-white sm:rounded-r rounded-b sm:rounded-bl-none p-2 leading-normal w-full overflow-auto">
        <div className="mb-4 leading-tight">
          <p className="inline-block text-xl text-gray-600 font-futuraPTLight">{usState} - {party}</p>
          <h3 className="text-gray-900 font-bold text-xl font-luloBold">{firstName} {lastName}</h3>
          <small className="inline-block text-gray-700 text-sm font-futuraPTLightOblique">Up for re-election in {upForReElection}</small>
        </div>

        <ul className="mb-12" >
          {Object.values(socialHandles).map((socialHandle, i) => (
            <li className="font-futuraPTLight mb-2" key={i}>
              <SocialHandleLink {...socialHandle} />
            </li>
          ))}
        </ul>
        <Logo className="absolute bottom-0 pb-2 px-2" party={party} />
      </div>
    </div>
  )
}

export default CongressPersonCard
