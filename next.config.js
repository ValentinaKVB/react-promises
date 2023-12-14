/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {

    return [
      {
        source: "/:path*",
        destination: "http://здесьживутдраконы.рф:8080/:path*"
      }
    ]
  }
}

module.exports = nextConfig