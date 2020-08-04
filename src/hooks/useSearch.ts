import * as JsSearch from 'js-search'
import { useState } from 'react'
import { SenatorSocialHandleRecord } from "types/SenatorSocialHandleRecord"
import { AWRAState } from 'types/AWRAState'

export const useSearch = () => {
  const [searchIndex,] = useState(new JsSearch.Search('_id'))

  const addIndex = (field: string) => {
    searchIndex.addIndex(field)
  }

  const addDocuments = (documents: SenatorSocialHandleRecord[] | AWRAState[]) => {
    searchIndex.addDocuments(documents)
  }

  const search = (query: string) => {
    return searchIndex.search(query)
  }

  return { addIndex, addDocuments, search }
}
