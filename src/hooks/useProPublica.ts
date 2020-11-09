import { ProPublicaMembersResponse } from 'types/ProPublicaMembersResponse'

export const useProPublica = () => {
  const getBranch = async (branch: 'house' | 'senate') => {
    const response: ProPublicaMembersResponse = await (await (await fetch(`https://api.propublica.org/congress/v1/116/${branch}/members.json`, {
      headers: {
        'X-API-Key': 'GHtXCa0aHMKfiloeq1oX7II8YsZ9pfx5ZXUANncl'
      }
    })).json())
    return response.results[0].members
  }

  return { getBranch }
}
