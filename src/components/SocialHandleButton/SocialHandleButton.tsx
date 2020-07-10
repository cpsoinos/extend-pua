import React from 'react'
import Button from '../Button/Button'

export interface SocialHandleButtonProps {
  platform:  string // 'facebook' | 'twitter' | 'instagram' | 'emailAndPhone'
  handle: string
  url: string
  phone?: string
}

const SocialHandleButton = (props: SocialHandleButtonProps) => {
  const { platform, handle, url, phone } = props

  return (
    <div className="text-center text-xs">
      <Button href={url}>
        {handle}
      </Button>
      <p className="uppercase text-white mt-2 text-sm font-semibold tracking-wider">
        {phone && (
          <a href={`tel:${phone}`}>
            {phone}
          </a>
        )}
        {!phone && platform}
      </p>
    </div>
  )
}

export default SocialHandleButton
