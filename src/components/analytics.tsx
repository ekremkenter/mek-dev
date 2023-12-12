import Script from "next/script";

const trackingID = "UA-37973458-7";

export default function Analytics() {
  return (
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
  );
}
