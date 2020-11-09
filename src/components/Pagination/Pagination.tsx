import React from 'react'
import Button from 'components/Button/Button'
import { ReactComponent as ChevronLeft } from 'assets/icons/bx-chevron-left-circle.svg'
import { ReactComponent as ChevronRight } from 'assets/icons/bx-chevron-right-circle.svg'
import classNames from 'classnames'

interface PaginationProps {
  totalPages: number
  currentPage: number
  setPage: (page: number) => void
}

const Pagination = (props: PaginationProps) => {
  const { totalPages, currentPage, setPage } = props

  return (
    <div className="flex w-full align-center justify-center">
      <Button
        className={classNames('px-4 py-2 mx-4 rounded-full text-black', { 'invisible': currentPage === 1 })}
        onClick={() => setPage(currentPage - 1)}
      >
        <ChevronLeft />
      </Button>

      <Button
        className="px-4 py-2 mx-4 rounded-full bg-brand-blue text-white"
        disabled
      >
        {currentPage}
      </Button>

      <Button
        className={classNames('px-4 py-2 mx-4 rounded-full text-black', { 'invisible': currentPage === totalPages })}
        onClick={() => setPage(currentPage + 1)}
      >
        <ChevronRight />
      </Button>
    </div>
  )
}

export default Pagination
