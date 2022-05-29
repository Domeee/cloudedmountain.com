import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="de">
      <Head>
        <link
          rel="preload"
          href="/fonts/grinched.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/grinched.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter-v7-latin-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter-v7-latin-600.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <meta
          name="description"
          content="Clouded Mountain is a game studio based in Worb, Switzerland"
        />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://cloudedmountain.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Clouded Mountain Games" />
        <meta
          property="og:description"
          content="Clouded Mountain is a game studio based in Worb, Switzerland"
        />
        {/* <meta */}
        {/*   property="og:image" */}
        {/*   content="https://namtab.ch/images/namtab.png" */}
        {/* /> */}
        <meta property="og:url" content="https://cloudedmountain.com" />
        <meta property="og:site_name" content="Clouded Mountain" />
        <meta name="twitter:title" content="Clouded Mountain Games" />
        <meta
          name="twitter:description"
          content="Clouded Mountain is a game studio based in Worb, Switzerland"
        />
        {/* <meta */}
        {/*   name="twitter:image" */}
        {/*   content="https://namtab.ch/images/namtab.png" */}
        {/* /> */}
        <meta name="twitter:site" content="@CloudedMountain" />
        <meta name="twitter:creator" content="@CloudedMountain" />
      </Head>
      <body className="bg-eigengrau">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
