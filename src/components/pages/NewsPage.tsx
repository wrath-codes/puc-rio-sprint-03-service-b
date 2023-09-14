import { ArticleList } from '../ArticleList'
import { PageTitle } from '../PageTitle'
import { Pagination } from '../Pagination'
import { useArticleStore } from '../../feature/article/articleStore'
import { useEffect } from 'react'
import { useNewsData } from '../../utils/hooks/use-news-data'

export interface INews {
  givenUrl: string
  title: string
}

// NewsPage is the page that displays all the news
export function NewsPage({ givenUrl, title }: INews): JSX.Element {
  const newsData = useNewsData(givenUrl)
  const { resetAll } = useArticleStore()

  useEffect(() => {
    resetAll()
    newsData.fetchNews(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
