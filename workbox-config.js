module.exports = {
  globDirectory: './',
  globPatterns: ['**/*.{css,eot,svg,ttf,woff,js,jpg,png,html,json}'],
  globIgnores: [
    'gulpfile.js',
    'images/screenshot.png',
    'package.json',
    'workbox-config.js',
    'src/js/index.js',
    'src-sw.js',
    'graphic-resources/logo.svg',
    'node_modules/**/*',
  ],
  swDest: './sw.js',
  swSrc: './src-sw.js',
}
