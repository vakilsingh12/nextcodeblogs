/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["img.freepik.com"],
  },
  trailingSlash:true
}
module.exports = nextConfig
