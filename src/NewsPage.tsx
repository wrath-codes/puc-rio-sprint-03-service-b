import { ArticleList } from './components/ArticleList'
import { Pagination } from './components/Pagination'
import { useNewsData } from './utils/hooks/use-news-data'

interface INews {
  givenUrl: string
}

function PageTitle({ title }: { title: string }): JSX.Element {
  return (
    <h1 className="text-5xl font-semibold text-violet-500 mb-5 pb-5 border-b border-b-violet-500 sticky top-0 bg-zinc-900">
      {title}
    </h1>
  )
}

export function NewsPage({ givenUrl }: INews): JSX.Element {
  const newsData = useNewsData(givenUrl)

  return (
    <>
      <PageTitle title="Top Headlines" />
      <ArticleList articles={newsData.news} />
      <Pagination
        page={newsData.getCurrentPageNumber}
        nextPage={newsData.getNextPage}
        previousPage={newsData.getPrevPage}
        lastPage={newsData.getLastPageNumber}
      />
    </>
  )
}
