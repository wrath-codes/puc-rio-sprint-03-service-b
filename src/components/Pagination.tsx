interface IPagination {
  page: () => number
  nextPage: () => void
  previousPage: () => void
  lastPage: () => number
}

export function Pagination({
  page,
  nextPage,
  previousPage,
  lastPage,
}: IPagination): JSX.Element {
  return (
    <div className="flex justify-between items-center mt-2 sticky bottom-0 bg-zinc-900">
      {page() > 1 ? (
        <button
          className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded"
          onClick={previousPage}
        >
          Previous
        </button>
      ) : (
        <div></div>
      )}

      <div className="text-white font-bold py-2 px-4 rounded">{page()}</div>

      {page() < lastPage() ? (
        <button
          className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded"
          onClick={nextPage}
        >
          Next
        </button>
      ) : (
        <div></div>
      )}
    </div>
  )
}
