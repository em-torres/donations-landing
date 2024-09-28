/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'es'],
        defaultLocale: 'en-US',
    },
    images: {
        domains: [
            'placehold.co',
            'nextjs.org'
        ],
        dangerouslyAllowSVG: true
    }
};

export default nextConfig;
