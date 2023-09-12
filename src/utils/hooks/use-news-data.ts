import { useEffect, useState } from 'react'

import { IArticle } from '../../components/Article'
import { composeUrl } from '../compose_url'

interface INewsData {
  status: string
  totalResults: number
  page?: number
  pageSize?: number
  articles: IArticle[]
}

// Hook for fetching news data
export function useNewsData(givenUrl: string) {
  const [news, setNews] = useState<IArticle[]>([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  const [results, setResults] = useState(0)
  const [query, setQuery] = useState('')

  async function fetchNews(page: number, pageSize: number) {
    const url = composeUrl(givenUrl, page, pageSize)
    const response = await fetch(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    })
      .then((res) => res.json() as Promise<INewsData>)
      .catch((err) => console.error(err))

    setNews(response!.articles)
    setResults(response!.totalResults)
  }

  async function fetchNewsByQuery(query: string) {
    const url = composeUrl(givenUrl, page, pageSize, query)
    const response = await fetch(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        'X-Api-Key': `${import.meta.env.VITE_API_KEY}`,
      },
    })
      .then((res) => res.json() as Promise<INewsData>)
      .catch((err) => console.error(err))

    setNews(response!.articles)
    setResults(response!.totalResults)
  }

  useEffect(() => {
    fetchNews(page, pageSize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getNewsByQuery = (newQuery: string) => {
    setQuery(newQuery)
    fetchNewsByQuery(query)
  }

  const getNextPage = () => {
    setPage(page + 1)
    fetchNews(page, pageSize)
  }

  const getPrevPage = () => {
    if (page > 1) {
      setPage(page - 1)
      fetchNews(page, pageSize)
    } else {
      fetchNews(page, pageSize)
    }
  }

  const getFirstPage = () => {
    fetchNews(1, pageSize)
  }

  const getLastPage = () => {
    fetchNews(Math.ceil(news.length / pageSize), pageSize)
  }

  const getCurrentPageNumber = () => {
    return page
  }

  const getLastPageNumber = () => {
    return Math.ceil(news.length / pageSize)
  }

  const getTotalPages = () => {
    return Math.ceil(results / pageSize)
  }

  const getTotalResults = () => {
    return results
  }

  return {
    news,
    results,
    getCurrentPageNumber,
    getNextPage,
    getPrevPage,
    getFirstPage,
    getLastPage,
    getLastPageNumber,
    getTotalPages,
    getTotalResults,
    getNewsByQuery,
    setPageSize,
  }
}
