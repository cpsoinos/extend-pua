import React, { useState, useEffect } from 'react'
import Button from 'components/Button/Button'

interface PaginationProps {
  totalPages: number
  currentPage: number
  setPage: (page: number) => void
}

const Pagination = (props: PaginationProps) => {
  const { totalPages, currentPage, setPage } = props
  const [pagesArray, setPagesArray] = useState<number[]>([])

  useEffect(() => {
    setPagesArray([...Array(Math.ceil(totalPages)).keys()])
  }, [totalPages])

  return (
    <div className="flex w-full align-center justify-center">
      {pagesArray.map((cursor) => {
        return (
          <Button
            key={cursor}
            className="px-4 py-2 mx-4 rounded-full bg-white text-black"
            disabled={cursor + 1 === currentPage}
            onClick={() => setPage(cursor + 1)}
          >
            {cursor + 1}
          </Button>
        )
      })}
    </div>
  )
}

export default Pagination
