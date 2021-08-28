/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  index_page: {
    $url: (url?: { hash?: string }) => ({ pathname: '/index.page' as const, hash: url?.hash })
  },
  post: {
    [id]_page: {
      $url: (url?: { hash?: string }) => ({ pathname: '/post/[id].page' as const, hash: url?.hash })
    }
  },
  test: {
    $url: (url?: { hash?: string }) => ({ pathname: '/test' as const, hash: url?.hash })
  }
}

// prettier-ignore
export type PagesPath = typeof pagesPath
