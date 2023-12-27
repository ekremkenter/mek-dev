import Script from "next/script";

export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-H8KDRR9FVD"
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-H8KDRR9FVD');
  `,
        }}
      />
    </>
  );
}
