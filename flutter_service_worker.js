'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c6746379d67a88aa9eafb82e3e5063c5",
".git/config": "df38c8f1f7c6bc646577bff08dcf66e9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a80b3425f9bf97aab559f6d1db443a69",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "03ac201a62c7bee0fcf047e4e7f119fe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "da9078ee95788b21c557c55cfaff5bb5",
".git/logs/refs/heads/master": "dcfc1b04f68beba93abaa5af9f1ccbc5",
".git/logs/refs/remotes/origin/HEAD": "68fdf641252176d7111d5ca87dcbbdf0",
".git/logs/refs/remotes/origin/master": "2070e781d3b68f3099380335ed1a967e",
".git/objects/1d/dc4e258ae0aae2133881e8058c3a3a1fd95586": "91e25547149fd60f218866f78feb7acd",
".git/objects/21/bbacd578c54620971be29346b21a9168217035": "f025f85e3a216eb22e0eb5b29704b487",
".git/objects/30/44d145d6f0a0095a208c45b5e72918b9c468fd": "a0f839ffa74dc292a404a392af04081c",
".git/objects/4e/4096a4b624ce2a64784f563554dd11b1b98378": "a27576afc58b85b30da51928020aac7a",
".git/objects/57/9c3eb85c31768ffb7107db09107ed723e2ca18": "ff6eebae862f3e1f50ec6515f90c177b",
".git/objects/a2/015cda5a539a0bc97a74e352867d0bf5ea37d9": "fdf06c95126a6e08c00d378a9b6831e7",
".git/objects/ee/2dbcc427582aa2138aa2af78780276daa645f9": "062e478bda4749e5b82c5b108621a3ff",
".git/objects/f1/325622e1ab176bfee225bc524eda5f691d1c8b": "4e3dc169fff3f88e5773112fb4f5e89d",
".git/objects/pack/pack-34e8ac3c9cbf0d60494a62f07828597ad6f38638.idx": "6b47ba88aed1818a0816dd00378d0042",
".git/objects/pack/pack-34e8ac3c9cbf0d60494a62f07828597ad6f38638.pack": "7ce841d6184d02491fd5c817df9891fb",
".git/ORIG_HEAD": "50166a63617c0bf98fda275f4fb7b5f6",
".git/packed-refs": "4baa1cd32ec0cf7a6859aaa1bd6b5ca3",
".git/refs/heads/master": "50166a63617c0bf98fda275f4fb7b5f6",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "50166a63617c0bf98fda275f4fb7b5f6",
"assets/AssetManifest.json": "8bffe8f2ae73b8499a50201149e62cf4",
"assets/assets/logo.png": "c9ca5125256e38470b9305aa0e79fa7f",
"assets/FontManifest.json": "c9202d9b0434d285107ca9a08b736d52",
"assets/fonts/Karla-Bold.ttf": "c07c916c55ef23e1f0a0dbcb10b9aaae",
"assets/fonts/Karla-Italic.ttf": "740dfd331d76c6cd37793423cb1e0cad",
"assets/fonts/Karla-Regular.ttf": "1b55fee684d61bfeaa762684931b1bc9",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/logo.png": "c9ca5125256e38470b9305aa0e79fa7f",
"assets/NOTICES": "a85640a524a844a2718ab4ffae1a9485",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"favicon.png": "88ba13c2f9f6c29c6153130b0591722a",
"icons/Icon-192.png": "9f50c94107ece48879374680a876b801",
"icons/Icon-512.png": "edd95b677ed50c9f4402b77836330198",
"index.html": "1b9836485ee5fd577d9c65d6d9b78a1b",
"/": "1b9836485ee5fd577d9c65d6d9b78a1b",
"main.dart.js": "4c2d7689011156ddf43434526153f9c7",
"manifest.json": "7d528ec801c3437eea8406f876f4a38b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
