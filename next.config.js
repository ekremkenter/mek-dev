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
    {
      source: "/meet/15-min",
      destination: "https://outlook.office.com/bookwithme/user/27bbecc1b1e54d73929980a98ec53080@thynet.thy.com/meetingtype/HspFe4mCk0WagO_vRW1mSA2?anonymous&ep=mlink",
      permanent: false,
    }
  ],
};

module.exports = withContentlayer(nextConfig);
