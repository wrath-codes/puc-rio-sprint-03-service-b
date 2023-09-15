export interface ArticleBase {
  id: number
  title: string
  author: string
  nickname: string
  url: string
  urlToImage: string
  publishedAt: string
  source?: {
    name: string
  }
}

export interface ArticleSaved {
  id: number
  title: string
  author: string
  nickname: string
  url: string
  urlToImage: string
  publishedAt: string
  source: string
}

export interface CreateArticle {
  title: string
  author: string
  url: string
  urlToImage: string
  publishedAt: string
  nickname?: string
  source: {
    name: string
  }
}

// The getArticles function is a selector that returns the articles from the server.
const getArticles = async (): Promise<ArticleSaved[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_ARTICLE_API_URL}/articles`,
  )
  const articles = await response.json()
  console.log(articles)
  return articles.articles
}

// The getArticle function is a selector that returns the article from the server that matches the id.
const getArticle = async (id: number): Promise<ArticleSaved> => {
  const response = await fetch(
    `${import.meta.env.VITE_ARTICLE_API_URL}/articles&id=${id}`,
  )
  const article = await response.json()
  return article
}

// The createArticle function is a mutation that creates a new article on the server.
const createArticle = async (article: CreateArticle): Promise<ArticleSaved> => {
  const articleToCreate = {
    title: article.title,
    author: article.author,
    url: article.url,
    urlToImage: article.urlToImage,
    publishedAt: article.publishedAt,
    source: article.source.name,
    nickname: article.title,
  }

  const response = await fetch(
    `${import.meta.env.VITE_ARTICLE_API_URL}/articles`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(articleToCreate),
    },
  )
  const createdArticle = await response.json()
  return createdArticle
}

// The deleteArticle function is a mutation that deletes an article on the server.
const deleteArticle = async (id: number): Promise<void> => {
  await fetch(`${import.meta.env.VITE_ARTICLE_API_URL}/articles`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
}

// The updateArticle function is a mutation that updates an article on the server.
const updateArticleNickname = async (
  id: number,
  nickname: string,
): Promise<void> => {
  const article = await fetch(
    `${import.meta.env.VITE_ARTICLE_API_URL}/articles/`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname, id }),
    },
  )
    .then((response) => response.json())
    .then((data) => data)

  return article
}

// The articleService object contains all the functions that are used to interact with the server.
export const articleService = {
  getArticle,
  getArticles,
  createArticle,
  deleteArticle,
  updateArticleNickname,
}
