import { ArticleList } from '../ArticleList'
import { PageTitle } from '../PageTitle'
import { Pagination } from '../Pagination'
import { useNewsData } from '../../utils/hooks/use-news-data'

export interface INews {
  givenUrl: string
  title: string
}

export function NewsPage({ givenUrl, title }: INews): JSX.Element {
  const newsData = useNewsData(givenUrl)

  return (
    <>
      <PageTitle title={title} />
      <ArticleList articles={newsData.news} />
      <Pagination
        page={newsData.getCurrentPageNumber}
        nextPage={newsData.getNextPage}
        previousPage={newsData.getPrevPage}
        totalPages={newsData.getTotalPages}
        results={newsData.getTotalResults}
      />
    </>
  )
}
