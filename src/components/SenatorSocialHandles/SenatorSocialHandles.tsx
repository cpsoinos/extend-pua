import React, { useState, useEffect } from 'react';
import SenatorSocialInfoRow from '../SenatorSocialInfoRow/SenatorSocialInfoRow'
import Button from '../Button/Button'
import { useSenatorSocialHandles } from '../../hooks/useSenatorSocialHandles'
import { SenatorSocialHandleRecord } from '../../types/SenatorSocialHandleResponse'
import { useBuildSocialInfo } from '../../hooks/useBuildSocialInfo'
import sortBy from 'lodash/sortBy'

const SenatorSocialHandles = () => {
  const [senators, setSenators] = useState<SenatorSocialHandleRecord[]>([])
  const { getSenatorSocialHandles } = useSenatorSocialHandles()
  const { buildInstagram, buildFacebook, buildTwitter, buildEmailAndPhone } = useBuildSocialInfo()
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
      <div className="flex justify-around py-4">
        <Button className="text-xxs" onClick={() => setOrderBy('st')}>Sort by state</Button>
        <Button className="text-xxs" onClick={() => setOrderBy('party')}>Sort by party</Button>
        <Button className="text-xxs" onClick={() => setOrderBy('reElection')}>Sort by re-election</Button>
        <Button className="text-xxs" onClick={() => setOrderBy('last')}>Sort by name</Button>
      </div>
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
