import type { AppProps } from 'next/app'
import Script from 'next/script'

import Layout from '../components/Layout/layout'

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Script
    id="googleTagManager"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var
      f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js
      id=GTM-PF9FGD4'+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer', 'GTM-PF9FGD4');
      `,
    }}
  />
    <Component {...pageProps} />
  </Layout>
}