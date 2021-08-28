/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  post: {
    [id]_page: {
      $url: (url?: { hash?: string }) => ({ pathname: '/post/[id].page' as const, hash: url?.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
