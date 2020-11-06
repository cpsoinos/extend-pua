import { SenatorSocialHandleRecord } from './SenatorSocialHandleRecord'

export interface CongressSocialHandlesResponse {
  items: SenatorSocialHandleRecord[]
}

export enum LinkCongressSocialHandlesAll {
  CongressSocialHandles = "/senator-social-handles/",
}
