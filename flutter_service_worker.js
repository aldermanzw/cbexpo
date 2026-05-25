'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cc913b7cd87ebd181fa46382004609f7",
".git/config": "5b849b2cd28029c9d249c887bc6c6191",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3c34de822592e18e0f93a8aa6b4a2925",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "10848ff93be2823e5fb2fb078a294a2e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1018f4bd388e9415421c10051ac44ec0",
".git/logs/refs/heads/cloudhosts": "c61d7429ee2f2aae417a9ea15a6329ab",
".git/logs/refs/heads/master": "b417fc505919bda4b38776eb31c5017f",
".git/logs/refs/remotes/origin/cloudhosts": "a0a3c1eadda7a7cf054d8e3a94f7207a",
".git/logs/refs/remotes/origin/HEAD": "d8061d21bb26f0d44bd6bc1e79229cfb",
".git/logs/refs/remotes/origin/master": "d5260bab33bbc255818e8cf60bed07f8",
".git/objects/00/b174e5386c85c27b39e2a5290cc7f58d6c9032": "a5f68cbb16a9d0b0d7c00d542b38ed18",
".git/objects/00/c51ecfc5d6b76f85b1b8fe3ba79095256effa7": "0d459cb0b37d43766be0a874560d1ef0",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/456653e6f2439c4b610a2d412d01d3d5ceee5c": "f7e686c532ab5fb9b5896554248c43f7",
".git/objects/03/b47e12b47f1bbef7e11370e3036c368ed9255c": "48f1498c71be3fd78641eda01bce0d61",
".git/objects/05/54575997db6df2c4d00a12c6330ad43dd9fd35": "2d01f1cdbf20cbb0243b1ccb3b911619",
".git/objects/08/1cddaa2d9d79c253cbc0fa0d39cb05409bf378": "2571ba87134323a5788199597d726707",
".git/objects/0c/28f41e8f52f5365a1913c0b39eb10ebf7a744e": "c70372a4b26b883f5aec7529ef1b1449",
".git/objects/0f/9cc426d89db09ee256f73e230f04d06bd57b79": "b9cc4455c5283b7ab25dd6767596d10f",
".git/objects/11/6fe47471a5c1790ed206e3fb51aeaf868decb3": "2a22905dd724bd38d62b035496c17651",
".git/objects/13/da20ba32337e1eb989650fe98348b2f8cb09b0": "e36bcda250a1c391bb641e9a43d0a260",
".git/objects/15/57496d4e6e3b90fe3f50f122311b7ef242c2aa": "6e4990a8355d72e3a9c9607721144084",
".git/objects/16/b8c7d6d171ad239d6a2a89ef86e5ff0724ad57": "99e667f5d3cc0808afd3f0d872e7ec59",
".git/objects/17/74d7c089128c15e774ce426eefb88a55f0dfd7": "b8c6a4444e2577b69efe7e17f0973e05",
".git/objects/18/9224e60b6ee070300bb36df8d4d36401f2b0bc": "0eb5dd3c4637d16713fdab3e04d7e57a",
".git/objects/19/45ce5fde8e638a257ece98c8cad610f4fc6dfb": "c10be6ba7ff2d9552174fb6073c2aa95",
".git/objects/1b/a4736f3897445c1bbb24a40bded5314ff9fed6": "6627c9f5e3ed7c5d9c08f230b2d7cc98",
".git/objects/1e/988ac55b0d25d213a97098145f4f6c65553802": "16e2ed6b6152848d8fa286529217ff25",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/3c426c4edc77a417c9851dd465974c5f04b507": "be780d8b458c2c5bb35ef92a92255a65",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/38/d122ed035a48f8fce5fd9dd9a294625d17bff4": "c68a69f05263bb979435afc6412f18eb",
".git/objects/39/112b187a189635002a51e0f35477206e6193fd": "ba1d4b399426b1895b9f9d71b69f5abd",
".git/objects/3a/0111c212c2ed24a4ac47c1fde4a1fd74915387": "74144f05f57ce6ebfc51dcdcfa57b709",
".git/objects/3d/03bad49e2650584eb6645707d43de9b8a273af": "05eaf7254890e4332eb41aa2b1e18978",
".git/objects/3d/e4b9d9235c5575a82b0647fa7babe8eb671fc3": "bd69b7da3b5cf7d42adef1884ec54ac3",
".git/objects/3e/3962031d8504e819009ec3a04634a0aeabdf56": "ddf3ea601de4bf73acdcefabc40a6e1d",
".git/objects/3e/90dd874b31a99a2ba6713ebd71725d9c474c12": "dff6e804e46ef3fce9854d939e77e6e8",
".git/objects/41/a7e1bf9badb3ef18a80fe9ef0c7b309967e765": "ce561892e663fb22572f30c70db7a21e",
".git/objects/45/2c81386d068bef0be93ddcb8ed14d6ab3d4eda": "3ef0acebd823cd685f83f072f316dbfe",
".git/objects/48/f9e799e57daeb884e43101d6c4bc0001529404": "14b9201f3893f2b0d148520beca96fc2",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/40dabe4430b4d7288c6ae92d8fc3e17cf8e410": "7c1843130f2c3787540ded5445c7793a",
".git/objects/4f/53a33557d0fc35663075af0375d9e623c9db6b": "3384030cbb17db4bc2212e08cf204df1",
".git/objects/4f/bf07dccc6d8923cf715da9ccf3a159992aefd6": "01324e2c68f3cc73440f07dbce616204",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/de41c8315c248a4b380111aeb4d8faa5ac5a40": "b8583ff2d9af57a0745d7845cf867d55",
".git/objects/53/ed2251b5cad7d83c2d6dd9bb4496fe63b9096c": "5d6eb74382ef8b5ef6f531aff07aa921",
".git/objects/57/4825659397f222eb7eb6b8247f6c8db6d52d3e": "9d73c6cda345834ca6397f7eda759a16",
".git/objects/5f/11d39f5ea6cd6fb10c6c2ffa14bbe2f0d8b781": "cddb49c07b24ec7b558166ea1013804b",
".git/objects/66/3743e90d075cd29f30b3bd0381509943b74a54": "d81791b713ff3f1b3680cdc592247eda",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/74/7d46717d94cc6ba171adf8e54df06b944ec6d4": "5e192adca19c1ffe87d15b2ab5705919",
".git/objects/75/64c8210d285f90cb6c618606378e2c9c2f6477": "7c73cbfd5c4a9803c0afa5ff19ed8686",
".git/objects/78/cc9eb747a90c9af2fef1bb9c55857f5e31d87c": "bbf86eff29cbed34a6b6242115aa862a",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7e/a6fbbf883cd9d1ec0a134a824dea877a86b310": "8a52d6a6bce05a2d7c5bc6b5647b1c43",
".git/objects/81/e294cae42b0cbde84bfaab0d5cf8e93591f0f4": "4e2fe7d6f82f02df091026135d27641c",
".git/objects/82/039646eae58381941a128edf3dd254c98a2961": "ba71a4099c57c699fe2ac9b609735b8e",
".git/objects/84/61e9718414f12d64a0f33fafe11ca68bc6b5b1": "cd6be726c5281448f5c013b8bdde5fff",
".git/objects/85/9597c52c800de03f8ea006dead253117b08f1a": "d25e679eadacc746140cf7e7bbe796c7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/63e3b7e7ef2b3b6e4e1b820a6fedbfe4c68fd5": "59223fc8ec9b4e10f31511ef8738d641",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/b8b926217931b41ebdcc0d7b66d2a0c88e4fd5": "329574aadadf0e1dfd21a21b71804658",
".git/objects/94/3d83add9cebcae73675d5459c5ed4533c3997a": "a0ec6a4b3e7210562b340d4804240e68",
".git/objects/94/40dd2c06399cd756032812f76c27ce3cb2328b": "1d3e76c1c5b9b4dad4ec6216fe82b118",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/96/98bdd3a0f8ff057f553abec5d4f73c07368e6d": "26d99224ae7e341ca7766b438fd494e3",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a2/98db0e6b7048e60f68d61c9a77b2dcb04b3077": "0b6d96f6595865c273029fefdafeb928",
".git/objects/aa/97e7ddc98b98f81c0d84757a17238e2a7d4fd2": "6df5baac4d34168563b7799135bff21a",
".git/objects/ab/adc8e7ada960e4b4768c5ffc528edb6aa1e266": "0bea720db324d11f16225a0f54a3caf3",
".git/objects/ad/37e2c2c9d586095623ec6b10e8eccbeb6e36d3": "b88a51a355cc925a9bdc18509ccf1ba3",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/2b63eca2b6f0415d75f0c79a718f0293571c2d": "eab8983e2e6b0aba2a8bb1c60990b41e",
".git/objects/c0/d71a93dcd4f14f8730f3f36ebda1a716fa5c91": "dae3bfa8f96526a66f8fc4d953ddd59d",
".git/objects/c2/aea8f0d5402f1e0330782dc621f1e969ca5b50": "686a8eff5203e66f064f364ebdb2ecaa",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/b452f9661daf2f8133e1e764bf9312e7e2f58c": "724b4a0dc8c4c5aeecb578c6265d3aaa",
".git/objects/c4/b4a4247e3f95e428ab68ea6fda56de2cc38bff": "edfcf667fb09f0e4954753da60c6a08a",
".git/objects/c7/86a051c7f93b108a8c5fffa7f7ed8c31986e25": "db40a31af8a8a0392b41366189bfcc63",
".git/objects/c9/bb03c4fe75ba3c88785a20349d57e087db0d9d": "97408bd1eebda08a5f2c110942bf159b",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cd/77d36780fe90c4adb534a935ab6ddd6aa4a728": "7b2fe6be4a05c31a57cbc0a34451a78c",
".git/objects/cf/90582144c22c5fd0a422c1652529771fc88fa0": "6be636f4d12944ba9693e80c91504ed2",
".git/objects/d0/376a9b89505b7bdac3639e08c1ee312641c2a2": "00cf22b8a968ef19e2c4fcb1c3dfdcf1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/95e2806a069a8b6863d5e1755e5d37ebaeb538": "26999ce129cbca9064b7435a1331ee72",
".git/objects/d6/47bc9b6c04a882c748e91b61a2f2c368918955": "cd2f546e99916de4a74ecab2a1f5e485",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/db/6e8e438d3c8aaef8fcc0bd7a4adbf0bc9eb635": "c7561ee280d823c21de55b929e418061",
".git/objects/de/7d173593cdf1ebdfe482b020f77a625f0fa6fa": "83b03e11a96c60ef9d621bbc7b2fd7a6",
".git/objects/e2/4796d812c4e5c97cec0783fb9c0f910c0fb591": "26e23fca776466bec9a26a9e48f8db5b",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/caf14153ddd34cd18cf83c82829181dbc4261c": "e0626545d4e9009eb9bfe1a76a283de0",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/d990a6b4a972cc2a0a4df30efc171244d37fe2": "404db3c3f07afc16a33b1b586b253d95",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/34936c503c690ad8cf91a9b9aad13cc9326449": "893bb8a40368e3b397f40366fbe9be25",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f8/d0743b3e60a1ba703e68b858e40fb01960dfc5": "466f2783f9f8b18b836a6d21212d2819",
".git/objects/fa/e50107dee96c376fd750ee8dd64029ff25effd": "8e4bd8af5f0cec5f6ffe7a577a2e8997",
".git/objects/fa/ed9f7dafb58a1b21645838bad040c6049978bb": "f03b1c35e20ed329b79e38407c968cac",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "719121165581a30fb644c39bebe8925e",
".git/refs/heads/cloudhosts": "fd9a9181efe9595398c5eab73608a5ed",
".git/refs/heads/master": "ed38259acc66a143cc58a11a59a8aa7e",
".git/refs/remotes/origin/cloudhosts": "fd9a9181efe9595398c5eab73608a5ed",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "ed38259acc66a143cc58a11a59a8aa7e",
".idea/caches/deviceStreaming.xml": "fbc8da7b713a6d283ee9b8b8f9b475e9",
".idea/misc.xml": "32297c961550157ed585d110b0b856d1",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "0945c2855a7c0fceb5a8fa8e581cbc49",
"assets/AssetManifest.bin": "9fd7987c1fc27ff2d6beda87252bdf13",
"assets/AssetManifest.bin.json": "dc97b8c87dbf7faab345711b2df50d5c",
"assets/AssetManifest.json": "92a21aa8b14077dff58f9e60b4c8a780",
"assets/assets/images/logo.png": "08516e3e3a555da20b3bab85b22df1c8",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "45c346f20d12dd10e63e267a71933a33",
"assets/NOTICES": "a556490650f85fcf42ee9af562a4f6ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "00eff048f096d70d84c48ac8998a9bdf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "48ee2ee3b47d31f661186808a1712968",
"/": "48ee2ee3b47d31f661186808a1712968",
"main.dart.js": "dfe5535b3ee02d28a7a1c82fb14e2116",
"manifest.json": "b696c827dce69ddcaeb9ee164bc9aa5a",
"version.json": "bc2fda8c70116c9868d451ac09ae0798",
"_redirects": "c62c109df475b368db5e075d5e2f0052"};
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
