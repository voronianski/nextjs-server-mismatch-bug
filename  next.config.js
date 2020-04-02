const webpack = require('webpack');
const withTM = require('next-transpile-modules');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withSourceMaps = require('@zeit/next-source-maps');

const nextConfiguration = {
  webpack: (config, { dev, defaultLoaders, isServer }) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      '@sumup/circuit-ui': require.resolve('@sumup/circuit-ui/lib/es')
    };

    return config;
  }
};

const plugins = [
  [withTM, { transpileModules: ['@sumup/circuit-ui'] }],
  [withSourceMaps(), { devtool: 'source-map' }]
];

if (process.env.ANALYZE) {
  plugins.push([withBundleAnalyzer(), {}]);
}

module.exports = withPlugins(plugins, nextConfiguration);
