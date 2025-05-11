/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    eslint: {
        ignoreDuringBuilds: true,
    },
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