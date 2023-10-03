import _Home from '@/comp/page/home'
import Script from 'next/script'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
      <Helmet>
        <Script src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js" />
      </Helmet>
      <_Home />
    </>

  )
}
