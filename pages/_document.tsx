import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Kryshe is the Solo Project of musician Christian Grothe. With the use of DIY instruments such as synthesizers and sampler instruments he creates sonic landscapes. Sometimes soft and mellow. Sometimes harsh and distorted. Always creating a space for exploration."
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          property="og:title"
          content="Kryshe || Ambient || DIY Instruments"
        />
        <meta
          property="og:description"
          content="Kryshe is the Solo Project of musician Christian Grothe. With the use of DIY instruments such as synthesizers and sampler instruments he creates sonic landscapes. Sometimes soft and mellow. Sometimes harsh and distorted. Always creating a space for exploration."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.christian-grothe.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Christian Grothe" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
