// importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

// workbox.precaching.precacheAndRoute([]);

import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)
