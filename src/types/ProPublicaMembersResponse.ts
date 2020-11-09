export interface ProPublicaMembersResponse {
  status: string
  copyright: string
  results: ProPublicaMembersResult[]
}

export interface ProPublicaMembersResult {
  congress: string
  chamber: string
  num_results: number
  offset: number
  members: Member[]
}

export interface Member {
  id: string
  title: Title
  short_title: ShortTitle
  api_uri: string
  first_name: string
  middle_name: null | string
  last_name: string
  suffix: null | string
  date_of_birth: Date
  gender: Gender
  party: Party
  leadership_role: null | string
  twitter_account: null | string
  facebook_account: null | string
  youtube_account: null | string
  govtrack_id: null | string
  cspan_id: null | string
  votesmart_id: null | string
  icpsr_id: null | string
  crp_id: null | string
  google_entity_id: null | string
  fec_candidate_id: string
  url: string
  rss_url: null | string
  contact_form: null | string
  in_office: boolean
  cook_pvi: null | string
  dw_nominate: number | null
  ideal_point: null
  seniority: string
  next_election: string
  total_votes: number | null
  missed_votes: number | null
  total_present: number | null
  last_updated: string
  ocd_id: string
  office: null | string
  phone: null | string
  fax: null
  state: string
  district: string
  at_large: boolean
  geoid: string
  missed_votes_pct?: number
  votes_with_party_pct?: number
  votes_against_party_pct?: number
}

export enum Gender {
  F = "F",
  M = "M",
}

export enum Party {
  D = "D",
  I = "I",
  R = "R",
}

export enum ShortTitle {
  Del = "Del.",
  RC = "R.C.",
  Rep = "Rep.",
}

export enum Title {
  Delegate = "Delegate",
  Representative = "Representative",
  ResidentCommissioner = "Resident Commissioner",
}
