import * as JsSearch from 'js-search'
import { useState } from 'react'
import { AWRAState } from 'types/AWRAState'
import { CongressDbRecord } from 'types/CongressDatabaseResponse'

export const useSearch = () => {
  const [searchIndex,] = useState(new JsSearch.Search('_id'))

  const addIndex = (field: string) => {
    searchIndex.addIndex(field)
  }

  const addDocuments = (documents: CongressDbRecord[] | AWRAState[]) => {
    searchIndex.addDocuments(documents)
  }

  const search = (query: string) => {
    return searchIndex.search(query)
  }

  return { addIndex, addDocuments, search }
}
