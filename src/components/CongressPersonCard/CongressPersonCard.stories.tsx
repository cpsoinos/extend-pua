import React from 'react'
import CongressPersonCard from 'components/CongressPersonCard/CongressPersonCard'
import { ReactComponent as EmailIcon } from 'assets/icons/Handles_SocialIcon_Email.svg'
import { ReactComponent as FacebookIcon } from 'assets/icons/Handles_SocialIcon_Facebook.svg'
import { ReactComponent as InstagramIcon } from 'assets/icons/Handles_SocialIcon_Instagram.svg'
import { ReactComponent as MeetIcon } from 'assets/icons/Handles_SocialIcon_Meet.svg'
import { ReactComponent as PhoneIcon } from 'assets/icons/Handles_SocialIcon_Phone.svg'
import { ReactComponent as TwitterIcon } from 'assets/icons/Handles_SocialIcon_Twitter.svg'
import withBaseStyles from '../../../.storybook/decorators/withBaseStyles'

export default {
  title: 'components/CongressPersonCard',
  component: CongressPersonCard,
  decorators: [withBaseStyles]
}

const instagram = {
  platform: 'instagram' as const,
  handle: '@KamalaHarris',
  url: 'instagram.com/kamalaharris',
  icon: InstagramIcon
}

const facebook = {
  platform: 'facebook' as const,
  handle: 'KamalaHarris',
  url: 'facebook.com/kamalaharris',
  icon: FacebookIcon
}

const twitter = {
  platform: 'twitter' as const,
  handle: '@KamalaHarris',
  url: 'twitter.com/kamalaharris',
  icon: TwitterIcon
}

const phone = {
  platform: 'phone' as const,
  handle: '(555) 867-5309',
  url: 'tel:(555) 867-5309',
  icon: PhoneIcon
}

const email = {
  platform: 'email' as const,
  handle: 'Email your elected official',
  url: 'tel:(555) 867-5309',
  icon: EmailIcon
}

const meet = {
  platform: 'meet' as const,
  handle: 'Virtually meet with your elected official',
  url: 'https://www.extendpua.org/meet',
  icon: MeetIcon
}

const props = {
  branch: 'Senate',
  lastName: 'Harris',
  firstName: 'Kamala',
  party: 'D' as const,
  usState: 'California',
  upForReElection: 2022,
  instagram,
  facebook,
  twitter,
  phone,
  email,
  meet
}

export const Desktop = () => {
  return (
    <div className="container flex w-full md:w-1/2">
      <CongressPersonCard {...props} />
    </div>
  )
}

export const Mobile = () => {
  return (
    <div className="container flex w-full md:w-1/2">
      <CongressPersonCard {...props} />
    </div>
  )
}
