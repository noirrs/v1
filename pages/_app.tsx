import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Component {...pageProps} />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11.5.1/styles/atom-one-dark.css"></link>
  </>

  )
}


export default MyApp
