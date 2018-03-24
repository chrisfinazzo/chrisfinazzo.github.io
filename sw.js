/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/fonts.css",
    "revision": "45a3ae00fde7854fc815c9d5afd848fc"
  },
  {
    "url": "css/queries.css",
    "revision": "40978b5f16120449296a671d982e9ced"
  },
  {
    "url": "css/style.css",
    "revision": "af731bd5bd71f6e54ac9666e2052acf4"
  },
  {
    "url": "css/variables.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "gulpfile.js",
    "revision": "bc2afbe18d123398d20814d2182e48f9"
  },
  {
    "url": "index.html",
    "revision": "1bac5c2f64d15dedac26b869eb8d10c1"
  },
  {
    "url": "manifest.json",
    "revision": "c90f5d618e24ae10be3560f0902a65f8"
  },
  {
    "url": "media/me.jpeg",
    "revision": "e8f0575d1083d39985cc52f6808186d0"
  },
  {
    "url": "package-lock.json",
    "revision": "20e64aa0ddfa5dcb054a3f8e6d1c6b05"
  },
  {
    "url": "package.json",
    "revision": "1a6b702271072cab1b45c8bd08eeb8c0"
  },
  {
    "url": "rjp/index.html",
    "revision": "dae87912e1ff1ec2a7d90ce730e7d81a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
