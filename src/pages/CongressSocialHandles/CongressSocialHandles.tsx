import React, { useState, useEffect } from 'react'
import CongressPersonCard from 'components/CongressPersonCard/CongressPersonCard'
import Pagination from 'components/Pagination/Pagination'
import { useCongressDatabase } from 'hooks/useCongressDatabase'
import { useSearch } from 'hooks/useSearch'
import sortBy from 'lodash/sortBy'
import Button from 'components/Button/Button'
import { CongressDbRecord } from 'types/CongressDbRecord'
import classNames from 'classnames'

const CongressSocialHandles = () => {
  const [congressMembers, setCongressMembers] = useState<CongressDbRecord[]>([])
  const [filteredCongressMembers, setFilteredCongressMembers] = useState<CongressDbRecord[]>([])
  const { getCongressMembers } = useCongressDatabase()
  const [orderBy, setOrderBy] = useState('st')
  const [branch, setBranch] = useState('Senate')
  const { addIndex, addDocuments, search } = useSearch()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const perPage = 50

  useEffect(() => {
    ['branch', 'st', 'first', 'last', 'party', 'reElection'].map(addIndex)
    getCongressMembers().then((data) => {
      const sorted = sortBy(data, orderBy)
      setCongressMembers(sorted)
      setFilteredCongressMembers(sorted.filter((official) => {
        return official.branch === branch
      }))
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
    const results = congressMembers.filter((official) => {
      return official.branch === branch
    })
    setFilteredCongressMembers(results)
  }, [branch, congressMembers])

  const sortOptions = [
    { value: 'st', text: 'State' },
    { value: 'party', text: 'Party' },
    { value: 'reElection', text: 'Re-election' },
    { value: 'last', text: 'Name' },
  ]

  return (
    <>
      <div className="flex flex-wrap justify-between items-center mt-4 mb-6">
        <div className="flex justify-center">
          <label className="text-right mb-4 md:mb-0">
            <span className="text-white mr-2">Sort:</span>
            <select className="text-gray-900 p-1 rounded-md" onChange={onOrderChange}>
              {sortOptions.map((sortOption, i) => {
                return <option key={i} value={sortOption.value}>{sortOption.text}</option>
              })}
            </select>
          </label>
        </div>

        <div className="flex w-full md:max-w-1/2">
          <input className="text-gray-900 rounded-md w-full p-1" type="search" placeholder="Search..." onInput={onSearch}></input>
        </div>

        <div className="flex w-full justify-center items-center mt-6 space-x-4">
          <Button
            className={classNames('p-4', 'rounded', {
              'bg-blue-deep-sky text-white': branch === 'Senate',
              'bg-white text-black': branch === 'House'
            })}
            onClick={() => setBranch('Senate')}
          >
            Senate
          </Button>

          <Button
            className={classNames('p-4', 'rounded', {
              'bg-white text-black': branch === 'Senate',
              'bg-blue-deep-sky text-white': branch === 'House',
            })}
            onClick={() => setBranch('House')}
          >
            House
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly mb-20">
        {filteredCongressMembers.slice((page - 1) * perPage, page * perPage).map((congressPerson, i) => {
          return (
            <div className="inline-flex w-full md:w-1/2 px-1" key={i}>
              <CongressPersonCard congressPerson={congressPerson} />
            </div>
          )
        })}

        <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
      </div>
    </>
  )
}

export default CongressSocialHandles
