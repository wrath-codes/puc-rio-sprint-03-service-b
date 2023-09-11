// Compose url for news api
export function composeUrl(path: string, page?: number, pageSize?: number) {
  const url =
    '/news-api' +
    path +
    `${page ? '&page=' + page : ''}` +
    `${pageSize ? '&pageSize=' + pageSize : ''}` +
    '?apiKey=' +
    import.meta.env.VITE_API_KEY
  console.log(url)
  return url
}
