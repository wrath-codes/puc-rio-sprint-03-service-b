// Compose url for news api
export function composeUrl(
  path: string,
  page?: number,
  pageSize?: number,
  query?: string,
) {
  const url =
    '/news-api' +
    path +
    `${query ? '&q=' + query : ''}` +
    `${page ? '&page=' + page : ''}` +
    `${pageSize ? '&pageSize=' + pageSize : ''}` +
    '&apiKey=' +
    import.meta.env.VITE_API_KEY
  return url
}
