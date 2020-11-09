import React from 'react'
import SocialHandleLink from 'components/SocialHandleLink/SocialHandleLink'
import { ReactComponent as EmailIcon } from 'assets/icons/Handles_SocialIcon_Email.svg'
import { ReactComponent as FacebookIcon } from 'assets/icons/Handles_SocialIcon_Facebook.svg'
import { ReactComponent as InstagramIcon } from 'assets/icons/Handles_SocialIcon_Instagram.svg'
import { ReactComponent as MeetIcon } from 'assets/icons/Handles_SocialIcon_Meet.svg'
import { ReactComponent as PhoneIcon } from 'assets/icons/Handles_SocialIcon_Phone.svg'
import { ReactComponent as TwitterIcon } from 'assets/icons/Handles_SocialIcon_Twitter.svg'

export default {
  title: 'components/SocialHandleLink',
  component: SocialHandleLink
}

export const Instagram = () => {
  return (
    <SocialHandleLink platform="instagram" handle="@GeorgeWashington" url="https://instagram.com/GeorgeWashington" icon={InstagramIcon} />
  )
}

export const Twitter = () => {
  return (
    <SocialHandleLink platform="twitter" handle="@GeorgeWashington" url="https://twitter.com/GeorgeWashington" icon={TwitterIcon} />
  )
}

export const Facebook = () => {
  return (
    <SocialHandleLink platform="facebook" handle="GeorgeWashington" url="https://facebook.com/GeorgeWashington" icon={FacebookIcon} />
  )
}

export const Phone = () => {
  return (
    <SocialHandleLink platform="phone" handle="(555) 867-5309" url="tel:(555) 867-5309" icon={PhoneIcon} />
  )
}

export const Email = () => {
  return (
    <SocialHandleLink platform="email" handle="Write your senator" url="https://www.extendpua.org/write" icon={EmailIcon} />
  )
}

export const Meet = () => {
  return (
    <SocialHandleLink platform="meet" handle="Write your senator" url="https://www.extendpua.org/write" icon={MeetIcon} />
  )
}
