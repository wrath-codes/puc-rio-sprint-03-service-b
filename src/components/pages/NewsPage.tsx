import { ArticleList } from '../ArticleList'
import { PageTitle } from '../PageTitle'
import { Pagination } from '../Pagination'
import { useEffect } from 'react'
import { useNewsData } from '../../utils/hooks/use-news-data'

export interface INews {
  givenUrl: string
  title: string
}

export function NewsPage({ givenUrl, title }: INews): JSX.Element {
  const newsData = useNewsData(givenUrl)

  useEffect(() => {
    newsData.fetchNews(1)
  }, [])

  return (
    <>
      <PageTitle title={title} />
      <ArticleList articles={newsData.news.articles} />
      <Pagination
        page={newsData.news.page!}
        nextPage={newsData.getNextPage}
        previousPage={newsData.getPrevPage}
        totalPages={newsData.news.totalPages!}
      />
    </>
  )
}
