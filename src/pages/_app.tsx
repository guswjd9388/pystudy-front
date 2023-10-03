import axios from 'axios'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr/_internal'

const fetcher = async (resource: any) => {
  const res = await axios.get(resource)
  return res.data
}

export default function App({ Component, pageProps }: AppProps) {
  return <SWRConfig value={{ fetcher }}>
    <Component {...pageProps} />
  </SWRConfig>
}
