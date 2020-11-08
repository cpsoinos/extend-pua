import { CongressDatabaseResponse } from 'types/CongressDatabaseResponse'

export const useCongressDatabase = () => {
  const getCongressMembers = async () => {
    const congressMembers: CongressDatabaseResponse = await (await (await fetch('https://www.extendpua.org/_functions/congressDatabase')).json())
    return congressMembers.items
  }

  return { getCongressMembers }
}
