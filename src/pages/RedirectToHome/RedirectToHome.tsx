import React, { useEffect } from 'react'

const RedirectToHome = () => {
  useEffect(() => {
    window.location.href = 'https://extendpua.org'
  }, [])
  return <></>
}

export default RedirectToHome
