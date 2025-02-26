import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Primary SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Maximize your crypto rewards with SolRewards (SOLR) — the ultimate staking, passive income, and trading platform built on Solana. Secure, decentralized, and rewarding."
        />
        <meta
          name="keywords"
          content="SolRewards, SOLR, Solana, Crypto, Staking, Passive Income, NFT, Blockchain, Yield Farming, DeFi"
        />
        <meta name="author" content="SolRewards Team" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* ✅ Canonical URL to prevent duplicate content issues */}
        <link rel="canonical" href="https://solreward.com/" />

        {/* ✅ Open Graph Meta Tags (Facebook, Discord, LinkedIn) */}
        <meta property="og:title" content="SolRewards - Earn Passive SOL Rewards on Solana" />
        <meta
          property="og:description"
          content="Stake, trade, and earn passive SOL rewards with SolRewards (SOLR). Built on Solana for secure, high-yield staking and DeFi growth."
        />
        <meta property="og:image" content="https://solreward.com/meta-banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://solreward.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SolRewards" />

        {/* ✅ Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SolRewards - Earn Passive SOL Rewards on Solana" />
        <meta
          name="twitter:description"
          content="Trade and stake SolRewards (SOLR) to earn passive SOL income on Solana."
        />
        <meta name="twitter:image" content="https://solreward.com/meta-banner.png" />
        <meta name="twitter:site" content="@solreward" />

        {/* ✅ JSON-LD Structured Data (Boosts SEO with Rich Snippets) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SolRewards",
              url: "https://solreward.com/",
              description:
                "Maximize your crypto rewards with SolRewards (SOLR) — the ultimate staking, passive income, and trading platform built on Solana.",
              image: "https://solreward.com/meta-banner.png",
              publisher: {
                "@type": "Organization",
                name: "SolRewards",
                logo: {
                  "@type": "ImageObject",
                  url: "https://solreward.com/logo.png",
                  width: 200,
                  height: 200,
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://solreward.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

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
