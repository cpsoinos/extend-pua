import { LinkCongressSocialHandlesAll } from './SenatorSocialHandleResponse'
import { Party } from "./Party"

export interface SenatorSocialHandleRecord {
  avatar?: string
  st: string
  igCould?: string
  phoneNumber: string
  facebookCount?: string
  igHandle: string
  _id: string
  _owner: string
  _createdDate: Date
  twitterHandle: string
  _updatedDate: Date
  last: string
  igLink?: string
  party: Party
  twitterCount?: string
  reElection: string
  first: string
  twitterLink: string
  facebookLink: string
  facebookPage: string
  "link-senator-social-handles-all": LinkCongressSocialHandlesAll
}
