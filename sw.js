importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js',
)

workbox.precaching.precacheAndRoute([
  { revision: '4b058dfe6c664578b069f2d2b0094e77', url: 'css/style.css' },
  { revision: 'd855d1947cb4c76abe91aee5407e3593', url: 'fonts/icomoon.eot' },
  { revision: '83e6dc6cf3ff029f0ae54193356a67f3', url: 'fonts/icomoon.svg' },
  { revision: '0fb7dc6b60fa9acbe6dd16f99c3adbd1', url: 'fonts/icomoon.ttf' },
  { revision: '57329be1ab871d6e94d41cb9ff74050a', url: 'fonts/icomoon.woff' },
  {
    revision: '79754934891c17dd798ca5e7eb5fa9a9',
    url: 'fonts/RobotoSlab-Light.ttf',
  },
  {
    revision: '1cbf290f274d230a3b576723a314c7e8',
    url: 'images/background.jpg',
  },
  {
    revision: '75dee0cf80e886dfdcab59a27bbc1cd6',
    url: 'images/touch/swg-144.png',
  },
  {
    revision: '509d72795875be1c2eb93b3959e30377',
    url: 'images/touch/swg-192.png',
  },
  {
    revision: '2e8ec3b07830c949dd6b561f8ace6c46',
    url: 'images/touch/swg-48.png',
  },
  {
    revision: 'e2f31d0ca44fadd29019e8ead0a8c9e2',
    url: 'images/touch/swg-512.png',
  },
  {
    revision: 'c93279abd9376729920754c8552c49b1',
    url: 'images/touch/swg-72.png',
  },
  {
    revision: '218e1c65c6183f64687fd601f49d2cf4',
    url: 'images/touch/swg-96.png',
  },
  { revision: 'f55172abe6da29df7689ef42d1fbbdb8', url: 'index.html' },
  { revision: '7b49cf1c6cd53943306a89e9637769d6', url: 'js/index.js' },
  { revision: 'f4c781e88a530e0d053078aa63106fbb', url: 'js/sw.js' },
  { revision: 'ba3fafca28b7e3c59989f6dc1f4b4348', url: 'js/words.json' },
  { revision: '26fad5d1bb58812772384420deae4dc4', url: 'manifest.json' },
])
