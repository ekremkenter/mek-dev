const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: () => [
    {
      source: "/cv",
      destination: "/cv.pdf",
      permanent: false,
    },
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
    {
      source: "/meet-me",
      destination:
        "https://us02web.zoom.us/j/2811465792?pwd=QXVmUU85aWFBYm1FcGE5NTQvRTdVUT09",
      permanent: false,
    },
  ],
};

module.exports = withContentlayer(nextConfig);
