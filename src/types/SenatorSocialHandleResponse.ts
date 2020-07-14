import { SenatorSocialHandleRecord } from './SenatorSocialHandleRecord'

export interface SenatorSocialHandlesResponse {
  items: SenatorSocialHandleRecord[]
}

export enum LinkSenatorSocialHandlesAll {
  SenatorSocialHandles = "/senator-social-handles/",
}
