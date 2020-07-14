import React from 'react'
import SocialHandleLink from 'components/SocialHandleLink/SocialHandleLink'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhone } from '@fortawesome/pro-regular-svg-icons'

export default {
  title: 'components/SocialHandleLink',
  component: SocialHandleLink
}

export const Instagram = () => {
  return (
    <SocialHandleLink platform="instagram" handle="@GeorgeWashington" url="https://instagram.com/GeorgeWashington" icon={faInstagram} />
  )
}

export const Twitter = () => {
  return (
    <SocialHandleLink platform="twitter" handle="@GeorgeWashington" url="https://twitter.com/GeorgeWashington" icon={faTwitter} />
  )
}

export const Facebook = () => {
  return (
    <SocialHandleLink platform="facebook" handle="GeorgeWashington" url="https://facebook.com/GeorgeWashington" icon={faFacebook} />
  )
}

export const Phone = () => {
  return (
    <SocialHandleLink platform="phone" handle="(555) 867-5309" url="tel:(555) 867-5309" icon={faPhone} />
  )
}

export const Mail = () => {
  return (
    <SocialHandleLink platform="mail" handle="Write your senator" url="https://www.extendpua.org/write" icon={faMailBulk} />
  )
}
