import React from 'react'
import Button from 'components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface SocialHandleLinkProps {
  handle?: string
  url?: string
  icon: IconDefinition
}

const SocialHandleButton = (props: SocialHandleLinkProps) => {
  const { handle, url, icon } = props

  return (
    <Button href={url} className="text-gray-900">
      <>
        <FontAwesomeIcon className="mr-1" icon={icon} fixedWidth />
        <span className="tooltip">
          <span className="tooltip-text bg-black rounded text-white -ml-8 -mt-8">{handle}</span>
          {handle}
        </span>
      </>
    </Button>
  )
}

export default SocialHandleButton
