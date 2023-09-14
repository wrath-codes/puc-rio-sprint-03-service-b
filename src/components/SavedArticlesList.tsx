import { ArticleSaved } from '../feature/article/articleService'
import { SavedArticle } from './SavedArticle'

export interface IArticleList {
  articles: ArticleSaved[]
}

// Component that displays a list of saved articles
export function SavedArticleList({ articles }: IArticleList): JSX.Element {
  return (
    <>
      {articles.map((article) => (
        <div key={article.id}>
          <div className="flex flex-col flex-1">
            <h1 className="text-3xl font-semibold text-zinc-100">
              <SavedArticle article={article} />
            </h1>
          </div>
        </div>
      ))}
    </>
  )
}
