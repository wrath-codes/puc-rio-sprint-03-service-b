import { ArticleList } from '../ArticleList'
import { PageTitle } from '../PageTitle'
import { Pagination } from '../Pagination'
import { useNewsData } from '../../utils/hooks/use-news-data'
import { useState } from 'react'

export function SearchPage(): JSX.Element {
  const newsData = useNewsData('/everything?q=bitcoin')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <PageTitle title="Search" />
      <form className="flex flex-col flex-1">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="w-full p-2 rounded-md border-2 bg-zinc-800 border-violet-400 focus:outline-none focus:bg-zinc-700 focus:ring-2 focus:ring-violet-400 focus:border-transparent"
        />
      </form>

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-1/4 p-2 rounded-md border-2 bg-zinc-800 border-violet-400 focus:outline-none focus:bg-zinc-700 focus:ring-2 focus:ring-violet-400 focus:border-transparent"
      >
        Search
      </button>

      {newsData.news.length > 0 ? (
        <>
          <ArticleList articles={newsData.news} />
          <Pagination
            page={newsData.getCurrentPageNumber}
            nextPage={newsData.getNextPage}
            previousPage={newsData.getPrevPage}
            totalPages={newsData.getTotalPages}
            results={newsData.getTotalResults}
          />
        </>
      ) : (
        <div className="flex flex-col flex-1">
          <h1 className="text-3xl font-semibold text-zinc-100 text-center">
            No results found
          </h1>
        </div>
      )}
    </>
  )
}
