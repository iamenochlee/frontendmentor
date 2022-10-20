import Layout from "../components/Layout";
import "../styles/globals.css";

import Head from "next/head";
import { MotionConfig } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <MotionConfig reducedMotion="user">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MotionConfig>
    </>
  );
}

export default MyApp;
