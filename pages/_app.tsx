import { useEffect } from "react";

import type { AppProps } from "next/app";

import TagManager, { TagManagerArgs } from "react-gtm-module";

import Layout from "../components/Layout/layout";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const gtmId = process.env.NEXTJS_GTM_ID || "GTM-TNKWVF8";
  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
