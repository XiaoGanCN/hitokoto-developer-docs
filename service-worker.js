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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3fdd08bebcf7196357196bad338d174c"
  },
  {
    "url": "assets/css/0.styles.150bb255.css",
    "revision": "92908b6bc44dc1e21b1e5ef678a2186a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4319214a.js",
    "revision": "08b36a290b765d1d25a9f9f3b9e49f62"
  },
  {
    "url": "assets/js/11.328ff7d1.js",
    "revision": "b9a41e06cf4245c6ce8987c067ea9209"
  },
  {
    "url": "assets/js/12.3e002a75.js",
    "revision": "8412309e594000927c1f954a61829064"
  },
  {
    "url": "assets/js/13.36a8230f.js",
    "revision": "8e0b1dc1b5fe750bca206fdf1acbd205"
  },
  {
    "url": "assets/js/2.186d4a35.js",
    "revision": "2a1ada5756e981c5a88969b7e2b3c9b5"
  },
  {
    "url": "assets/js/3.ca35ab04.js",
    "revision": "b7f99b3efd646ba8757f93713a8236c2"
  },
  {
    "url": "assets/js/4.56e1d7f5.js",
    "revision": "f49a2fa24f13d5a6f912b911efe2775e"
  },
  {
    "url": "assets/js/5.b3158ce6.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/6.74312070.js",
    "revision": "690076d7f009d8b8fae3ac60c692a8a4"
  },
  {
    "url": "assets/js/7.22334601.js",
    "revision": "2b178a592208ecd94ae2f373fd30326d"
  },
  {
    "url": "assets/js/8.cbee096a.js",
    "revision": "5fd24362ddfaa0f23cd51abbda1e64c7"
  },
  {
    "url": "assets/js/9.0b8d7897.js",
    "revision": "c097d44765377eeb1d978f17ec83256e"
  },
  {
    "url": "assets/js/app.c8d8c5e0.js",
    "revision": "a0d0dfcb64f00b07c0553a7c69e1af73"
  },
  {
    "url": "core/index.html",
    "revision": "03f0b63b81fb7c1addd2afbb669cc4da"
  },
  {
    "url": "core/interface/index.html",
    "revision": "c6a339b2c2ecbc253bce288d0ecf0211"
  },
  {
    "url": "icons/logo.png",
    "revision": "c198aae62300654f689b599e1d6651e4"
  },
  {
    "url": "icons/logo.svg",
    "revision": "767db161f958114ba4ff8d1081a65df7"
  },
  {
    "url": "index.html",
    "revision": "14b52838d21e1e0eb185e821d44fbd10"
  },
  {
    "url": "introduce/index.html",
    "revision": "b7e51f6e71380eaeaf2363250be1e49c"
  },
  {
    "url": "logo.png",
    "revision": "04589b56f180537dbebd0a64afc57470"
  },
  {
    "url": "sentence/demo/index.html",
    "revision": "f25de53a26412a6ad80cadead236c1cd"
  },
  {
    "url": "sentence/deploy/index.html",
    "revision": "61abffa1da9a15b4c0356e1d91a2511f"
  },
  {
    "url": "sentence/index.html",
    "revision": "75d6b7fbf200877d7954a8788b7ae9b4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
