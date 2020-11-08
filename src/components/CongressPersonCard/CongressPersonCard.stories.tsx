import React from 'react'
import CongressPersonCard from 'components/CongressPersonCard/CongressPersonCard'
import withBaseStyles from '../../../.storybook/decorators/withBaseStyles'
import { CongressDbRecord } from 'types/CongressDbRecord'

export default {
  title: 'components/CongressPersonCard',
  component: CongressPersonCard,
  decorators: [withBaseStyles]
}

const congressPerson: CongressDbRecord = {
  abbrevRef: "VA",
  branch: "Senate",
  district: "VA",
  email: "https://www.kaine.senate.gov/contact/share-your-opinion",
  facebookLink: "http://www.facebook.com/SenatorKaine",
  facebookPage: "SenatorKaine",
  first: "Tim",
  igHandle: "timkaine",
  igLink: "http://www.instagram.com/timkaine",
  last: "Kaine",
  localPhone: "Abingdon: 276-525-4790↵Danville: 434-792-0976↵Manassas: 703-361-3192↵Richmond: 804-771-2221↵Roanoke: 540-682-5693↵Virginia Beach: 757-518-1674",
  party: "D",
  phoneNumber: "(202) 224-4024",
  reElection: undefined,
  st: "Virginia",
  twitterHandle: "timkaine",
  twitterLink: "http://www.twitter.com/",
  website: "https://www.kaine.senate.gov",
  createdDate: "2020-11-05T20:55:22.903Z",
  id: "ea8495b5-0dc5-40be-8961-79aad5dd3dae",
  owner: "82a6b187-ace8-480e-b77b-51e334bd4298",
  updatedDate: "2020-11-05T20:57:23.183Z"
}

export const Desktop = () => {
  return (
    <div className="container flex w-full md:w-1/2">
      <CongressPersonCard congressPerson={congressPerson} />
    </div>
  )
}

export const Mobile = () => {
  return (
    <div className="container flex w-full md:w-1/2">
      <CongressPersonCard congressPerson={congressPerson} />
    </div>
  )
}
