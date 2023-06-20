import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <script
          type="text/javascript"
          async
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    const f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=GTM-PF9FGD4" + i + dl
                    f.parentNode.insertBefore(j, f)
                  })(window,document,'script','dataLayer',"GTM-PF9FGD4")`,
          }}
        />
      </Head>
      <body>
      <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-PF9FGD4`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
