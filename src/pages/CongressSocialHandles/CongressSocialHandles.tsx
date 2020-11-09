import React, { useState, useEffect } from 'react'
import CongressPersonCard from 'components/CongressPersonCard/CongressPersonCard'
import Pagination from 'components/Pagination/Pagination'
import { useCongressDatabase } from 'hooks/useCongressDatabase'
import { useSearch } from 'hooks/useSearch'
import sortBy from 'lodash/sortBy'
import { CongressDbRecord } from 'types/CongressDbRecord'
import { useProPublica } from 'hooks/useProPublica'
import { Member } from 'types/ProPublicaMembersResponse'

const CongressSocialHandles = () => {
  const [senate, setSenate] = useState<Member[]>([])
  const [house, setHouse] = useState<Member[]>([])
  const { getBranch } = useProPublica()
  const [congressMembers, setCongressMembers] = useState<CongressDbRecord[]>([])
  const [filteredCongressMembers, setFilteredCongressMembers] = useState<CongressDbRecord[]>([])
  const { getCongressMembers } = useCongressDatabase()
  const [orderBy, setOrderBy] = useState('st')
  const [branch, setBranch] = useState('All')
  const { addIndex, addDocuments, search } = useSearch()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const perPage = 50

  useEffect(() => {
    ['branch', 'st', 'first', 'last', 'party', 'reElection'].map(addIndex)
    getBranch('senate').then(setSenate)
    getBranch('house').then(setHouse)
    getCongressMembers().then((data) => {
      const sorted = sortBy(data, orderBy)
      setCongressMembers(sorted)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setFilteredCongressMembers(sortBy(filteredCongressMembers, orderBy))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderBy])

  const onOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setOrderBy(value)
  }

  useEffect(() => {
    if (congressMembers.length) addDocuments(congressMembers)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [congressMembers])

  useEffect(() => {
    if (filteredCongressMembers.length % perPage) {
      setTotalPages((filteredCongressMembers.length / perPage) + 1)
    } else {
      setTotalPages(filteredCongressMembers.length / perPage)
    }
  }, [filteredCongressMembers, perPage])

  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value
    if (query === '') setFilteredCongressMembers(congressMembers)
    else {
      const results = search(query) as CongressDbRecord[]
      setFilteredCongressMembers(results)
    }
  }

  useEffect(() => {
    setPage(1)
    if (branch === 'All') {
      setFilteredCongressMembers(congressMembers)
    } else {
      const results = congressMembers.filter((official) => {
        return official.branch === branch
      })
      setFilteredCongressMembers(results)
    }
  }, [branch, congressMembers])

  const sortOptions = [
    { value: 'st', text: 'State' },
    { value: 'party', text: 'Party' },
    { value: 'reElection', text: 'Re-election' },
    { value: 'last', text: 'Name' },
  ]
  const branches = ['All', 'Senate', 'House']

  const findNextElection = (congressPerson: CongressDbRecord) => {
    const collection = congressPerson.branch === 'Senate' ? senate : house
    const proPublicaMember = collection.find((member) => {
      return member.state === congressPerson.abbrev_ref && (member.last_name === congressPerson.last || member.facebook_account?.toLocaleLowerCase() === congressPerson.facebookPage?.toLocaleLowerCase() || member.twitter_account?.toLocaleLowerCase() === congressPerson.twitterHandle?.toLocaleLowerCase())
    })
    return proPublicaMember ? proPublicaMember.next_election : ''
  }

  return (
    <>
      <div className="flex justify-between items-end mt-8 mb-6">
        <div className="flex justify-center">
          <label>
            <span className="text-white mr-2">Sort:</span>
            <select className="text-gray-900 p-1 rounded-md shadow" onChange={onOrderChange}>
              {sortOptions.map((sortOption, i) => {
                return <option key={i} value={sortOption.value}>{sortOption.text}</option>
              })}
            </select>
          </label>
          <label className="ml-2">
            <span className="text-white mr-2">Branch:</span>
            <select className="text-gray-900 p-1 rounded-md shadow" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setBranch(event.target.value)}>
              {branches.map((branch) => {
                return <option key={branch} value={branch}>{branch}</option>
              })}
            </select>
          </label>
        </div>

        <div className="flex md:max-w-1/2 ml-2">
          <input className="text-gray-900 rounded-md w-full p-1 shadow" type="search" placeholder="Search..." onInput={onSearch}></input>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly mb-20">
        {filteredCongressMembers.slice((page - 1) * perPage, page * perPage).map((congressPerson, i) => {
          return (
            <div className="inline-flex w-full lg:w-1/2 px-1" key={i}>
              <CongressPersonCard congressPerson={congressPerson} nextElection={findNextElection(congressPerson)} />
            </div>
          )
        })}

        <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
      </div>
    </>
  )
}

export default CongressSocialHandles
