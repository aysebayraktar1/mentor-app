/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
}

module.exports = nextConfig
