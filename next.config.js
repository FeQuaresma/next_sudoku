/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require('next-transpile-modules')(['react-hook-mousetrap'])

module.exports = withTM({ nextConfig })
