import React, { useState, useEffect } from 'react'
import Button from 'components/Button/Button'
import classNames from 'classnames'

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
            className={classNames("px-4 py-2 mx-4 rounded-full", {
              'bg-white text-black': cursor + 1 !== currentPage,
              'bg-brand-blue text-white': cursor + 1 === currentPage
            })}
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
