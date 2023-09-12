import dayjs from 'dayjs'

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

export function Article({ article }: { article: IArticle }) {
  const day = dayjs(article.publishedAt).format('DD/MM/YYYY')
  const hour = dayjs(article.publishedAt).format('HH:mm')

  return (
    <div className="text-start ml-5 my-1 p-2 rounded-md hover:bg-violet-500/20 ">
      <div className="">
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
              {article.source.name}
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
  )
}
