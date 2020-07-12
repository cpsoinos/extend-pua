export const useSenateList = () => {
  const getSenateList = async () => {
    const senateList = await (await (await fetch('https://api.propublica.org/congress/v1/116/senate/members.json', {
      headers: {
        'X-API-KEY': 'GHtXCa0aHMKfiloeq1oX7II8YsZ9pfx5ZXUANncl'
      }
    })).json())
    return senateList
  }
  return { getSenateList }
}
