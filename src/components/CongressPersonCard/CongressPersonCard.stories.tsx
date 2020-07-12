import React from 'react'
import CongressPersonCard from './CongressPersonCard'
import withBaseStyles from '../../../.storybook/decorators/withBaseStyles'

export default {
  title: 'components/CongressPersonCard',
  component: CongressPersonCard,
  decorators: [withBaseStyles]
}

const instagram = {
  platform: 'instagram',
  handle: '@KamalaHarris',
  url: 'instagram.com/kamalaharris'
}

const facebook = {
  platform: 'facebook',
  handle: 'KamalaHarris',
  url: 'facebook.com/kamalaharris'
}

const twitter = {
  platform: 'twitter',
  handle: '@KamalaHarris',
  url: 'twitter.com/kamalaharris'
}

const phone = {
  platform: 'phone',
  handle: '(555) 867-5309',
  url: 'tel:(555) 867-5309'
}

const props = {
  avatar: "https://www.congress.gov/img/member/115_sr_ca_harris_kamala_200.jpg",
  lastName: 'Harris',
  firstName: 'Kamala',
  party: 'D',
  usState: 'CA',
  upForReElection: 2022,
  instagram,
  facebook,
  twitter,
  phone,
}

export const Default = () => {
  return (
    <div className="container mx-auto">
      <CongressPersonCard {...props} />
    </div>
  )
}

export const WithBaseFont = () => {
  return (
    <div className="container mx-auto font-sans">
      <CongressPersonCard {...props} />
    </div>
  )
}
