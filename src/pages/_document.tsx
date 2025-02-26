import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Standard SEO Meta */}
        <meta name="description" content="SolRewards (SOLR) offers staking, passive income, and trading on Solana's blockchain." />
        <meta name="keywords" content="SolRewards, Solana, Crypto, Staking, Passive Income, NFT, Blockchain" />
        <meta name="author" content="SolRewards Team" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph Meta (Social Sharing) */}
        <meta property="og:title" content="SolRewards - Earn & Stake on Solana" />
        <meta property="og:description" content="Join SolRewards and earn rewards by staking and trading SOLR on Solana." />
        <meta property="og:image" content="https://solreward.com/meta-banner.png" />
        <meta property="og:url" content="https://solreward.com/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card Meta (Social Preview) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SolRewards - Earn & Stake on Solana" />
        <meta name="twitter:description" content="Trade and stake SolRewards (SOLR) for passive income." />
        <meta name="twitter:image" content="https://solreward.com/meta-banner.png" />
        <meta name="twitter:site" content="@solreward" />

        {/* ✅ Favicons & App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#090909" />

        {/* ✅ Preload Fonts for Performance */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
