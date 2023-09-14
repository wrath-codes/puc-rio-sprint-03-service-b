import { ArticleSaved, CreateArticle, articleService } from './articleService'

import { create } from 'zustand'

// The ArticleStore interface defines the shape of the store.
type ArticleStore = {
  articles: ArticleSaved[]
  article: ArticleSaved | null

  add: (article: CreateArticle) => void
  get: (id: number) => void
  getAll: () => void
  updateNickname: (id: number, nickname: string) => void
  delete: (id: number) => void
  reset: () => void
  resetAll: () => void
  checkIfArticleExists: (url: string) => Promise<boolean>
}

// The useArticleStore hook creates a store that contains the articles state and the functions that are used to update the state.
export const useArticleStore = create<ArticleStore>((set): ArticleStore => {
  return {
    // The initial state of the store is an empty array.
    articles: [],

    // The initial state of the store is null.
    article: {
      id: 0,
      title: '',
      author: '',
      source: '',
      nickname: '',
      publishedAt: '',
      url: '',
      urlToImage: '',
    },

    // The reset function sets the articles state to an empty array.
    resetAll: () => set({ articles: [] }),

    // The reset function sets the article state to null.
    reset: () => set({ article: null }),

    // The get function updates the articles state with the article that matches the id.
    get: async (id: number) => {
      const article = await articleService.getArticle(id)
      set({ article })
    },

    // The add function adds an article to the articles state.
    getAll: async () => {
      const articles = await articleService.getArticles()
      set({ articles })
    },

    // The add function adds an article to the articles state.
    add: async (article: CreateArticle) => {
      const newArticle = await articleService.createArticle(article)
      const articleWithNickname = {
        ...newArticle,
        nickname: article.title,
      }
      set((state) => ({
        articles: [...state.articles, articleWithNickname],
      }))
    },

    // The updateNickname function updates the nickname of an article in the articles state.
    updateNickname: async (id: number, nickname: string) => {
      const updatedArticle = await articleService.updateArticleNickname(
        id,
        nickname,
      )

      set((state) => ({
        articles: state.articles.map((article) => {
          if (article.id === id) {
            return updatedArticle!
          }
          return article
        }),
      }))
    },

    // The delete function removes an article from the articles state.
    delete: async (id: number) => {
      await articleService.deleteArticle(id)
      set((state) => ({
        articles: state.articles.filter((article) => article.id !== id),
      }))
    },

    // The checkIfArticleExists function checks if an article exists in the articles state.
    checkIfArticleExists: async (url: string) => {
      useArticleStore.setState({
        article: null,
      })

      set((state) => ({
        article: state.articles.find((article) => article.url === url),
      }))

      const article = useArticleStore.getState().article

      console.log(article)

      if (article) {
        return true
      }
      return false
    },
  }
})
