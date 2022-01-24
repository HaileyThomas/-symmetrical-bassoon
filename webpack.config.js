const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: './public/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  plugins: [
    new WebpackPwaManifest({
      name: 'Symmetrical Bassoon',
      short_name: 'Budget',
      description: 'A budgeting app to track transactions.',
      start_url: '../index.html',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      fingerprints: false,
      inject: false,
      icons: [
        {
          src: path.resolve('public/icons/icon-512x512.png'),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512],
          destination: path.join('assets', 'icons'),
        },
      ],
    }),
  ],
  mode: 'development',
};
