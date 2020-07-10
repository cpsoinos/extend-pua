import React from 'react'
import Button from '../Button/Button'

export interface SocialHandleButtonProps {
  platform: string
  handle?: string
  url?: string
  phone?: string
}

const SocialHandleButton = (props: SocialHandleButtonProps) => {
  const { platform, handle, url, phone } = props

  return (
    <div className="text-center text-xxs p-1">
      <Button href={url} className="w-full truncate">
        {handle || ''}
      </Button>
      <p className="uppercase text-white mt-2 text-xxs font-semibold tracking-wider">
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
