interface IPagination {
  page: number
  nextPage: () => void
  previousPage: () => void
  totalPages: number
}

export function Pagination({
  page,
  nextPage,
  previousPage,
  totalPages,
}: IPagination): JSX.Element {
  if (page === 1 && totalPages === 1) {
    return (
      <div className="flex w-full justify-between bg-zinc-900">
        <div></div>
        <span className="text-gray-500">1 of 1</span>
        <div></div>
      </div>
    )
  } else if (page === 1) {
    return (
      <div className="flex justify-between sticky bottom-0 bg-zinc-900">
        <div></div>
        <span className="text-gray-500">
          {page} of {totalPages}
        </span>
        <button
          className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    )
  } else if (page === totalPages) {
    return (
      <div className="flex justify-between sticky bottom-0 bg-zinc-900">
        <button
          className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded"
          onClick={previousPage}
        >
          Previous
        </button>
        <span className="text-gray-500">
          {page} of {totalPages}
        </span>
        <div></div>
      </div>
    )
  } else {
    return (
      <div className="flex justify-between sticky bottom-0 bg-zinc-900">
        <button
          className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded"
          onClick={previousPage}
        >
          Previous
        </button>
        <span className="text-gray-500">
          {page} of {totalPages}
        </span>
        <button
          className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    )
  }
}
