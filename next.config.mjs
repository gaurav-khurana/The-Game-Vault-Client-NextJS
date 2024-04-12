/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/static-files/images/**",
      },
    ],
  },
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/games/*",
  //         destination: "http://localhost:8080/games/*",
  //       },
  //     ];
  //   },
};

export default nextConfig;

// module.exports = {

// };
