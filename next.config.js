/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    devIndicators: false,
    experimental: {
        webpackBuildWorker: true,
        parallelServerBuildTraces: true,
        parallelServerCompiles: true,
    },
    turbopack: {},
}

const webpack = require('webpack');

module.exports = {
    basePath: '/The-Engineering-Compendium',
    assetPrefix: '/The-Engineering-Compendium/',
    trailingSlash: true,
    ...nextConfig,
    webpack: (config) => {
        config.experiments = { ...config.experiments, asyncWebAssembly: true };
        return config;
    },
};