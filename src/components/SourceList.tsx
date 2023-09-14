import { ISource, Source } from './Source'

export interface ISourceList {
  sources: ISource[]
}

// Component that displays a list of sources
export function SourceList({ sources }: ISourceList): JSX.Element {
  return (
    <div className="flex flex-col">
      {sources.map((source) => (
        <Source key={source.id} id={source.id} name={source.name} />
      ))}
    </div>
  )
}
