import { ArticleBase, CreateArticle } from '../feature/article/articleService'

import { PlusIcon } from '@heroicons/react/20/solid'
import dayjs from 'dayjs'
import { useArticleStore } from '../feature/article/articleStore'

export interface IArticle {
  title: string
  author: string
  url: string
  urlToImage: string
  publishedAt: string
  source: {
    name: string
  }
}

// Component that displays an article
export function Article({ article }: { article: ArticleBase }) {
  const day = dayjs(article.publishedAt).format('DD/MM/YYYY')
  const hour = dayjs(article.publishedAt).format('HH:mm')
  const { add } = useArticleStore()

  return (
    <div className="text-start ml-5 my-1 p-2 rounded-md hover:bg-violet-500/20 ">
      <div className="flex flex-row gap-2">
        <div>
          <button
            className="text-zinc-50 bg-violet-500 hover:bg-violet-700 items-center rounded-md p-2 mr-5 my-10"
            onClick={() => {
              const articleWithoutId = {
                title: article.title,
                author: article.author,
                url: article.url,
                urlToImage: article.urlToImage,
                publishedAt: article.publishedAt,
                source: article.source,
              } as CreateArticle

              add(articleWithoutId)
            }}
          >
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col w-full">
          <a
            className="text-violet-500 font-bold text-xl"
            href={article.url}
            target="_blank"
            rel="noreferrer"
          >
            {article.title}
          </a>

          <div className="flex flex-row justify-between pl-5 text-lg">
            <h6 className="font-semibold text-violet-300">{day}</h6>
            <h6 className="font-semibold text-violet-300">{hour}</h6>
          </div>
          <div className="flex flex-row justify-between pl-5">
            <div className="flex flex-row gap-2">
              <h6 className="text-lg font-semibold text-violet-800 rounded border-solid border border-violet-700 p-1">
                {article.source!.name}
              </h6>
              {article.author && (
                <h6 className="text-lg font-semibold text-violet-800 rounded border-solid border border-violet-700 p-1">
                  {article.author}
                </h6>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
