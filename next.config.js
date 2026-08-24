const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: () => [
    {
      source: "/decathlon-hr",
      destination: "https://kesfet.decathlon.com.tr/",
      permanent: false,
    },
    {
      source: "/evrad",
      destination: "/projects/evrad",
      permanent: false,
    },
    {
      source: "/evrad/privacy.html",
      destination: "/projects/evrad/privacy",
      permanent: true,
    },
  ],
};

module.exports = withContentlayer(nextConfig);
