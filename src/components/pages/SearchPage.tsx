import { ArticleList } from '../ArticleList'
import { PageTitle } from '../PageTitle'
import { Pagination } from '../Pagination'
import { useNewsData } from '../../utils/hooks/use-news-data'
import { useState } from 'react'

export function SearchPage(): JSX.Element {
  const newsData = useNewsData('/top-headlines?country=us')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    newsData.fetchNews(1, searchTerm)
  }

  return (
    <>
      <PageTitle title="Search" />
      <form className="flex flex-col flex-1">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') newsData.fetchNews(1, searchTerm)
          }}
          className="w-full p-2 rounded-md border-2 bg-zinc-800 border-violet-400 focus:outline-none focus:bg-zinc-700 focus:ring-2 focus:ring-violet-400 focus:border-transparent"
        />
        <div className="justify-between flex">
          <div></div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-1/4 p-2 mt-2 rounded-md border-2 bg-zinc-800 border-violet-400 focus:outline-none focus:bg-zinc-700 focus:ring-2 focus:ring-violet-400 focus:border-transparent"
            hidden
          >
            Search
          </button>
          <div></div>
        </div>
      </form>

      {newsData.news.articles.length > 0 ? (
        <>
          <ArticleList articles={newsData.news.articles} />
        </>
      ) : (
        <div className="flex flex-col flex-1">
          <h1 className="text-3xl font-semibold text-zinc-100 text-center mt-16">
            No results found
          </h1>
        </div>
      )}
      {newsData.news.articles.length > 0 && (
        <Pagination
          page={newsData.news.page!}
          nextPage={newsData.getNextPage}
          previousPage={newsData.getPrevPage}
          totalPages={newsData.news.totalPages!}
        />
      )}
    </>
  )
}
