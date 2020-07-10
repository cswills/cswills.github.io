'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "49915d73652760b7c2165bfaf035ceec",
".git/config": "df38c8f1f7c6bc646577bff08dcf66e9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d9160345615b5ad12cda2224f1514377",
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
".git/index": "96fefa3bf01caef892b9996f6276fff7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "643f8a55a90daf145eaeb92e203c5482",
".git/logs/refs/heads/master": "160ccefd8e8e127de7fcd5b94dc01792",
".git/logs/refs/remotes/origin/master": "316506a14ca9e18ed12a4f1c798fa46d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/9e0c9f721ed3fa27f648138979e03ebc31cd2a": "408dc51e734db3ca2bafdbde756ff4a6",
".git/objects/09/ba2130ba44cfc45b9154fd9b7a50cff87b7008": "d8d3714f489bb93c243fd0e97f0fedcf",
".git/objects/0d/8e964dbebb22097c81c56dda82bf26239b7942": "754f5021716a37c6fcb302b4fd9dd6f4",
".git/objects/0f/58bf9ca12519c90356fff37b3bd4a171bcdeb7": "f95eb72843505bd6fcda877d1b7030dc",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/c45785c0fd09526dff2e9751e6cebb53d91c6c": "f170873324f4209882f0d685db59416a",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1f/509637dd0e52f21188acceaa91297c7ac451bc": "17449147199b40db17785b561d9139ac",
".git/objects/20/23c7c08ab25aa0cfea5ea64f9d16994d621e17": "ec4c7366459390c2c47425ef5786dddf",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/942c549f80cf06d6b4a6fb0786f8c8a2ea9931": "45b48380c5f0692d8197252229b06b04",
".git/objects/2f/8a2314d5a19b1603081aa8aac7547e264fa47e": "9b3bcd8c5c6da56f2c7d32d035264b9b",
".git/objects/30/36706b3ece667503fa0c7128b12d96849ddb22": "afe3c0cb854598aced7cd206c3246bdb",
".git/objects/30/736c9ffb9255793cefcfe95c62b0fe3cbd7e34": "2caafb59ee616b9df3414e871d4d6843",
".git/objects/38/4ac37ce53a20f5454da3c303ab531cc696c80b": "fde4c1abf4150c1a02304f43fce371e0",
".git/objects/4c/decdcfada27789432e54e199c9ca92ec6b6946": "149c5ec4a78e6f0e66ece4348c4625c5",
".git/objects/4e/2929c05db0ff63dbfa0bbde780acf14e04b760": "7a7d36ba84a0588928b2cea0bc6374ea",
".git/objects/51/41e4249d38cb79c21fcd37c1d73f1180076a7b": "9aa905022c495eda9be0275c8be98240",
".git/objects/53/80eac8dc76069179709c5f27bf4317d7bd4b67": "64917d0d1f601e29cd3f37302f8ce38b",
".git/objects/58/72f836921297465a3458b9905cee72ab369970": "53f3aa83d9fe591ca6e45cdff01ccd92",
".git/objects/59/4d8b1c74a66a629a54830235fc63f62b47dfe9": "d56c1dee3ad84938f431cfb4db805246",
".git/objects/59/fb813f85cab69f7e2b7d2f76814892bbed839a": "74b51ace4b91a731a036434297c1583b",
".git/objects/64/beee68677c24d6220e52c4b30cd80bed857dcb": "374342086da997456fa3b70fe7fbd921",
".git/objects/65/1bd2950ee5a2bff6a91ef851e1c088a65ddcf3": "e25a1b5263df148b3d2962447d7cd55a",
".git/objects/67/559673e4fca51ccfd9422d29256ca311a3ca1d": "3b219f026ff6eafc775c84ed6940b6f0",
".git/objects/67/a879f0a233a447524b0a3d4d91beec3c4c3cc9": "a3b24d41896e3fe56c201f258dcf54c6",
".git/objects/7c/0e5d0807b403f4faeadd08774fd4fbcbb7e4d9": "8d130c0c30eab78e3f406a7d25413bfd",
".git/objects/7d/7044d78332612f366d6bb13e55a6fab3e909d5": "cd2e805479e25d5ded82db27e3749251",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/85/9d472f9c14e36270385ab3955e6fbef9cb2fff": "222fff1f7e0f3126c95f97cd25214520",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/38920362cf565a927135e45c34e2b9c7e523bc": "559146130b2ebbe62efce8d6305a3a86",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/01da339a2c1ffce3684ebbecc00c35bff3631e": "2d0772d7b146a14456dd7e346cab2865",
".git/objects/91/fe9fad32a4e02cf5c07902858234c97d4a999f": "9a4184828ff48678114bc0997120258d",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a4/af486a4e0e0b0145d3664e8290d4e8ece7ae0d": "881226469dd700be67e9ce041a3c3581",
".git/objects/ac/dfc70033e079960d17ec746705d2f4f948822d": "fb3162b6e000ed88034b26d79e765366",
".git/objects/ad/f01d112182f568c0847ccba03e71603d962adf": "439ae60b0afcb6760fbfdd9cfd34b6b7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c2/577a575b1d54670fc4325ba84b4782bc2290ce": "aaa3edb16fe8776d38f4449e47d4d809",
".git/objects/c6/9c88f84b836ca5a67634d63b85e9312e0435f1": "d08f02aea5a446220d5d480d45fcc44c",
".git/objects/c9/28c8db3b9c591de6bb32c155eb68ada478a6fa": "ff95e4439ff5124aeed808260c02f001",
".git/objects/d2/65824d69a8d7722457b12e561ce1b44036e2e8": "183247c65e77c0f9aff30af4413fd16f",
".git/objects/d3/c6abe5428a3e1eca3c0f2201a1ec3534a96e1e": "0ec83fcef8912dac3ce4c74646e74a12",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e5/4080cb5735ff20d5bba3717dec807d437c3e77": "69801f552ea7815bfd567620a8e01097",
".git/objects/e9/f0b5ead4ff3632e284380b057d068907d83416": "75227673abf641c4aa4bc12d6a40f97b",
".git/objects/ef/34cdb2385a717568819bf9030ee0b642fa84c6": "4a9038135d6db66494b9f6030dabb08c",
".git/objects/f8/ba6cb56819c0a2cba1232f58dac7b36942c533": "d3b772ba0eb13681801253264f0c6318",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fd/b620811c4769a512d097cfb54926ca6e6680ea": "fa885ecc023d92bdbf8eee886f863303",
".git/objects/fd/e1d5af1bccc86375fc8edfe103c96ce784cd6f": "55881ab311017d230420bc5140ef8010",
".git/ORIG_HEAD": "742dd73f7a135b7f72c8270df04a00c8",
".git/refs/heads/master": "c459b2e1af781a0ae183b2e321e70ecd",
".git/refs/remotes/origin/master": "742dd73f7a135b7f72c8270df04a00c8",
"assets/AssetManifest.json": "f12b7b120706d078c3618239cfcabd76",
"assets/assets/logo.png": "c9ca5125256e38470b9305aa0e79fa7f",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "28eb89b9741326b1de0cb7eee5a5558d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "88ba13c2f9f6c29c6153130b0591722a",
"icons/Icon-192.png": "9f50c94107ece48879374680a876b801",
"icons/Icon-512.png": "edd95b677ed50c9f4402b77836330198",
"index.html": "916f45bc510596702dfba591c2c4477a",
"/": "916f45bc510596702dfba591c2c4477a",
"main.dart.js": "749d04919b227e8ecc9dbee185f571c7",
"manifest.json": "7d528ec801c3437eea8406f876f4a38b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
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
  // If the URL is not the the RESOURCE list, skip the cache.
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
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
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
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
