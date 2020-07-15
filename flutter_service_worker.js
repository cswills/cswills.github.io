'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "68d3b13b6c2057ddc489ab90b831db2f",
".git/config": "df38c8f1f7c6bc646577bff08dcf66e9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0efbaec8f268529c326494168fd012d8",
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
".git/index": "31e7800fb49401b3c3580cc91b7bd885",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "260cd4ec055735858be224320201f846",
".git/logs/refs/heads/master": "2806f93438fdf6411b005e1636505a82",
".git/logs/refs/remotes/origin/master": "1bc7f47b1c71b0cd6dbd9da8e491bdb9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/9320b762a2233d4f4b43ac24009baef41a0d4c": "4277e6a51140b3cf4df063f174aa4465",
".git/objects/05/2231c165340b7ddaa0fa9930ac555a1fc05f6c": "985aa714c9f9df85324a9d1dfde9869b",
".git/objects/06/1931bdd91c26a628d6943cce6895cd7f3fa1bd": "21f484cee461e60af6d875f35e16f4d2",
".git/objects/07/9e0c9f721ed3fa27f648138979e03ebc31cd2a": "408dc51e734db3ca2bafdbde756ff4a6",
".git/objects/09/9f516d326fa41a3b851821ba44a4f0309f1d92": "c84de66f653dece543391023f0d835e4",
".git/objects/09/ba2130ba44cfc45b9154fd9b7a50cff87b7008": "d8d3714f489bb93c243fd0e97f0fedcf",
".git/objects/0a/1f8770b9bb18f842b71939bb5c916a4780d932": "6d4a7ddf936982f34ebcf91d62e29a7d",
".git/objects/0a/b954f9ec552d823b8d7e01372eb4d2e939624f": "83c0dfdbacb0b843cd7cc7eb2b053fdc",
".git/objects/0d/5b96aa75838b2963eea0b55a04840f8cfd3521": "7920ac8291e88fc52195e17596f8bf76",
".git/objects/0d/8e964dbebb22097c81c56dda82bf26239b7942": "754f5021716a37c6fcb302b4fd9dd6f4",
".git/objects/0f/58bf9ca12519c90356fff37b3bd4a171bcdeb7": "f95eb72843505bd6fcda877d1b7030dc",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/c45785c0fd09526dff2e9751e6cebb53d91c6c": "f170873324f4209882f0d685db59416a",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1f/509637dd0e52f21188acceaa91297c7ac451bc": "17449147199b40db17785b561d9139ac",
".git/objects/20/23c7c08ab25aa0cfea5ea64f9d16994d621e17": "ec4c7366459390c2c47425ef5786dddf",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/646581781af2bdf9f6ff92ea6682a7b168d254": "dd1361798ba541d3806a67b3d2a1f23b",
".git/objects/26/942c549f80cf06d6b4a6fb0786f8c8a2ea9931": "45b48380c5f0692d8197252229b06b04",
".git/objects/2c/6ac1d2d239a6bb416a295186a473f8ef960ffd": "80fc7c53a67bc6d17bdeaf1ca219ef8c",
".git/objects/2d/12311e4cd5e088314ba263158a2ef124c0e6ef": "9ec2a0f4c4ffb63238eb2606b8b060b7",
".git/objects/2f/8a2314d5a19b1603081aa8aac7547e264fa47e": "9b3bcd8c5c6da56f2c7d32d035264b9b",
".git/objects/30/36706b3ece667503fa0c7128b12d96849ddb22": "afe3c0cb854598aced7cd206c3246bdb",
".git/objects/30/736c9ffb9255793cefcfe95c62b0fe3cbd7e34": "2caafb59ee616b9df3414e871d4d6843",
".git/objects/37/f3c377d3f679594c3c68c2381479824ab6bb4d": "d2cedd6de403da63110eb90e4b012945",
".git/objects/38/4ac37ce53a20f5454da3c303ab531cc696c80b": "fde4c1abf4150c1a02304f43fce371e0",
".git/objects/3b/32083e465a16890c42a5c8c8c22b17abee41a5": "68a0b3cd71a9fb544fd567eade2703fc",
".git/objects/42/69aa069eda9b522bb2e93aa0219788b8291ec6": "fe4d751db6f87429566e46e6a250d586",
".git/objects/44/bea53834b3f36ba7a5204fa55627a74f299968": "9bb2593449d266f07872de9bcec05cf9",
".git/objects/4c/decdcfada27789432e54e199c9ca92ec6b6946": "149c5ec4a78e6f0e66ece4348c4625c5",
".git/objects/4d/5deb23614a92db5103a4f3fb78439f9b328f4c": "985d279e3f3b181981a506e02178eded",
".git/objects/4e/2929c05db0ff63dbfa0bbde780acf14e04b760": "7a7d36ba84a0588928b2cea0bc6374ea",
".git/objects/51/41e4249d38cb79c21fcd37c1d73f1180076a7b": "9aa905022c495eda9be0275c8be98240",
".git/objects/53/80eac8dc76069179709c5f27bf4317d7bd4b67": "64917d0d1f601e29cd3f37302f8ce38b",
".git/objects/58/72f836921297465a3458b9905cee72ab369970": "53f3aa83d9fe591ca6e45cdff01ccd92",
".git/objects/59/4d8b1c74a66a629a54830235fc63f62b47dfe9": "d56c1dee3ad84938f431cfb4db805246",
".git/objects/59/fb813f85cab69f7e2b7d2f76814892bbed839a": "74b51ace4b91a731a036434297c1583b",
".git/objects/5a/413fd648fa1ab45f2624e744268b31db552eab": "a77818544b10602fdb066ce4ecf447d9",
".git/objects/5d/fa2827fbd484a72c01e8546c727b420fc0e5f1": "e69804d3761af92719e0337d4cf84618",
".git/objects/5e/abfbde1eae8295d9d238cd42a82fcb9b9240a1": "5d1f59c1776ec7ebb4dd096f0fa97d0d",
".git/objects/64/666c447b4846ce83c01ef28ff1b9275405525f": "21bfa784317dfce2151c921ee38c6206",
".git/objects/64/beee68677c24d6220e52c4b30cd80bed857dcb": "374342086da997456fa3b70fe7fbd921",
".git/objects/65/1bd2950ee5a2bff6a91ef851e1c088a65ddcf3": "e25a1b5263df148b3d2962447d7cd55a",
".git/objects/67/559673e4fca51ccfd9422d29256ca311a3ca1d": "3b219f026ff6eafc775c84ed6940b6f0",
".git/objects/67/a879f0a233a447524b0a3d4d91beec3c4c3cc9": "a3b24d41896e3fe56c201f258dcf54c6",
".git/objects/6e/3ee965ed0860e6e6c874bda77f3c881f314de7": "cd4b2739b7a056fa9cb173926e0b92b4",
".git/objects/70/19e459bf8debbe8df421291b9818021f329bbb": "dba1ea3e1aeee54233c4672513747f7a",
".git/objects/71/b7db4670c235c5f41d293933e95745785f34ae": "82dbcb70dbf59a8d5878135ee551f044",
".git/objects/74/53ad8f7fe988d3cf6bf7518aa67f1cf95bbf21": "e57edd075672002f29579b2ba751f761",
".git/objects/76/1978acc0cf7ab176b742833b7cdbfa9550fee0": "dde8003bb71360f4c7c10fff82c4991f",
".git/objects/7c/0e5d0807b403f4faeadd08774fd4fbcbb7e4d9": "8d130c0c30eab78e3f406a7d25413bfd",
".git/objects/7d/7044d78332612f366d6bb13e55a6fab3e909d5": "cd2e805479e25d5ded82db27e3749251",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/743e178159f33820aadf852b011453ba99911d": "b9d767b9704c8fa15fc71e5c43e8328f",
".git/objects/85/9d472f9c14e36270385ab3955e6fbef9cb2fff": "222fff1f7e0f3126c95f97cd25214520",
".git/objects/86/69754a1563e4cbff6d13b44c2e03480f2fe49f": "4512cc2576941b2ee32206b8f60ea476",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/38920362cf565a927135e45c34e2b9c7e523bc": "559146130b2ebbe62efce8d6305a3a86",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/01da339a2c1ffce3684ebbecc00c35bff3631e": "2d0772d7b146a14456dd7e346cab2865",
".git/objects/91/fe9fad32a4e02cf5c07902858234c97d4a999f": "9a4184828ff48678114bc0997120258d",
".git/objects/93/ba841aee23fa3fdfcb8eed12e63b18e9f0a92b": "ffe28c2fad0d4a85bee167b8fa5f4843",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9a/f187cfaafdb5319a542d7145a7a1f1559f3b02": "20d8d1161f74a9da21c44a7d054c79fb",
".git/objects/9e/6fcaf36d55ecc3371afe0290edd653ca31c170": "bd38bfa6c256b072121bb0ff31584edb",
".git/objects/a4/af486a4e0e0b0145d3664e8290d4e8ece7ae0d": "881226469dd700be67e9ce041a3c3581",
".git/objects/ac/16f399a6d75b4406275ad3ce57fc8cae1e284a": "6836a6dac3776f8dcbeab6ff507c903e",
".git/objects/ac/dfc70033e079960d17ec746705d2f4f948822d": "fb3162b6e000ed88034b26d79e765366",
".git/objects/ad/f01d112182f568c0847ccba03e71603d962adf": "439ae60b0afcb6760fbfdd9cfd34b6b7",
".git/objects/b2/f1227d3f6bcea3ecbd1c19f7eb489608068602": "9a680328daae157ab118c4104ac7e9a5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/70ac0cbd0e7516b2576f25792c7db5b1589a97": "cb5135535319242261a02448bbe2d9aa",
".git/objects/bc/d52656c0132f518cafb559a4c24e0e7b232dc7": "51184a92a8c100a5cb985c44bcee41d0",
".git/objects/be/41ecd042c6130f50b70b6bb31081baa3748ef6": "ea70b4d889298ee76b230bccae1a4978",
".git/objects/c0/754aaf7b965406a7b595bc7bb7a5c0e0b80920": "9b5413369f3cd120cf3c38ea80d9e9d5",
".git/objects/c2/577a575b1d54670fc4325ba84b4782bc2290ce": "aaa3edb16fe8776d38f4449e47d4d809",
".git/objects/c6/9c88f84b836ca5a67634d63b85e9312e0435f1": "d08f02aea5a446220d5d480d45fcc44c",
".git/objects/c9/28c8db3b9c591de6bb32c155eb68ada478a6fa": "ff95e4439ff5124aeed808260c02f001",
".git/objects/ce/e42655672324309f32b4fae6e24d9fbd0e5163": "d90efc5c1e78a4ecd0bd6af715e65991",
".git/objects/d2/65824d69a8d7722457b12e561ce1b44036e2e8": "183247c65e77c0f9aff30af4413fd16f",
".git/objects/d2/e90405002a1b18309bb2bf0139945fde6dcd08": "38863f34c6d09e609ccef3433c9dccc7",
".git/objects/d3/c6abe5428a3e1eca3c0f2201a1ec3534a96e1e": "0ec83fcef8912dac3ce4c74646e74a12",
".git/objects/da/75708ca713f5305b01961f145aafc00a26447b": "bebf4883ae625a1191cf3efc3b7d3b63",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e3/f99cb4c556d39e3a32f4ad941ed9694e74e203": "3207d2fe8bd75329ddd0ea5b6ea33b42",
".git/objects/e5/4080cb5735ff20d5bba3717dec807d437c3e77": "69801f552ea7815bfd567620a8e01097",
".git/objects/e6/64a4c3491d44d33d8d59f08c6500917b18a940": "322fedf4c5ba975696249a5d4902ffac",
".git/objects/e8/10544935b22f5dfc664c61568021f0c3b42ef1": "a3349f9a1c4d949a3c77192559b2453d",
".git/objects/e9/f0b5ead4ff3632e284380b057d068907d83416": "75227673abf641c4aa4bc12d6a40f97b",
".git/objects/eb/7acad944e3806d5e929a81f36f06e05a30e9e7": "98c3d6139262cb91fa5e2a207d7dfb4c",
".git/objects/ef/34cdb2385a717568819bf9030ee0b642fa84c6": "4a9038135d6db66494b9f6030dabb08c",
".git/objects/f8/ba6cb56819c0a2cba1232f58dac7b36942c533": "d3b772ba0eb13681801253264f0c6318",
".git/objects/f9/1bbe6585f12ce51efcc542697bf04bd97f1477": "473e4044d5445789079c9b597f46d4d6",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fd/b620811c4769a512d097cfb54926ca6e6680ea": "fa885ecc023d92bdbf8eee886f863303",
".git/objects/fd/e1d5af1bccc86375fc8edfe103c96ce784cd6f": "55881ab311017d230420bc5140ef8010",
".git/objects/ff/a24cbc97439df22dbd297e31121717a51e9338": "74335729d121da2b8cb1bf0c4268c8b0",
".git/ORIG_HEAD": "38fbfd7720e7765bc6e2dc7083c09935",
".git/refs/heads/master": "38fbfd7720e7765bc6e2dc7083c09935",
".git/refs/remotes/origin/master": "38fbfd7720e7765bc6e2dc7083c09935",
"assets/AssetManifest.json": "8bffe8f2ae73b8499a50201149e62cf4",
"assets/assets/logo.png": "c9ca5125256e38470b9305aa0e79fa7f",
"assets/FontManifest.json": "c9202d9b0434d285107ca9a08b736d52",
"assets/fonts/Karla-Bold.ttf": "c07c916c55ef23e1f0a0dbcb10b9aaae",
"assets/fonts/Karla-Italic.ttf": "740dfd331d76c6cd37793423cb1e0cad",
"assets/fonts/Karla-Regular.ttf": "1b55fee684d61bfeaa762684931b1bc9",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/logo.png": "c9ca5125256e38470b9305aa0e79fa7f",
"assets/NOTICES": "3b7aedb4c1323e03ba273a0aa5dc87f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"favicon.png": "88ba13c2f9f6c29c6153130b0591722a",
"icons/Icon-192.png": "9f50c94107ece48879374680a876b801",
"icons/Icon-512.png": "edd95b677ed50c9f4402b77836330198",
"index.html": "1b9836485ee5fd577d9c65d6d9b78a1b",
"/": "1b9836485ee5fd577d9c65d6d9b78a1b",
"main.dart.js": "20a5c5f19dffaa18db9f90d073253fbd",
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
