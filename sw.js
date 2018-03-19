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
    "revision": "e462b3cdee5ee333794c13f53fb20dac"
  },
  {
    "url": "css/style.css",
    "revision": "9b3d02ad45d3d7b875396be54e0c900c"
  },
  {
    "url": "css/variables.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "gulpfile.js",
    "revision": "55d0f86f383993e0ed6e98c44fe95d1f"
  },
  {
    "url": "index.html",
    "revision": "da48e4db16124c0a6d32773c4f3f1203"
  },
  {
    "url": "media/me.jpeg",
    "revision": "e8f0575d1083d39985cc52f6808186d0"
  },
  {
    "url": "package-lock.json",
    "revision": "e136ba4842ad3e1cac8d3a6897960ae4"
  },
  {
    "url": "package.json",
    "revision": "51f3fdbf5e73d53d93d82847d6c9bf3b"
  },
  {
    "url": "rjp/index.html",
    "revision": "989a264911b66f00806bd2ffea1d49d8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
