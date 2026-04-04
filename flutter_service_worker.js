'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1f47d3d5f95ff81fe05950fc2f4cd223",
".git/config": "fb556054032ef86595b4f271dd28de93",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d556263af33c2669a0a3bb3cb8b64e57",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a91f80edf1745270fabd72301c914d14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "059780dce933d2a7e1872ac6c9c6f5fe",
".git/logs/refs/heads/main": "838ced0e984b499edfc512ab5a4bba4e",
".git/logs/refs/remotes/origin/HEAD": "861dec33098db0f7cdd520532e19d6f0",
".git/logs/refs/remotes/origin/main": "6d5adc1bf20bf555bbce5d634b8c0152",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/15/7f66f5a85cea2619e009d821911f662a4034e4": "d69b9edd04cc62f7740bb9a0d322d945",
".git/objects/1c/5cf894e79f0cd2662cdcce41877a6fe8b728d5": "cebf59701bde95d86b39be2f63dc567b",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/b89c7e096d2f5c46d7cdf77b41882f16843a9e": "7afa0927caf8b59ae742c7ba3dc4b10c",
".git/objects/22/a41f5d8e33c409331ad869b1a93a94dc077b6b": "bdaa96097aaaf9b19d3fb4f329d14c99",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/0d20b1f0a72988a541df2a6928c45c5ab918f1": "26baa74cf91aa7471976733112974016",
".git/objects/2e/4d1eb84be304f1f0e97739782dba9bf4ce9867": "63aaf7e9dcfadfa7cc57c3daf6a15c52",
".git/objects/30/fc566e35d68f5270d73d3ee2d1d743c6af55d6": "097ac1a3fadf2466e0e6df94618d47de",
".git/objects/31/8d1fbd90928eee071dc4089d8320e6480293a7": "f960c9e9e110a5d1445a2f0091977172",
".git/objects/31/b3eefd9826bb39605734a4af7e65763f7e5f4f": "aa67188a0d60acd0787e472f56a257d0",
".git/objects/39/2928ebab35335453fffdb95deba8cd9952bd4e": "ffd1088c0969585e01170273044f93c4",
".git/objects/40/44ae07217138e55307f6eeb0d65dd18094bee3": "6218ef150219ed9032fbc5b8d283b47d",
".git/objects/44/576600570d3b20a1bac322bed976a1b4dc9c5c": "e4355328f4de50a64b026740551cb8b9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/d47dab62bd0ac22d03a2fb76aabd53770dabe1": "c7c66bbef71274821e178bb97918f323",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/56/b479aa373c7ac422bd484e64d49a2f4bca9c77": "2f9e9c67eac96c66be592a1e4fc946be",
".git/objects/5a/7ccbf2434740667c6c22ef02793a579a90e270": "ed8566991d4b36743006da0354c965ff",
".git/objects/5b/bef90b01257dccb34a7c45d243cd93cc40d719": "1e487e31d0eacda5ac53d85b9e7115c2",
".git/objects/5f/fe97a488058640eb66e25623fe80185794a753": "38dbd4b24854e3d436b7e8f672ad7093",
".git/objects/60/6109650ea1c66b0086ff4f2bd7baef88f55429": "a45b182b380d71c8d28e874ef5aafd66",
".git/objects/62/f010f52539588dde01fbaf75887fabd29487fc": "0f1dba439737a0c6b33d53c64cceaaf7",
".git/objects/64/32d5f4c61afeeb5e24cdd6599dd786e8633026": "f0ca21bd0d9599396dffe67e52cad8d7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/74/2a131b014e6e4aee3200b2c254b9ad301f7efc": "811a4c25e4a91ff6ab7be0c0473989c8",
".git/objects/75/b89fb3dcea36822714755c5611ea0df51878b3": "50c7921d56ce2def08e875d6cce61bbd",
".git/objects/76/9b8f3aec8f53039228ea622c86ed9e5129cd1d": "97e3afb1de3b874b99c30f6fe7641a01",
".git/objects/76/a2288191c3751c30fa02e5a803d7ba72d77884": "2c760a0321049e779c58d3ead71e86ae",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/82/f0369d04c2e19473d58c43600f404602d70b62": "b457d1aaf401db6e8677e50540ad9ea4",
".git/objects/8e/3d11f95d0aa0f0645698a15a3eeeac0ed71199": "1b1d2ca2873749b148fda5f6460cc7b1",
".git/objects/93/42b96fbac1b476f152a1438faf15a38e22c804": "456db660ef7bf81254c676a8c93b0f35",
".git/objects/95/3a0eec626845d210098135cd3906e5a58cd2b6": "a4d300a68241b3d7e3ad1d26505e8751",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/272cb2d4bf268865d50c41454a1728a7fb3b44": "b7f914429fd8c99c66daa917d0dfdf75",
".git/objects/a1/993ae46599889c3315705826b3d065aa6964cf": "13bcd997aafd5621a4e0503d48e4ff37",
".git/objects/a4/debd4cf84d31efeec178edff2073f5f715d3f2": "53217c1ae1b144bb3a2a9e9e397cd3d4",
".git/objects/a5/39a3971c9e6543afc30caa38f2839f5c8d4652": "c824002da4f263986d343f7c0b56232b",
".git/objects/a5/cd8e13cef128cd356f1b5d39c8fe5da68201e6": "e3530b7c6b4275e28c75b2cac6e48400",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/ba/e82ea15714af13a6bea7597587b2ac34b3a1fb": "3038886275a3be447630ee23d7c776a3",
".git/objects/bc/e9210144d3a9523d7a6c0f13a7c809ccfb1432": "5b533313eef6aaed5188039d1dba53da",
".git/objects/bd/3649ad36a39556765d8d15d91800fb871004aa": "36e45aed332207a3f6325be9a214266c",
".git/objects/be/f8a5405f11dea7b8becb7320965d022cf1ba42": "28a31f5855f7dbc3ac6cd5b181e65adc",
".git/objects/c0/59a2cde1fc8cefa6f43b3196c57ddc7188df48": "ae91aa96f5d6f5f5f63bf4a1f9cc982e",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/b9e5bd1a89fbb126b6dcba02b37a2d2f6ad256": "4b984ebac341e145b6fe542899a4e687",
".git/objects/ce/a79e727eb572480b531f71cf4ceee83ecb9bca": "ade6a21aa9526ffcebc90afdb197c714",
".git/objects/ce/e2c59b31048d980020d3f3bfe72778ea609bb0": "4363cef642a6d125500c4f384ac04a9e",
".git/objects/d1/a2d990f64c52ed47d93887c8867bc933927882": "684ea7dfd8de0959e2b8a6e66d2d35ec",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/6546886bc80915edc89d61f59bae68c4676eb0": "9442c18d9d6039619d81af9f890d855b",
".git/objects/dc/f257b99eefe49dd190aa2ae5f822a7e1a0c463": "cc4e71566b65b5d9bb8680ccf381abbb",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/e209d764c7d60dece8c2e35ea4c616a754ec79": "5a274925efb92a3c3d843b279862eaa0",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f1/b51d1677cff0775a593a373ec5179520d5d933": "1e589cbb32a5649ff013626da54021dc",
".git/objects/f1/e23b34086ccc5688e44318986b1717f626b485": "9011b328a12b1986f0ac88c79d976dec",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/c349c80cf5bed61ce97c18f4051fed92fe25b6": "cb349f0a7b36a85169b65f07910f5a6d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fc/c84062e203f001bc4a367390bbf62d6ddab3ec": "1baf967e4726cbed78fb441e423639df",
".git/objects/fd/7e94376fb78c55425ceebb1c75c49f75b144af": "6667374a18f4fc4216c4866ea79771af",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "84d15a54005c4c77741517481cfb5f17",
".git/refs/heads/main": "dc10a3e4c9ec9f9ecfb8638f7a100f19",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "dc10a3e4c9ec9f9ecfb8638f7a100f19",
"assets/AssetManifest.bin": "c886cacaf3f2676153c5707b55a5a5b2",
"assets/AssetManifest.bin.json": "37fe022c51cd9faa94e9f88fdbb2a3a1",
"assets/AssetManifest.json": "dd687924e348329c01f4c1587197f3ec",
"assets/assets/images/google-plus-logo.png": "c9c4d8e6f84d323c7378d94f9fdcd0f3",
"assets/assets/images/zynto-pro.png": "65929dd570e794db51ed46e8a5bb7e6d",
"assets/assets/images/zynto_transparent.png": "1cc873743b391671934cdd705ca95592",
"assets/assets/loading.json": "dab3ca35d5ecfbc3cad3b422ebabfeec",
"assets/assets/login.json": "4456723eb5b1e8470948e470577a6dd7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "51604e0cc065e67d50df316c647cc58d",
"assets/NOTICES": "2e372fbf6129055d2688eee7493e679e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_cashfree_pg_sdk/assets/amex.png": "46eb2707a75feb189f161ede81c98f46",
"assets/packages/flutter_cashfree_pg_sdk/assets/credit-card-default.png": "e987949373676bb7b9a6bb85c19dba1b",
"assets/packages/flutter_cashfree_pg_sdk/assets/mastercard.png": "97a9ccc916ed965a2c8c274cab6151a6",
"assets/packages/flutter_cashfree_pg_sdk/assets/visa.png": "98cf72423008b4fbfe896620f3551055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "9a13930c6606154eb4d299dab98c854e",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "799cf8e9aab949dc7ca27cd8b1cad63d",
"icons/Icon-192.png": "ac13db13493b60133273be38cf2dbfd0",
"icons/Icon-512.png": "5d39838831672d6ee6115607a2f7dad9",
"icons/Icon-maskable-192.png": "ac13db13493b60133273be38cf2dbfd0",
"icons/Icon-maskable-512.png": "5d39838831672d6ee6115607a2f7dad9",
"index.html": "8ccf3cc006165f23857149e79cfb4ef0",
"/": "8ccf3cc006165f23857149e79cfb4ef0",
"main.dart.js": "f7cf2bed181b9143731b6e8fb266b447",
"manifest.json": "577d19922aafa0eef8b79dfc3729feeb",
"paymentgateway.html": "d1ddf22537674ed1b05c3effc3aaecf1",
"splash/img/dark-1x.png": "57d71a116444c37baa8c2932ca0def98",
"splash/img/dark-2x.png": "83141f8bac418cb799d2d2f1cdf52a63",
"splash/img/dark-3x.png": "b6d4d36fa1a1aa435588db09477e52f1",
"splash/img/dark-4x.png": "cfc49a99532ff5f218b5394ec91b5fce",
"splash/img/light-1x.png": "57d71a116444c37baa8c2932ca0def98",
"splash/img/light-2x.png": "83141f8bac418cb799d2d2f1cdf52a63",
"splash/img/light-3x.png": "b6d4d36fa1a1aa435588db09477e52f1",
"splash/img/light-4x.png": "cfc49a99532ff5f218b5394ec91b5fce",
"version.json": "cc5c75be9367ce385f2726ae9b1c072f"};
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
