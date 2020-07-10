import React, { useState, useEffect } from 'react';
import SenatorSocialInfoRow from '../SenatorSocialInfoRow/SenatorSocialInfoRow'
import { useSenatorSocialHandles } from '../../hooks/useSenatorSocialHandles'
import { SenatorSocialHandleRecord } from '../../types/SenatorSocialHandleResponse'
import { useBuildSocialInfo } from '../../hooks/useBuildSocialInfo'

const SenatorSocialHandles = () => {
  const [senators, setSenators] = useState<SenatorSocialHandleRecord[]>([])
  const { getSenatorSocialHandles } = useSenatorSocialHandles()
  const { buildInstagram, buildFacebook, buildTwitter, buildEmailAndPhone } = useBuildSocialInfo()

  useEffect(() => {
    getSenatorSocialHandles().then(setSenators)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {senators.map((senator, i) => {
        return (
          <SenatorSocialInfoRow
            key={i}
            lastName={senator.last}
            firstName={senator.first}
            usState={senator.st}
            party={senator.party}
            upForReElection={+senator.reElection}
            instagram={buildInstagram(senator)}
            twitter={buildTwitter(senator)}
            facebook={buildFacebook(senator)}
            emailAndPhone={buildEmailAndPhone(senator)}
          />
        )
      })}
    </>
  )
}

export default SenatorSocialHandles;
