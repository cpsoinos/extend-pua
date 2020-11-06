import congressDbFixture from 'assets/CongressDatabase.json'
import { CongressDbRecord } from 'types/CongressDatabaseResponse'
import { camelizeKeys } from 'humps'

export const useCongressDatabase = () => {
  const getCongressMembers = async () => {
    return (camelizeKeys(congressDbFixture) as Record<string, any>[]).map((record) => {
      const st = record.sT
      delete record.sT
      const igHandle = record.iGHandle
      const igLink = record.iGLink
      delete record.iGHandle
      delete record.iGLink
      return {
        ...record,
        st,
        igHandle,
        igLink
      }
    }) as unknown as CongressDbRecord[]
  }

  return { getCongressMembers }
}
