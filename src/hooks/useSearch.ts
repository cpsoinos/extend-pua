import * as JsSearch from 'js-search'
import { useState } from 'react'
import { SenatorSocialHandleRecord } from 'types/SenatorSocialHandleResponse'

export const useSearch = () => {
  const [searchIndex,] = useState(new JsSearch.Search('_id'))

  searchIndex.addIndex('st')
  searchIndex.addIndex('first')
  searchIndex.addIndex('last')
  searchIndex.addIndex('party')
  searchIndex.addIndex('reElection')

  const addDocuments = (documents: SenatorSocialHandleRecord[]) => {
    searchIndex.addDocuments(documents)
  }

  const search = (query: string) => {
    return searchIndex.search(query)
  }

  return { addDocuments, search }
}
