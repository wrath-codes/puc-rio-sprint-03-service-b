import { ArticleSaved } from '../feature/article/articleService'
import { EditNickNameModal } from './ChangeNickNameModal'
import { TrashIcon } from '@heroicons/react/24/solid'
import dayjs from 'dayjs'
import { useArticleStore } from '../feature/article/articleStore'

// Component that displays a saved article
export function SavedArticle({ article }: { article: ArticleSaved }) {
  const { delete: deleteArticle } = useArticleStore()
  const day = dayjs(article.publishedAt).format('DD/MM/YYYY')
  const hour = dayjs(article.publishedAt).format('HH:mm')

  return (
    <div className="items-center ml-5 my-1 p-2 rounded-md hover:bg-violet-500/20">
      <div className="flex flex-row">
        <div className="">
          <div className="">
            <button
              className="text-zinc-50 bg-violet-500 hover:bg-violet-700 items-center rounded-md p-2 mr-5 mb-2 "
              onClick={() => {
                deleteArticle(article.id)
              }}
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
          <EditNickNameModal id={article.id} />
        </div>
        <div className="flex flex-col w-full">
          {article.nickname === article.title ? (
            <a
              className="text-violet-500 font-bold text-xl"
              href={article.url}
              target="_blank"
              rel="noreferrer"
            >
              {article.title}
            </a>
          ) : (
            <a
              className="text-violet-500 font-bold text-xl"
              href={article.url}
              target="_blank"
              rel="noreferrer"
            >
              ({article.nickname})
            </a>
          )}

          <div className="flex flex-row justify-between pl-5 text-lg">
            <h6 className="font-semibold text-violet-300">{day}</h6>
            <h6 className="font-semibold text-violet-300">{hour}</h6>
          </div>
          <div className="flex flex-row justify-between pl-5">
            <div className="flex flex-row gap-2">
              <h6 className="text-lg font-semibold text-violet-800 rounded border-solid border border-violet-700 p-1">
                {article.source}
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
