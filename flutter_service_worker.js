'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b1356cd8b13ca08ba483521d9bb1d193",
"assets/AssetManifest.bin.json": "ba762fa530a8fb84937ec37cdf14a5d5",
"assets/AssetManifest.json": "3b5b4e7f6ee75f871c5ffd1fbb015d43",
"assets/assets/fonts/BeVietnamPro-Light.ttf": "4880b6055406c3d07487cbcf665f4d39",
"assets/assets/fonts/BeVietnamPro-Medium.ttf": "1ac40fd79ee227d1457f552b22828aa3",
"assets/assets/fonts/BeVietnamPro-Regular.ttf": "ec23619ef59c67e6a69719e8f0780a7e",
"assets/assets/fonts/BeVietnamPro-SemiBold.ttf": "205935f41af371be49ba31b51187e36f",
"assets/assets/icons/about.png": "f7647a2cbc92b43df60d05edd776a743",
"assets/assets/icons/apps.png": "6a46f9599dee2cd60b1e187ca7673bdb",
"assets/assets/icons/download.png": "464a902a131425fd505e44ad3c695c62",
"assets/assets/icons/email.png": "cc264cb5f31c27bee26fbd2e0a540d8a",
"assets/assets/icons/email_circle.png": "255601eb572d25117417f2fc1bd22fe1",
"assets/assets/icons/github.png": "1ddf895700d6787e93bef46762b34c76",
"assets/assets/icons/google_play.png": "bfeb63977d799c9f8df60036d42284e8",
"assets/assets/icons/home.png": "b23bfb23fc23d430540029b1226e5596",
"assets/assets/icons/linkedin.png": "e454a582d763e43fc74791075fc20f57",
"assets/assets/icons/skill.png": "56a8ba4cc75f86eb047cf7ba1279320b",
"assets/assets/icons/work.png": "3b5f90c65fb86ba4a406c7f1544579d2",
"assets/assets/images/app_store.png": "0ae1f24e6dbc3b06ab7cf4dce1a8b47c",
"assets/assets/images/ben.png": "93f8e03a1be6283c39f68b7ab8d72e7a",
"assets/assets/images/bloc_logo.png": "e3e2fb2e4b79ee08170dd3e5d3ba5d0f",
"assets/assets/images/dart_logo.png": "08f213e621423170f9e01c199c5c8761",
"assets/assets/images/dotb.png": "5ebc35e391cc7435e6dd824fb03859af",
"assets/assets/images/dotbsea.png": "7d5d8b37934142ed1f1a86a019556bb2",
"assets/assets/images/figma_logo.png": "b330ccc20001d35df4eda82894181998",
"assets/assets/images/firebase_logo.png": "8b1399c2c131b9538cc053a67d17d23c",
"assets/assets/images/flutter_logo.png": "0b5a614260e5f60ab8a5846cbe5395e6",
"assets/assets/images/getx_logo.png": "a2a3d4935ca6e980257244a6a51a7cd0",
"assets/assets/images/get_on_github.png": "bee0e3464165556fa03e8f7407d4ce6c",
"assets/assets/images/get_on_gplay.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/images/git_logo.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/images/glitch_background.png": "a5f8d2f29692d6d298fe2cb0cda1347e",
"assets/assets/images/gmail_logo.png": "6ff4515508a24b8a0f26b877662d3847",
"assets/assets/images/google_play_store.png": "6204d2c104da457b4ddd6c18888f3bee",
"assets/assets/images/hizurk_logo.png": "73007aefd783005d3002e36f95b59132",
"assets/assets/images/hizurk_logo_trans.png": "80f04631d19537bf3aeae7552c1b6735",
"assets/assets/images/kotlin_logo.png": "649000656f444eee3b8eb12b1c9df26d",
"assets/assets/images/qr_telegram.jpg": "6f1a94194fed8759e4fdd79fb7a16339",
"assets/assets/images/riverpod_logo.png": "75641950dbed6abceae70c19a6e8857b",
"assets/assets/images/splitbill.png": "80e252b22975fd4edef894f63622d636",
"assets/assets/images/telechat.png": "d30b18651e5fe053854d9956368dae60",
"assets/assets/images/telegram_logo.png": "6d5c7778463f4305433dbe6439c102c3",
"assets/assets/images/themepack.png": "e18d8f8a679e9dae7a43a5520b24ca14",
"assets/assets/images/vocaday.png": "f95f0a01033dbd69b3267dcb3f0444d0",
"assets/FontManifest.json": "343deb06fea87e183d13e4d85f49a1e1",
"assets/fonts/MaterialIcons-Regular.otf": "16a7851dbdaead4a9747ea9be06ad194",
"assets/NOTICES": "2a0c7d430a111ed0213ab727cef2091e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "7573c8835fe447838b818c7210b8f4bb",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "2079a1396fcbb7a7995b0115d84bed71",
"icons/Icon-192.png": "1764cc1ad8a9f7fce2b54c00566e572a",
"icons/Icon-512.png": "144e2137ff1c14a2060964d921a7aadd",
"icons/Icon-maskable-192.png": "1764cc1ad8a9f7fce2b54c00566e572a",
"icons/Icon-maskable-512.png": "144e2137ff1c14a2060964d921a7aadd",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "dc9aa418ec64bca3ff839acac0127c19",
"manifest.json": "0727d323ec8c850de66b9cbf149f0bfb",
"version.json": "304c060da638f78d0869eebeb274b3ca"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
