'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "acaeb0022464a9d6e3cbe94171df0eb4",
".git/config": "c728d384c98bd1810f04ad1f25737a25",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5386f5843b1a704b673cf5bee06388ad",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "de5cebc98cab41294327d83e844536a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a6d3ff8516b373ad222137521df7ea11",
".git/logs/refs/heads/main": "4bc83b376cf099cda12f776f174fcabe",
".git/logs/refs/remotes/origin/main": "4985b97472687f6d5792640fdb6207d8",
".git/objects/92/c1fd71efc3f31bab39b07df53c208aa59dab81": "748743acc4ce5d78b41fc7f28c3db16f",
".git/objects/cb/614dc2dd35ab209ae4efe2dbb80a35e9c585c4": "c006b10b753d7c64bd2e5191549649c7",
".git/objects/ce/8a0407af949b72ec28bc97f6e702c47be0e22b": "741c0973cfb90f73ec84b9b587b2014c",
".git/objects/ce/ec659260ef0c656fc2a8b0651bbdd65997f347": "7e841c7d7f2dd42de0abbfbeda9463d2",
".git/objects/d0/2d916cdb6895871c8c1ffbf091a5c67985f04b": "a3b5f73f0fce6727d7e299360e4b6a08",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/b9a6bd370c4642f27ed117341afe816c76a42f": "adb84f74c8a6bb997d2fd62a72c56e9e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/f193518f8986ab28fd888db7fd7151619f8ff7": "6db5f605e6bee5794fde691667fde186",
".git/objects/d9/c18ebd2fc17ab916c44e84c5725f9f4e4a7ee3": "c6a8b1012d1fa0c408f244dccd194d3b",
".git/objects/de/05cabd475fb82e1756f3fd6a283be76bda3685": "eba5363427b9d0e30b93c85568dfb33e",
".git/objects/df/e245e6c19317a0e781e5a946ffe9ab7fe38712": "32d61598752725026178bc513c5bc620",
".git/objects/e5/aee58189ee80b39274aca9edc8e7fdbf10c5d2": "4c68b753b3a3423489c29931caad0f44",
".git/objects/e9/246ae6a2ce3430e04340a9600ba54f13950fe4": "ac63f8042c3e7064700dc6074d92d7dd",
".git/objects/e9/5cfc5c14b43e1d273cb5f0eaaa9ed1612b6e09": "b166e5b3ee40945835ef634cdcc7a856",
".git/objects/e9/7aa6cb35985f1aa062e0a34eeb4d9615e06dc3": "fb025dd5427f8095967291090d644fa6",
".git/objects/ea/03a33814d1aa620b2a30c2f84df4b0bd523f03": "6722b200df277ef842f3f1bffceeaee8",
".git/objects/ea/855a780bf311119c32eacde2ce80d6425ad75f": "a77fb2e52b71389c6f294e40e98532f8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/5653ec693e62d9ec0deff0922dfffc0b6db3a8": "715f99b3205b3d0d8b6b517dfc7c9419",
".git/objects/f1/5d93d17ca3f5b91f449f359b6065d2a18a2486": "cb8a8741c53269044e53b59abbb7ff93",
".git/objects/f1/66238732bbefa55ca442dfa50c066b495aefc8": "2370be11aa2e4af725f1a150ee682537",
".git/objects/f1/948ef4741e9af82abfd8d3edd366bcbedb5455": "abfa6f0a5c93683f8ca4157245d6fa35",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/b0c8d82d7f3a44c00a4b9109fc0ee502d60030": "21264e7e3fdb5ca6972474ea36a556a0",
".git/objects/f2/fe0dd0bacbbb431a09d1b3c535d41073502786": "923f6d2e3d52fc9eaaf59ee291608513",
".git/objects/f4/b8be1ad9296428b71ca91939b073ee0479d8c3": "975b0df3cf10f6fd17378062b3d72b5f",
".git/objects/fa/27a03caa51f8adc8d20cabe40dab53d6c8c886": "c4fdac18c4e00c4b421eec69833f725c",
".git/objects/fd/1f62c0c4dad1e1eb4003fd79592e3b6a379db4": "6c17672b8785ec142371d902ecbe3d41",
".git/objects/fe/1ef2cfb62ea4b3e99794a3a2108d1c0c849ea3": "1ee0ae2b533a33af561975343e021cbf",
".git/objects/02/04fa7eb34060c1d4df394861dc6aa5ad7c17af": "ea20182c45b4aaddb95d1f475ab96ad1",
".git/objects/02/3854490c3c77a406d5cd727c81aab8d3ae9611": "28e40193fcd038bbd66ee3353d7d8280",
".git/objects/03/841e960edbc111b763a2009dfb6e386dea494d": "cb9ad3f5c662bd0d6640108935da9981",
".git/objects/04/8b43447ae5bdcf5cdf5a5cdaaba65bb51fac49": "4e566299ad77bfe5dba818bd951b55cc",
".git/objects/0c/f6e34c3c839a1fa64a46dcdada9dae454b5c05": "e4685a1d5e4a9546168fb318df19e30f",
".git/objects/0c/f8b15b883fd892643cf6860d168b3832b4e4e9": "9a4109d0c836e35508d1108471e00c6d",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/fec3093941a89da1fa21072edc7c573cecccb1": "ce834529e9da4dde52313b04ddb986ea",
".git/objects/17/843efdb08cb12ddef968b6f18042769540e715": "14a4e1d8720ac60a76954ee9d9d752d5",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/28/a8ca9641b024778b2f7c5d7beb7dd8b52b31b0": "5fc7d64bf30fc2f186c573a6bca99648",
".git/objects/30/c6d2c6c5566a11256a1ebdd4a3286526c85d1a": "0c88c18372f9c0b2e6bd9496618e0d02",
".git/objects/36/07db5b1e7fcb8bd672c549dba3f74c2d1c5a47": "a2ffceed064527ec8d3d4e2866b09503",
".git/objects/3b/84601598829a340a2b3fda19872d001aa88b9d": "8fedc9c14c50d7d3f41bd61067c04a5a",
".git/objects/41/e478457501a21f2ed3a991ee8438c5a92c34e3": "b1c2c57c6e7482f7e7c1f239ef252bad",
".git/objects/43/6a22778a3d1bd34b8d3cd2e9f4b94c804b64ad": "609b3f1278e3b16c8ff8cca83d4bbfae",
".git/objects/43/80ac54394375ab9ad00d703df636e190e22b99": "da02843c3bd60a47326aafe76a09c16f",
".git/objects/44/d4b25856f9de67999a81df0e979b739344c410": "aee9609aa11c7b637e45ddeb08912621",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/47/9d48dd8c95157ada546b26e236a5ce99909fa5": "7cc41fac47576990af1f1894c4611a16",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/b354c3d67cd600b5b47867005de792f15d4c61": "0a075b4110a1f4cb4bc09804029222bb",
".git/objects/4d/404fd9032afa1ae69de4ad5eadca3254cb8948": "dbf896033ff1a7e9ec886877369af93c",
".git/objects/50/5b60cd7a31bb734123ab3b98be17f15dfedfd4": "61479ad17873855856edb123a8cf6765",
".git/objects/52/3ffd60659fb29ca9cb03ad77480b3b31846d66": "1a4dbbc002c6bb3b92444f37602895a2",
".git/objects/53/d86b600bbf92d289c6b8f10210b58145008faf": "b5243d2bf58d7528312e6df2d41d121f",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/57/fd263b53ca55ee5ee27875ab0614882931e292": "663cf84d7ff58a4ce9162b7254f6fd0a",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/60/9e593ab74e57137546285b59b4aee27b33c024": "105701e0f77d9e39e9f1ed0a1d51505c",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/ca4ef2de91bd10b30a7196417cbfa939acb8a7": "ee29f9236c8ac61f384cefc1f0f3c379",
".git/objects/68/827b9764b2432dfb2a48f6d056ca49262252a4": "93db3ded5e8e77c89f7293a47abedeba",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/16e66369725c0d078d762fe5f3efff5815f1d4": "9c9c813b583401a8ab09faefcfc0fb80",
".git/objects/72/6f8f8731b4f3c41ac8d466fcba68d841e52a6e": "5725adf155e9a4918857c58a16cfe8dd",
".git/objects/76/02f2568e3aecc7bad48186ed8c3e58a54b2488": "d1a7b4b60aab9e9d8e5d813dfe674cfb",
".git/objects/76/0a091e9bd71f589e69ed49c51bedb6750f6d82": "b92d9875c165fd66dcfb5d2016b4a7a7",
".git/objects/76/3b67a386aae3f1accd94c71dc12daf4ab148a1": "0dc8ef4c6938fa25791cf2e465748d83",
".git/objects/79/a4dbbc197036f0177cf011e9a5bbe260a91774": "23c9efeaaff85564fbd0c84e2fcb6fbe",
".git/objects/7b/2130d56220f50e8356c0ad398adee20e7522bb": "ef413336a68e30d3a797b1b7b7ac61ff",
".git/objects/7d/37487d3a2f883253b697e475575f894eb0cdd9": "df245c4ce57b3045e6d47ebf1e956b03",
".git/objects/7e/a169372bcf08e07a52c29d4a41c97694256109": "1f4cd1773fa31e96d5fc012b4aeefc32",
".git/objects/7f/28f4003dbf92a6e90815f85a87a3450fc6959f": "f9caf2aee4621c8825deb650694f5e33",
".git/objects/7f/f8cf3af9885dbfdb965e733728756e010c203b": "2f5e3635880fab12780f853d0e8198b7",
".git/objects/80/271985e1bcaec047a469ebfdeb4696fee87035": "2a4baf1f1e02f75ad1e332cb8a07e055",
".git/objects/83/e6f3a57d82b14a0e0675ccddd7d0fc798b10f7": "aad86a689798f3a92d727640f5d78b5f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/6cd17191c030ea49caff531cea75ce893e6f11": "c30aa1276c6faed112a01c39fd36db30",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/b47cb62dfdeff896ed3f11bf9a23475e6eb733": "b02e9e260d0e406af745091d68fc2b80",
".git/objects/94/2e3214a6b3bfb8be3d2194ca6412b6938adc85": "bee1d8d1ef1df6b2a6e7813bd1cd3cba",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/dcd9913d2de0e9465cde30f2c2c8edc0c9482a": "d0b3ed3f1516bbe4d0aff726acc1f46a",
".git/objects/9c/5a14bb88cb49e7ec32cf556247a9b4b27d56c3": "a1ba308fdc6595178f6a2e0af8e46ecd",
".git/objects/9c/fe162912a1d204034cbed5a990057c5bc92436": "9a72bb6257f815d17c16e80b171a15e5",
".git/objects/9e/7d99e04f81030db26cd7ec4a492bcf72ae5e9a": "903b499182bf7610dae5e2e639fe4be6",
".git/objects/a8/ff6a86eff5d106377e592009be90d1cc787ed7": "bd6c452634ee0fabf82403f295d69b75",
".git/objects/ac/7e8361a3fd40b9c71d2a779b52b2037b9bce80": "a89fc41b9299bc3d4fdb12b6ced872d9",
".git/objects/ae/d4b325f829e89d3d0a9907c29c7a3628a165eb": "e0d02c41af805b050caf55173b6bec31",
".git/objects/b2/118204a743a6d83541977a9eb62d7f5aee4670": "c147f006897bef200ac974adac3eaff4",
".git/objects/b2/30bec044f9b1f34bbcbf7c72046be651278f7e": "fbad7f9190a0121cc5ab245c39036cc4",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/0493099d555cabc66b6b00d985aa636ff1a845": "559878f2a4916c6d070e9a24c13e905d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/1f3eae6e87f3b9bee1460a84a2be62c3df1ba5": "f2c091ae0369c741425f7dfeaf18fa7a",
".git/objects/bd/c0bee61d7c4c8a82bd3d975cde5ae9de993c0c": "e0274dc3691c2ec7d3098d8412b59a7c",
".git/objects/be/5fa4d71500842077a9637515b1a5f3fa6ccaa9": "07c5259ba90e82ab48c0ee313a291123",
".git/objects/c0/2b730ef95da691eecb2444a99111a4e3e0af6f": "033331d69298d5ba5a8f01dd44e9e3f5",
".git/objects/c4/674e893ffc3e181a3693d3df8c3cd22424cf56": "b9f7505276e22e24b635521a8ffc2806",
".git/objects/c6/b657124b7ba440bc78dbb2accd34bd52b3ff30": "129c41ee62cb13480ae24f9c6e791cb7",
".git/objects/c7/fd7d86e171aa5a14bf2d5c21c1253b883bef89": "fe5a7e2c0c97b32cee59c0cfd5678d59",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/0d4a75e36f0affb3401021fc02c6dabfbf36d6": "34260737e7a5f61466fbb1e1645a9e73",
".git/ORIG_HEAD": "e50af25cfde7e761b2b4669a74082658",
".git/refs/heads/main": "eb00b80548c0923c075fad4ed0843f0b",
".git/refs/remotes/origin/main": "eb00b80548c0923c075fad4ed0843f0b",
"assets/AssetManifest.bin": "0b1b8fc51c8bb4a59474325fa71394c4",
"assets/AssetManifest.bin.json": "c27f34a830693aa128d237092a1bac49",
"assets/AssetManifest.json": "cc53044285060182cef3f41b591b115d",
"assets/assets/fonts/NotoKufiArabic-Light.ttf": "b41a7b2337420edbb9d7a67f2cce7dd7",
"assets/assets/images/dev_img.png": "da489668955701b7077d7266c74937c9",
"assets/assets/images/fast_type_icon.png": "1f8d9a7ac282ccbbec728460e7239191",
"assets/assets/images/pen_paper_icon.png": "71d72d337a0e944a41dd24a242987671",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/search2_icon.png": "8651a2ecb6962d7d03b9cc203c8d4f1f",
"assets/assets/images/search_icon.png": "ac22d6c0e6e5ef149c710855dce64fdc",
"assets/assets/images/tik_icon.png": "a49b9aa07c0a3ca5993d95f3966b51e1",
"assets/FontManifest.json": "99ebd9c74796f74d932528e9cdfe4fe6",
"assets/fonts/MaterialIcons-Regular.otf": "7809869ac262e1e7db103e68aaad8e98",
"assets/NOTICES": "f84c920c4c1e4aba8de647877e3c67fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a7f731c138fa8d6b31c29d1567afe8ac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "0c8d2937d4e257870c498167e9b05b84",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "dd85b644faffe150f99937593620e472",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "35f7e8e720da91cce949c39ff5dc5302",
"/": "35f7e8e720da91cce949c39ff5dc5302",
"main.dart.js": "a17df3e97df46d1437eacc525fcd82cb",
"manifest.json": "6e2a9f6b10578c671b5a9353e3cc2ce1",
"README.md": "741cb4948ec4baf80e0734bb2f105686",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
