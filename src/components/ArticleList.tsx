import { Article, IArticle } from './Article'

export interface IArticleList {
  articles: IArticle[]
}
// Component that displays a list of articles
export function ArticleList({ articles }: IArticleList): JSX.Element {
  return (
    <>
      {articles.map((article) => (
        <div key={article.title}>
          <div className="flex flex-col flex-1">
            <h1 className="text-3xl font-semibold text-zinc-100">
              <Article article={article} />
            </h1>
          </div>
        </div>
      ))}
    </>
  )
}
