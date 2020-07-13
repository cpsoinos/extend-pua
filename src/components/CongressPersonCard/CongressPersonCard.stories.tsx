import React from 'react'
import CongressPersonCard from 'components/CongressPersonCard/CongressPersonCard'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhone } from '@fortawesome/pro-regular-svg-icons'
import withBaseStyles from '../../../.storybook/decorators/withBaseStyles'

export default {
  title: 'components/CongressPersonCard',
  component: CongressPersonCard,
  decorators: [withBaseStyles]
}

const instagram = {
  handle: '@KamalaHarris',
  url: 'instagram.com/kamalaharris',
  icon: faInstagram
}

const facebook = {
  handle: 'KamalaHarris',
  url: 'facebook.com/kamalaharris',
  icon: faFacebook
}

const twitter = {
  handle: '@KamalaHarris',
  url: 'twitter.com/kamalaharris',
  icon: faTwitter
}

const phone = {
  handle: '(555) 867-5309',
  url: 'tel:(555) 867-5309',
  icon: faPhone
}

const mail = {
  handle: '(555) 867-5309',
  url: 'tel:(555) 867-5309',
  icon: faMailBulk
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
  mail
}

export const Default = () => {
  return (
    <div className="container mx-auto">
      <CongressPersonCard {...props} />
    </div>
  )
}
