import React from 'react'
import SocialHandleButton from './SocialHandleButton'

export default {
  title: 'components/SocialHandleButton',
  component: SocialHandleButton,
  parameters: {
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ]
  }
}

export const Instagram = () => {
  return (
    <SocialHandleButton platform="instagram" handle="@GeorgeWashington" url="https://instagram.com/GeorgeWashington" />
  )
}

export const Twitter = () => {
  return (
    <SocialHandleButton platform="twitter" handle="@GeorgeWashington" url="https://twitter.com/GeorgeWashington" />
  )
}

export const Facebook = () => {
  return (
    <SocialHandleButton platform="facebook" handle="GeorgeWashington" url="https://facebook.com/GeorgeWashington" />
  )
}

export const EmailAndPhone = () => {
  return (
    <SocialHandleButton platform="emailAndPhone" handle="george@washington.gov" url="mailto:george@washington.gov" phone="(555) 867-5309" />
  )
}