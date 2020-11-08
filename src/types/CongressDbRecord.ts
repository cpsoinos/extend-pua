export interface CongressDbRecord {
  id: string
  owner: string
  createdDate: string
  updatedDate: string
  first: string
  last: string
  st: string
  reElection?: null
  party: 'D' | 'R' | 'I***'
  twitterHandle: string
  twitterLink: string
  igHandle: string
  igLink: string
  facebookPage: string
  facebookLink: string
  phoneNumber: string
  abbrevRef: string
  email: string
  website: string
  localPhone: string
  branch: string
  district: string
}
