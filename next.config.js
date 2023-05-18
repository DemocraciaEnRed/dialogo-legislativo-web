require('dotenv').config()

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  style-src 'self';
  font-src 'self';
`;

module.exports = {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    NODE_ENV: process.env.NODE_ENV,
    REALM: process.env.REALM,
    AUTH_SERVER_URL: process.env.AUTH_SERVER_URL,
    SSL_REQUIRED: process.env.SSL_REQUIRED,
    RESOURCE: process.env.RESOURCE,
    PUBLIC_CLIENT: process.env.PUBLIC_CLIENT,
    CONFIDENTIAL_PORT: process.env.CONFIDENTIAL_PORT,
    API_KEY: process.env.API_KEY
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }          
        ],
      },
    ];
  },    
}