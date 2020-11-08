import { CongressDbRecord } from './CongressDbRecord'

export interface CongressDatabaseResponse {
  items: CongressDbRecord[]
}

export enum LinkCongressSocialHandlesAll {
  CongressSocialHandles = "/senator-social-handles/",
}
