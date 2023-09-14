import { PageTitle } from '../PageTitle'
import { SavedArticleList } from '../SavedArticlesList'
import { useArticleStore } from '../../feature/article/articleStore'
import { useEffect } from 'react'

// SavedArticlesPage is the page that displays all the saved articles
export function SavedArticlesPage(): JSX.Element {
  const { articles, getAll } = useArticleStore()

  useEffect(() => {
    getAll()
  }, [getAll])

  return (
    <>
      <PageTitle title="Saved Articles" />
      {articles.length > 0 ? (
        <SavedArticleList articles={articles} />
      ) : (
        <h1 className="text-2xl text-center mt-5">No saved articles</h1>
      )}
    </>
  )
}
