import { IArticle } from '../../components/Article'
import { composeUrl } from '../compose_url'
import { useState } from 'react'

export interface INewsData {
  totalResults: number
  page?: number
  totalPages?: number
  articles: IArticle[]
  query?: string
}

// Hook for fetching news data
export function useNewsData(givenUrl: string) {
  const [news, setNews] = useState<INewsData>({
    totalResults: 0,
    totalPages: 0,
    articles: [],
    page: 0,
    query: '',
  })

  async function fetchNews(page: number, query?: string) {
    if (query) {
      const url = composeUrl(`/everything?q=${query}&language=en`, page, query)
      const response = await fetch(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      })
        .then((res) => res.json() as Promise<INewsData>)
        .catch((err) => console.error(err))

      setNews({
        totalResults: response!.totalResults,
        totalPages: Math.ceil(response!.totalResults / 20),
        page,
        articles: response!.articles,
        query,
      })
    } else {
      const url = composeUrl(givenUrl, page)
      const response = await fetch(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      })
        .then((res) => res.json() as Promise<INewsData>)
        .catch((err) => console.error(err))

      setNews({
        totalResults: response!.totalResults,
        totalPages: Math.ceil(response!.totalResults / 20),
        page,
        articles: response!.articles,
      })
      console.log(news)
    }
  }

  const getNextPage = () => {
    if (news.query) {
      fetchNews(news.page! + 1, news.query)
    } else {
      fetchNews(news.page! + 1)
    }
  }

  const getPrevPage = () => {
    if (news.query) {
      fetchNews(news.page! - 1, news.query)
    } else {
      fetchNews(news.page! - 1)
    }
  }

  return {
    news,
    getNextPage,
    getPrevPage,
    fetchNews,
  }
}
