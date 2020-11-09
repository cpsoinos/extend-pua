import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => {
  return fetch(url, {
    headers: {
      'X-API-KEY': 'GHtXCa0aHMKfiloeq1oX7II8YsZ9pfx5ZXUANncl'
    }
  }).then((response) => response.json())
}

const SocialHandlesList = () => {
  const { data, error } = useSWR(`https://api.propublica.org/congress/v1/116/senate/members.json`, fetcher)

  return(
    <pre>
      {error && error}
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default SocialHandlesList
