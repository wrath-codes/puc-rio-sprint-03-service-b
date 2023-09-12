import { useEffect, useState } from 'react'

import { INews } from './NewsPage'
import { PageTitle } from '../PageTitle'
import { composeUrl } from '../../utils/compose_url'

export interface ISource {
  id: string
  name: string
}
export interface ISources {
  sources: ISource[]
}

export function Source({ id, name }: ISource): JSX.Element {
  return (
    <div className="text-start ml-5 my-1 p-2 rounded-md hover:bg-violet-500/20 ">
      <div className="">
        <a
          className="text-violet-500 font-bold text-xl"
          href={`/sources/${id}/${name}`}
          rel="noreferrer"
        >
          {name}
        </a>
      </div>
    </div>
  )
}

export function SourceList({ sources }: ISources): JSX.Element {
  return (
    <div className="flex flex-col">
      {sources.map((source) => (
        <Source key={source.id} id={source.id} name={source.name} />
      ))}
    </div>
  )
}

export function SourcesPage({ givenUrl, title }: INews): JSX.Element {
  const [sources, setSources] = useState<ISource[]>([])

  const url = composeUrl(givenUrl)

  useEffect(() => {
    const fetchSources = async () => {
      const response = await fetch(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      })
      const data = await response.json()
      setSources(data.sources)
    }
    fetchSources()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return (
    <>
      <PageTitle title={title} />
      <SourceList sources={sources} />
    </>
  )
}
