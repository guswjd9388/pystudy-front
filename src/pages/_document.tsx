import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
      <script defer src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"></script>
      </Head>
      <body style={{ backgroundColor: 'rgb(243, 246, 249)' }}>
        <Main />
        <NextScript /> 
      </body>
    </Html>
  )
}
