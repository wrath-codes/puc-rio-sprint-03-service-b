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

  // Fetch news data from the API
  async function fetchNews(page: number, query?: string) {
    // If there is a query, use the query url
    if (query) {
      const url = composeUrl(`/everything?q=${query}&language=en`, page, query)
      console.log(url)
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
      // If there is no query, use the given url
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

  // Get the next page of news
  const getNextPage = () => {
    if (news.query) {
      fetchNews(news.page! + 1, news.query)
    } else {
      fetchNews(news.page! + 1)
    }
  }

  // Get the previous page of news
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
