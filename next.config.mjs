/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'es'],
        defaultLocale: 'en-US',
    },
    images: {
        domains: [
            'nextjs.org',
            'paypal.com',
            'placehold.co',
        ],
        dangerouslyAllowSVG: true
    }
};

export default nextConfig;
