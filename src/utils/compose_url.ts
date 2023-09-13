// Compose url for news api
export function composeUrl(path: string, page?: number, query?: string) {
  const url =
    '/news-api' +
    path +
    `${query ? '&q=' + query : ''}` +
    `${page ? '&page=' + page : ''}` +
    '&pageSize=20' +
    '&apiKey=' +
    import.meta.env.VITE_API_KEY
  return url
}
