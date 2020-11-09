import React, { FunctionComponent, SVGProps } from 'react'
import Button from 'components/Button/Button'

export interface SocialHandleLinkProps {
  platform:
    | 'email'
    | 'facebook'
    | 'instagram'
    | 'meet'
    | 'phone'
    | 'twitter'
  handle?: string
  url?: string
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

const SocialHandleButton = (props: SocialHandleLinkProps) => {
  const { platform, handle, url, icon } = props

  const SocialIcon = icon
  const buttonName = `congress-person-card_${platform}`

  return (
    <Button href={url} name={buttonName} className="flex items-start">
      <>
        {(<SocialIcon height={24} width={24} className="inline-block mr-2" />)}
        <span className="text-left whitespace-pre-wrap">{handle}</span>
      </>
    </Button>
  )
}

export default SocialHandleButton
