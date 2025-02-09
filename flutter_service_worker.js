'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4abaddc73c0889d8bcfe57f2c6ad36be",
"assets/AssetManifest.bin.json": "5888653020658718792b4407c6d697a0",
"assets/AssetManifest.json": "bfb061118bb71941847e56d845444fa4",
"assets/assets/activityIcon.svg": "913f6f9623dd13f0170c3e22db27b02e",
"assets/assets/addBio.svg": "f38457ab30efa13ade8902cbd725f0b1",
"assets/assets/AddButton.svg": "59ce2cb6927d3c697a1420556c34937c",
"assets/assets/AiPic.svg": "24879e7d92d3c5a72973dbba8983facb",
"assets/assets/apple.svg": "358e1136c552bc6ac1b0467d62496d23",
"assets/assets/arrow-down.svg": "368d4385317f4ba26a0a8deaa48bfa1c",
"assets/assets/arrow.svg": "f0350bf1dc29e276904c5c205f76357f",
"assets/assets/arrowHome.svg": "1430b25d04970ff87fbbc108ef159dcb",
"assets/assets/avatar.svg": "29c5fcd29984b73417edf731742620a9",
"assets/assets/avatar12.svg": "3188c76e6a8ebcd2bceba267d2a67b36",
"assets/assets/backIcon.svg": "23fbe70b8e4eef7f86ae0ec1c8729806",
"assets/assets/bg_survey_card.png": "fc10b641dde035cb7c6da31537eda493",
"assets/assets/Blood-Drops-Positive--Streamline-Ultimate.png": "8710bbcd568057a5aa304161aa5633e9",
"assets/assets/Blood-Drops-Positive--Streamline-Ultimate.svg": "f6349169df47ca9acac625ea37f190aa",
"assets/assets/brain-head-1--Streamline-Ultimate.png": "f1a1806d324343405f37d9e509d252d9",
"assets/assets/brain-head-1--Streamline-Ultimate.svg": "59e52be8ff9e0ddaf0cc4f63b0562757",
"assets/assets/bump.svg": "07db1a21efeb71d4605c8798fbb4d75c",
"assets/assets/camera.svg": "c2cc8008308aee24a43c433b57f92b3a",
"assets/assets/close-circle.svg": "9b223bce0a8181d5ff744b97e7b12c97",
"assets/assets/codie.png": "ed63601417fe214af1cf907f8720f35c",
"assets/assets/codie.svg": "4bd760dde4246bf067daaed5f35da880",
"assets/assets/dangerIcon.svg": "c65f135c9e6754f50ca42071be5e1481",
"assets/assets/dna.svg": "9ce40f3583b787d4fe21ef6ccb755536",
"assets/assets/document-download.svg": "554763bfb61316d010d8d445cb36048a",
"assets/assets/drag.png": "d107f8e074ce4cbb4c6d04c5a256a2e4",
"assets/assets/drag.svg": "8cfb22518cc5bd226460192a6f1c42d9",
"assets/assets/drops.svg": "bc7df441822d9bda203acdfc086a92ac",
"assets/assets/emoji-1.png": "a28912211b57d82132697bb54a08dd3c",
"assets/assets/emoji-2.png": "1e66d13ac0f49b57bc8f9a50f5a681ad",
"assets/assets/emoji-3.png": "458d6e069a7573792a7627ea7c5d6d9d",
"assets/assets/emoji-4.png": "f01db2a6d33047d8213d63683375376f",
"assets/assets/emoji.png": "3cdb274a860cf9b5e70eca8e9f20826a",
"assets/assets/Emoji11.png": "a9022506d05dbcbbe7a37f01e6d6235e",
"assets/assets/Emoji21.png": "faacc642cb3cd341f4eba40e9a5fd510",
"assets/assets/empty.svg": "7c091804e993fad3a676f9acf8fb6e84",
"assets/assets/fitbit.svg": "93ccce989daeb1e86e76577d930f2f7b",
"assets/assets/flash.svg": "6814f7f55d798ec9d5006df715c4fb8b",
"assets/assets/Google.svg": "50914ca848e9a808786318940fe7c5f4",
"assets/assets/Group1000004492.svg": "55be7576d361733d60e8ca19b3978fd4",
"assets/assets/Group20.svg": "e8a011c4e94c85663f1d71700d573d02",
"assets/assets/gym.png": "65effc466294847eb1f456a4c2b406a2",
"assets/assets/gymBig.png": "28b4dac0cd1689a0f5f6eea316fd9cbd",
"assets/assets/headerLogin1.svg": "e593bbd7a2cffc62a48d045ade142abb",
"assets/assets/heart-approve-1--Streamline-Ultimate.png": "80825b1ddd52ee80cf37cddb7eb074b3",
"assets/assets/heart-approve-1--Streamline-Ultimate.svg": "11c061b0cc75ea9462eafc53e33a8946",
"assets/assets/heart-rate-strong--Streamline-Ultimate.png": "ade3a80e8b28cf5eabb6b7e1e3e7bd36",
"assets/assets/heart-rate-strong--Streamline-Ultimate.svg": "0489a5601e39e018f427fbb83d6d50c8",
"assets/assets/heart.svg": "7836251f227486f77c465a825d64aa38",
"assets/assets/heartIconMenu.svg": "4f46b17245c2ebd02a34eea07dd7417d",
"assets/assets/herbal-medicine-2--Streamline-Ultimate.png": "c2375c439de6f76eb320a8c84582ec99",
"assets/assets/herbal-medicine-2--Streamline-Ultimate.svg": "4e65fc7475a34ee2ac21aa20ad69135f",
"assets/assets/homeIcon.svg": "b6a6399749cc2faea41234e5effb0943",
"assets/assets/Hrate.svg": "95c560ce141375be5c70f898af3fa077",
"assets/assets/human-body-silhouette-with-focus-on-respiratory-system-svgrepo-com%25201.svg": "00a96fa3f6949bab11925c8e01913bea",
"assets/assets/iconLogin.svg": "e5ae31315fcebfd521b163b50849d9bc",
"assets/assets/lamp-on.svg": "627c9f0e090bd8cd9fb23cf244526b4e",
"assets/assets/ldIcon.svg": "3370b9f96067475d4d6c7c6077c3f462",
"assets/assets/ldlRate.svg": "c47f4d56ceb32565720d6d75bd79a4c5",
"assets/assets/Log-in.svg": "c197bb8ff30191f58b29ec2bb82eb5a1",
"assets/assets/logo.png": "ed63601417fe214af1cf907f8720f35c",
"assets/assets/logoIcon.png": "48693b72eb2afa90b5153e7736c6fa05",
"assets/assets/logout.svg": "82e85f8295ef59088f6c27119427eef8",
"assets/assets/m.png": "da2aaf1b966eacf60c08db2f4e5ce31c",
"assets/assets/man.svg": "2233052183fe61978ea91dcafebcd1bd",
"assets/assets/man2.png": "a3c9d8f7f60df06b6e6bdeeca6eb85d0",
"assets/assets/Mask%2520(1).svg": "dfbc33b089eabacaf93b0d56275baafb",
"assets/assets/Medical-Data-Cross--Streamline-Ultimate.png": "dac1d9ed2de45336335ebb2dd8df2260",
"assets/assets/Medical-Data-Cross--Streamline-Ultimate.svg": "563cfc0f13f5ce5fa104b51693f445c0",
"assets/assets/Medical-Specialty-Rehabilitation--Streamline-Ultimate.png": "2f568842120995f86e10b25caae2248f",
"assets/assets/Medical-Specialty-Rehabilitation--Streamline-Ultimate.svg": "5926127ae6f7d6d922d70ec865751821",
"assets/assets/medisa.png": "b1605567faa0eee7444f61f282049a57",
"assets/assets/message-question.svg": "711af5d42330acdc72232235c2d32567",
"assets/assets/message-question1.svg": "c7857f1b75f70ac2a17e8cb190f8da5d",
"assets/assets/message-text.svg": "51740e544b0a003f9712bb5d1af2139a",
"assets/assets/mid.svg": "6a643e1ec88c267bda9b7114fc8971d2",
"assets/assets/mind-pink.svg": "53d89d13b1c838a8b5d791d6ab768e20",
"assets/assets/monitor.svg": "498c3cec3521ed36d5e05d7ff3c2a848",
"assets/assets/moon.svg": "cbc223b6995ba7b02152fd3e0e07024a",
"assets/assets/normalheart.svg": "1c4b2398e2e988135a77e90444368718",
"assets/assets/notification.svg": "ed560147bbae2eec8b6a78a6d9d80ad4",
"assets/assets/notificationIcon.svg": "ef61dae3dc19419cad150cceed12d090",
"assets/assets/overview/1.svg": "8242e1f2bf5e7232ac5776802a30a07c",
"assets/assets/overview/2.svg": "13589e8eb7d7edd66704a5b66d572232",
"assets/assets/overview/3.svg": "1879db7a9af6fd1fa5eebad636c2ae73",
"assets/assets/overview/4.svg": "593db3d6f27a6f2b81f5771ef866d413",
"assets/assets/overview/5.svg": "c76257836c7279b8f5c5026e8c21c473",
"assets/assets/overview/6.svg": "54d4aca272f69dc7859296b20bbef326",
"assets/assets/overview/7.svg": "65acaa9001c75c441051d6c47a79a015",
"assets/assets/overviewIcon.svg": "20b0a910f99286de4a7cbb20032005f6",
"assets/assets/Picture12(1).svg": "350e8221fc128c064113f5daf2f00ca0",
"assets/assets/pil.svg": "59aea3cb98f526fabaa191275d1b5ef1",
"assets/assets/pill.svg": "f8fadb0cff2a5eb8f5fbff440dd06b78",
"assets/assets/planIcon.svg": "364b19f0555225fccd46466314ff5a88",
"assets/assets/repeat-circle.svg": "a2a3034cf4521dec1bd9cfff85b3563e",
"assets/assets/resultIcon.svg": "8db56971540abec6b4ea57e794e0322f",
"assets/assets/resultIcon.zip": "2d9f7a2f33739d3a2b139857ebd5ba82",
"assets/assets/Screenshot.svg": "ae86e275298290ac4d145f4481acd366",
"assets/assets/sendIcon.svg": "ee07a2f71896b237a14936bb0f6dee9d",
"assets/assets/setting/lock.svg": "4b9579d85dbc25dd1160d2c3d8143131",
"assets/assets/setting/security-safe.svg": "125de74b6cbb487b76fcfa5d91a4b4f6",
"assets/assets/setting/shield-tick.png": "6a948196df878b858be67cb4dd71940a",
"assets/assets/setting/watch-status.svg": "836477c3628009ebcad86c0ac427747c",
"assets/assets/settingIcon.svg": "ce6c09bfa2800d0ab0d85c8edbb7d5cd",
"assets/assets/sleepIcon.svg": "308c2095f1f97d9233b046c2b1f7201a",
"assets/assets/splashWeb.svg": "bcdc77535805f4add7f0f276faec2482",
"assets/assets/textaksmibashad.svg": "c57e917c57b060dd799af360d2fd40a3",
"assets/assets/textlayebazmibashad.svg": "1f6b0924cda6a1a0f1e646dc0828b1e5",
"assets/assets/timer.svg": "44e68dacbb94bad8db964d8e21f76e58",
"assets/assets/watch-status.svg": "5ab70f2646a6d52b92d19e3169ec9454",
"assets/assets/weight-yellow.svg": "19a8b874599daa0da8704daac7e5782f",
"assets/assets/weight.svg": "e48a19138ce5471673a95f4628329dc4",
"assets/assets/woman.png": "77590885c9dd7af6a8956185d62299ed",
"assets/assets/woman2.png": "453e9a6b8329da8217fd05af25221cfe",
"assets/assets/woman3.png": "b9729d3e9bb79072f3d595e837ffc96d",
"assets/assets/yoga.svg": "f401bbdbe0ac63937233c167cdd14bc8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "af07f6544b4cc42c8e29e7e64620af64",
"assets/NOTICES": "455ecb03e9f9aeb4d18727a8261360ab",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "cb5135bbd0e2966562ef16111264339c",
"icons/android-chrome-192x192.png": "736ac9637bef7d14cfa90d46c39ca54f",
"icons/android-chrome-512x512.png": "a19d0db53488ed1b40155bcf440032e9",
"icons/apple-touch-icon.png": "a6d81da8fd1367969975dee6da464658",
"icons/favicon-16x16.png": "e119df109002994e8c1fe83a7b917179",
"icons/favicon-32x32.png": "86a8626f41f4789f6081c467b8c1557f",
"icons/favicon.ico": "3bfeaa3d4b90b7233728c09d1885e79a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"index.html": "7e386f7de2146892261edf128c2570e1",
"/": "7e386f7de2146892261edf128c2570e1",
"main.dart.js": "e20131f6b0f75563e8ca08a88f7ccdf3",
"manifest.json": "90edf16a1c846c33c75164cedad2cdd4",
"public/splashWeb.svg": "bcdc77535805f4add7f0f276faec2482",
"version.json": "23a39ddb7cbc512695423efae7f867f6"};
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
