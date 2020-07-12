import React, { useState, useEffect } from 'react';
import CongressPersonCard from '../../components/CongressPersonCard/CongressPersonCard'
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

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setOrderBy(value)
  }

  return (
    <>
      <p className="text-center text-white leading-none">
        Senate Social Handles List<br />
        Courtesy JOE BEUMER,{' '}
        <a className="underline" href="http://www.instagram.com/beanartshero">
          <span>@BE</span><span className="text-red-flag">AN</span>ARTS<span className="text-red-flag">HERO</span>
        </a>
      </p>

      <div className="flex justify-end mx-2 my-2">
        <label>
          <span className="text-white mr-2">Order by:</span>
          <select onChange={onChange}>
            <option value="st">State</option>
            <option value="party">Party</option>
            <option value="reElection">Re-election</option>
            <option value="last">Name</option>
          </select>
        </label>
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
