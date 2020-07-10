import React from 'react'
import SenatorSocialInfoRow from './SenatorSocialInfoRow'

export default {
  title: 'components/SenatorSocialInfoRow',
  component: SenatorSocialInfoRow,
  parameters: {
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ]
  }
}

export const Default = () => {
  const instagram = { platform: 'instagram', handle: '@GeorgeWashington', url: 'https://instagram.com/GeorgeWashington' }
  const twitter = { platform: 'twitter', handle: '@GeorgeWashington', url: 'https://twitter.com/GeorgeWashington' }
  const facebook = { platform: 'facebook', handle: 'GeorgeWashington', url: 'https://facebook.com/GeorgeWashington' }
  const emailAndPhone = { platform: 'emailAndPhone', handle: 'george@washington.gov', url: 'george@washington.gov', phone: '(555) 867-5309' }

  return (
    <SenatorSocialInfoRow
      lastName="Murkowski"
      firstName="Lisa"
      usState="AK"
      party="R"
      upForReElection={2022}
      instagram={instagram}
      twitter={twitter}
      facebook={facebook}
      emailAndPhone={emailAndPhone}
    />
  )
}
