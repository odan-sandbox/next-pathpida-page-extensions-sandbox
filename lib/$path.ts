/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  hello_page: {
    $url: (url?: { hash?: string }) => ({ pathname: '/hello.page' as const, hash: url?.hash })
  },
  post: {
    [id]_page: {
      $url: (url?: { hash?: string }) => ({ pathname: '/post/[id].page' as const, hash: url?.hash })
    }
  },
  test: {
    $url: (url?: { hash?: string }) => ({ pathname: '/test' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
