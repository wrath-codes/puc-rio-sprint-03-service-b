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

export function useNewsData(givenUrl: string) {
  const [news, setNews] = useState<IArticle[]>([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)

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

    console.log(response)
    setNews(response!.articles)
  }

  useEffect(() => {
    fetchNews(page, pageSize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getNextPage = () => {
    fetchNews(page, pageSize)
    setPage(page + 1)
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

  return {
    news,
    getCurrentPageNumber,
    getNextPage,
    getPrevPage,
    getFirstPage,
    getLastPage,
    getLastPageNumber,
    setPageSize,
  }
}
