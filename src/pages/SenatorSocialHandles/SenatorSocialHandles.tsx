import React, { useState, useEffect } from 'react';
import CongressPersonCard from '../../components/CongressPersonCard/CongressPersonCard'
import Button from '../../components/Button/Button'
import { SenatorSocialHandleRecord } from '../../types/SenatorSocialHandleResponse'
import { useSenatorSocialHandles } from '../../hooks/useSenatorSocialHandles'
import { useBuildSocialInfo } from '../../hooks/useBuildSocialInfo'
import sortBy from 'lodash/sortBy'

const SenatorSocialHandles = () => {
  const [senators, setSenators] = useState<SenatorSocialHandleRecord[]>([])
  const { getSenatorSocialHandles } = useSenatorSocialHandles()
  const { buildInstagram, buildFacebook, buildTwitter, buildEmail, buildPhone } = useBuildSocialInfo()
  const [orderBy, setOrderBy] = useState('st')

  useEffect(() => {
    getSenatorSocialHandles().then((data) => {
      setSenators(sortBy(data, orderBy))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setSenators(sortBy(senators, orderBy))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderBy])

  return (
    <>
      <p className="text-center text-white leading-none">
        Senate Social Handles List<br />
        Courtesy JOE BEUMER,{' '}
        <a className="underline" href="http://www.instagram.com/beanartshero">
          <span>@BE</span><span className="text-red-flag">AN</span>ARTS<span className="text-red-flag">HERO</span>
        </a>
      </p>
      <div className="flex justify-around py-4 space-x-1">
        <Button className="text-xxs" onClick={() => setOrderBy('st')}>Sort by state</Button>
        <Button className="text-xxs" onClick={() => setOrderBy('party')}>Sort by party</Button>
        <Button className="text-xxs" onClick={() => setOrderBy('reElection')}>Sort by re-election</Button>
        <Button className="text-xxs" onClick={() => setOrderBy('last')}>Sort by name</Button>
      </div>

      <div className="flex flex-wrap">
        {senators.map((senator, i) => {
          return (
            <CongressPersonCard
              key={i}
              avatar={senator.avatar}
              lastName={senator.last}
              firstName={senator.first}
              usState={senator.st}
              party={senator.party}
              upForReElection={+senator.reElection}
              instagram={buildInstagram(senator)}
              twitter={buildTwitter(senator)}
              facebook={buildFacebook(senator)}
              email={buildEmail(senator)}
              phone={buildPhone(senator)}
            />
          )
        })}
      </div>
    </>
  )
}

export default SenatorSocialHandles;
