// export function SourcesPage({ givenUrl, title }: INews): JSX.Element {
//   const [sources, setSources] = useState<ISource[]>([])

import { useEffect, useState } from 'react'

import { ISource } from '../../components/Source'
import { composeUrl } from '../compose_url'

// Hook for fetching news sources
export function useSourcesData(givenUrl: string) {
  const [sources, setSources] = useState<ISource[]>([])

  async function fetchSources() {
    const url = composeUrl(givenUrl)
    const response = await fetch(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    })
    const data = await response.json()
    setSources(data.sources)
  }

  useEffect(() => {
    fetchSources()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return sources
}
