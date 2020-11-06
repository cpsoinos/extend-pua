import React from 'react'
import CongressPersonCard from 'components/CongressPersonCard/CongressPersonCard'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhone, faEnvelope } from '@fortawesome/pro-regular-svg-icons'
import withBaseStyles from '../../../.storybook/decorators/withBaseStyles'

export default {
  title: 'components/CongressPersonCard',
  component: CongressPersonCard,
  decorators: [withBaseStyles]
}

const instagram = {
  platform: 'instagram',
  handle: '@KamalaHarris',
  url: 'instagram.com/kamalaharris',
  icon: faInstagram
}

const facebook = {
  platform: 'facebook',
  handle: 'KamalaHarris',
  url: 'facebook.com/kamalaharris',
  icon: faFacebook
}

const twitter = {
  platform: 'twitter',
  handle: '@KamalaHarris',
  url: 'twitter.com/kamalaharris',
  icon: faTwitter
}

const phone = {
  platform: 'phone',
  handle: '(555) 867-5309',
  url: 'tel:(555) 867-5309',
  icon: faPhone
}

const email = {
  platform: 'email',
  handle: 'Email your elected official',
  url: 'tel:(555) 867-5309',
  icon: faEnvelope
}

const meet = {
  platform: 'meet',
  handle: 'Virtually meet with your elected official',
  url: 'https://www.extendpua.org/meet',
  icon: faMailBulk
}

const props = {
  branch: 'Senate',
  lastName: 'Harris',
  firstName: 'Kamala',
  party: 'D',
  usState: 'CA',
  upForReElection: 2022,
  instagram,
  facebook,
  twitter,
  phone,
  email,
  meet
}

export const Default = () => {
  return (
    <div className="container mx-auto">
      <CongressPersonCard {...props} />
    </div>
  )
}
