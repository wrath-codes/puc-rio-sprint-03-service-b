import { INews } from './NewsPage'
import { PageTitle } from '../PageTitle'
import { SourceList } from '../SourceList'
import { useSourcesData } from '../../utils/hooks/use-sources-data'

// SourcesPage is the page that displays all the sources
export function SourcesPage({ givenUrl, title }: INews): JSX.Element {
  const sources = useSourcesData(givenUrl)

  return (
    <>
      <PageTitle title={title} />
      <SourceList sources={sources} />
    </>
  )
}
