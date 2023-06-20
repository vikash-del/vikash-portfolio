import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Epilogue&display=swap' rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-PF9FGD4"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-PF9FGD4');
        `}
      </Script>
      </Head>
      <body>
        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
