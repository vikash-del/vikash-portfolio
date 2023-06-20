import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Epilogue&display=swap' rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <body>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-PF9FGD4`}
          height="0"
          width="0"
          title="googleTagManagerNoScript"
          style={{
            display: 'none',
            visibility: 'hidden',
          }}
        />
      </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
