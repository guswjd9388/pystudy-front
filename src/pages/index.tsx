import _Home from '@/comp/page/home'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
      <Helmet>
        <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"></script>
      </Helmet>
      <_Home></_Home>
    </>

  )
}
