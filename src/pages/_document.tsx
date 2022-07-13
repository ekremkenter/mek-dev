import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const trackingID = 'UA-37973458-7';

function Document() {
  const title = 'Mustafa Ekrem KENTER';
  const description =
    "Software Craftsman - Mustafa Ekrem KENTER's personal web site";

  return (
    <Html>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:type" content="website" />
        <meta name="author" content="@ekremkenter" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@ekremkenter" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', '${trackingID}', 'auto');
          ga('send', 'pageview');
        `}
        </Script>
        <script
          src="https://cdn.popupsmart.xyz/bundle.js"
          data-id="360589"
          async
          defer
        ></script>
      </body>
    </Html>
  );
}

export default Document;
