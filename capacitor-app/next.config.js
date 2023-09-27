const withTM = require('next-transpile-modules')([
    '@ionic/react',
    '@ionic/core',
    '@stencil/core',
    'ionicons',
])

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
}

module.exports = nextConfig
