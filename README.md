# CryptoBench.js

Benchmarks for javascript crypto libraries.

[![Build Status](https://travis-ci.org/mnasyrov/cryptobench-js.svg?branch=master)](https://travis-ci.org/mnasyrov/cryptobench-js)

The subject of tests are client-side javascript libraries under various environments:
* node.js;
* browsers;
* cordova applications: Android and iOS.

Benchmarks tests performance of encryption and decryption of 1Mb random data.


## Testbed

Libraries:
 * [asmcrypto.js](https://github.com/vibornoff/asmcrypto.js) (0.0.11)
 * [crypto-js](https://github.com/brix/crypto-js) (3.1.9-1)
 * [forge](https://github.com/digitalbazaar/forge) (0.7.1)
 * [libsodium.js](https://github.com/jedisct1/libsodium.js) (0.7.2)
 * [js-nacl](https://github.com/tonyg/js-nacl) (1.2.2)
 * [sjcl](https://github.com/bitwiseshiftleft/sjcl) (1.0.7)
 * [tweetnacl.js](https://github.com/dchest/tweetnacl-js) (1.0.0)
 * [webcrypto-liner](https://github.com/PeculiarVentures/webcrypto-liner) (0.1.27)

Where is possible WebCrypto API is tested as a reference.
A fallback to `webcrypto-liner`/`asmcrypto.js` is used if a native implementation is not available.


## Running benchmarks

Clone the repository and install dependencies:

    npm install

For testing in node.js just run

    npm start


For testing in a browser run `npm run serve` and open a test page [http://localhost:8080](http://localhost:8080).


### Android

Android SDK must be installed before and an emulator/device should be running.

    npm run android


### iOS

Xcode must be installed before.

    npm run ios


## Benchmark results

Test machine: 2.2 GHz IntelCore i7, 16GB of 1600 MHz DDR3


### Desktop

Node.js v8.3.0

    Benchmark: Encrypting 2 Kb of random data ...
    * asmcrypto.js (AES-GCM) x 4,209 ops/sec ±1.22% (82 runs sampled)
    * crypto-js (AES) x 1,667 ops/sec ±2.62% (79 runs sampled)
    * forge (AES-GCM) x 4,482 ops/sec ±1.52% (80 runs sampled)
    * js-nacl.js x 9,039 ops/sec ±1.46% (80 runs sampled)
    * libsodium.js x 32,973 ops/sec ±1.87% (83 runs sampled)
    * SJCL (AES-GCM) x 944 ops/sec ±1.26% (83 runs sampled)
    * tweetnacl.js x 27,543 ops/sec ±4.18% (74 runs sampled)
    * WebCrypto API (AES-GCM) x 22,269 ops/sec ±1.33% (79 runs sampled)
    Fastest is libsodium.js
    
    Benchmark: Decrypting 2 Kb of random data ...
    * asmcrypto.js (AES-GCM) x 4,174 ops/sec ±1.28% (84 runs sampled)
    * crypto-js (AES) x 2,551 ops/sec ±2.27% (79 runs sampled)
    * forge (AES-GCM) x 11,164 ops/sec ±1.37% (79 runs sampled)
    * js-nacl.js x 9,513 ops/sec ±1.14% (85 runs sampled)
    * libsodium.js x 33,812 ops/sec ±1.46% (84 runs sampled)
    * SJCL (AES-GCM) x 945 ops/sec ±1.28% (86 runs sampled)
    * tweetnacl.js x 23,271 ops/sec ±4.76% (72 runs sampled)
    * WebCrypto API (AES-GCM) x 22,112 ops/sec ±1.23% (76 runs sampled)
    Fastest is libsodium.js
    
    Benchmark: Encrypting 1 Mb of random data ...
    * asmcrypto.js (AES-GCM) x 9.08 ops/sec ±1.59% (26 runs sampled)
    * crypto-js (AES) x 4.85 ops/sec ±5.79% (16 runs sampled)
    * forge (AES-GCM) x 7.49 ops/sec ±6.59% (21 runs sampled)
    * js-nacl.js x 19.43 ops/sec ±2.11% (35 runs sampled)
    * libsodium.js x 77.63 ops/sec ±1.80% (64 runs sampled)
    * SJCL (AES-GCM) x 1.82 ops/sec ±4.67% (9 runs sampled)
    * tweetnacl.js x 69.63 ops/sec ±5.11% (58 runs sampled)
    * WebCrypto API (AES-GCM) x 395 ops/sec ±1.14% (49 runs sampled)
    Fastest is WebCrypto API (AES-GCM)
    
    Benchmark: Decrypting 1 Mb of random data ...
    * asmcrypto.js (AES-GCM) x 8.89 ops/sec ±1.91% (26 runs sampled)
    * crypto-js (AES) x 8.33 ops/sec ±5.16% (25 runs sampled)
    * forge (AES-GCM) x 12,328 ops/sec ±1.31% (81 runs sampled)
    * js-nacl.js x 19.70 ops/sec ±1.29% (36 runs sampled)
    * libsodium.js x 78.47 ops/sec ±1.33% (64 runs sampled)
    * SJCL (AES-GCM) x 1.92 ops/sec ±2.54% (9 runs sampled)
    * tweetnacl.js x 71.10 ops/sec ±5.48% (59 runs sampled)
    * WebCrypto API (AES-GCM) x 468 ops/sec ±2.35% (65 runs sampled)
    Fastest is forge (AES-GCM)


Google Chrome:

    Chrome 58.0.3029.110 on OS X 10.12.4 64-bit

    Benchmark: Encrypting of 1Mb random data ...
    * asmcrypto.js (AES-GCM) x 8.49 ops/sec ±6.89% (26 runs sampled)
    * js-nacl.js x 15.08 ops/sec ±5.25% (29 runs sampled)
    * libsodium.js x 9.62 ops/sec ±15.04% (27 runs sampled)
    * SJCL (AES-GCM) x 1.00 ops/sec ±1.94% (7 runs sampled)
    * tweetnacl.js x 70.68 ops/sec ±7.52% (47 runs sampled)
    * WebCrypto API (AES-GCM) x 567 ops/sec ±4.88% (55 runs sampled)
    Fastest is WebCrypto API (AES-GCM)

    Benchmark: Decrypting of 1Mb random data ...
    * asmcrypto.js (AES-GCM) x 8.14 ops/sec ±12.40% (24 runs sampled)
    * js-nacl.js x 15.49 ops/sec ±8.77% (30 runs sampled)
    * libsodium.js x 11.20 ops/sec ±2.03% (31 runs sampled)
    * SJCL (AES-GCM) x 1.00 ops/sec ±1.44% (7 runs sampled)
    * tweetnacl.js x 75.67 ops/sec ±1.25% (49 runs sampled)
    * WebCrypto API (AES-GCM) x 523 ops/sec ±7.18% (52 runs sampled)
    Fastest is WebCrypto API (AES-GCM)


Safari:

    Safari 10.1 on OS X 10.12.4

    Benchmark: Encrypting of 1Mb random data ...
    * asmcrypto.js (AES-GCM) x 8.65 ops/sec ±0.86% (25 runs sampled)
    * js-nacl.js x 29.49 ops/sec ±0.87% (39 runs sampled)
    * libsodium.js x 28.24 ops/sec ±0.49% (38 runs sampled)
    * SJCL (AES-GCM) x 0.28 ops/sec ±59.33% (5 runs sampled)
    * tweetnacl.js x 80.30 ops/sec ±2.60% (52 runs sampled)
    * WebCrypto API (AES-GCM) x 8.38 ops/sec ±2.57% (44 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Decrypting of 1Mb random data ...
    * asmcrypto.js (AES-GCM) x 8.51 ops/sec ±4.36% (25 runs sampled)
    * js-nacl.js x 29.18 ops/sec ±0.75% (39 runs sampled)
    * libsodium.js x 25.84 ops/sec ±5.68% (35 runs sampled)
    * SJCL (AES-GCM) x 0.31 ops/sec ±22.30% (5 runs sampled)
    * tweetnacl.js x 77.86 ops/sec ±3.42% (50 runs sampled)
    * WebCrypto API (AES-GCM) x 8.39 ops/sec ±1.96% (43 runs sampled)
    Fastest is tweetnacl.js


### Android (device)

Android 6, Xaomi Redmi Note 4

Cordova app:

    Android Browser 4.0 (like Chrome 58.0.3029.83) on Android 6.0

    Benchmark: Encrypting of 1Mb random data ...
    * asmcrypto.js (AES-GCM) x 4.32 ops/sec ±2.72% (15 runs sampled)
    * js-nacl.js x 4.95 ops/sec ±5.46% (16 runs sampled)
    * libsodium.js x 3.69 ops/sec ±4.79% (13 runs sampled)
    * SJCL (AES-GCM) x 0.33 ops/sec ±1.78% (5 runs sampled)
    * tweetnacl.js x 26.56 ops/sec ±0.54% (33 runs sampled)
    * WebCrypto API (AES-GCM) x 28.09 ops/sec ±13.65% (34 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Decrypting of 1Mb random data ...
    * asmcrypto.js (AES-GCM) x 4.30 ops/sec ±0.31% (15 runs sampled)
    * js-nacl.js x 5.18 ops/sec ±1.23% (17 runs sampled)
    * libsodium.js x 3.85 ops/sec ±0.33% (14 runs sampled)
    * SJCL (AES-GCM) x 0.33 ops/sec ±2.67% (5 runs sampled)
    * tweetnacl.js x 26.63 ops/sec ±0.50% (33 runs sampled)
    * WebCrypto API (AES-GCM) x 32.55 ops/sec ±4.14% (35 runs sampled)
    Fastest is WebCrypto API (AES-GCM)


Chrome Mobile:

    Chrome Mobile 58.0.3029.83 on Android 6.0

    Benchmark: Encrypting of 1Mb random data ...
    * asmcrypto.js (AES-GCM) x 2.94 ops/sec ±7.32% (11 runs sampled)
    * js-nacl.js x 3.69 ops/sec ±6.49% (14 runs sampled)
    * libsodium.js x 1.94 ops/sec ±5.63% (9 runs sampled)
    * SJCL (AES-GCM) x 0.27 ops/sec ±0.81% (5 runs sampled)
    * tweetnacl.js x 27.90 ops/sec ±2.06% (35 runs sampled)
    * WebCrypto API (AES-GCM) x 2.92 ops/sec ±6.46% (19 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Decrypting of 1Mb random data ...
    * asmcrypto.js (AES-GCM) x 2.64 ops/sec ±6.50% (11 runs sampled)
    * js-nacl.js x 3.92 ops/sec ±2.23% (14 runs sampled)
    * libsodium.js x 2.05 ops/sec ±0.22% (10 runs sampled)
    * SJCL (AES-GCM) x 0.26 ops/sec ±1.80% (5 runs sampled)
    * tweetnacl.js x 27.72 ops/sec ±3.30% (36 runs sampled)
    * WebCrypto API (AES-GCM) x 3.01 ops/sec ±2.86% (19 runs sampled)
    Fastest is tweetnacl.js


### Android (emulator)

Android 5, android-21:

    sdkmanager "platforms;android-21" "system-images;android-21;google_apis;x86"
    avdmanager -v create avd --name nexus4 --device "Nexus 4" --package "system-images;android-21;google_apis;x86" --abi google_apis/x86 --sdcard 200M
    cd $ANDROID_HOME/tools
    emulator @nexus4 -skin 768x1280 -gpu host


Cordova app:

    Android Browser 4.0 (like Chrome 37.0.0.0) on Android 5.0.2

    Benchmark: Encrypting of 1Mb random data ...
    * asmcrypto.js (AES-GCM) x 4.86 ops/sec ±2.49% (16 runs sampled)
    * js-nacl.js x 8.41 ops/sec ±11.08% (24 runs sampled)
    * libsodium.js x 3.94 ops/sec ±7.20% (14 runs sampled)
    * SJCL (AES-GCM) x 0.81 ops/sec ±14.34% (7 runs sampled)
    * tweetnacl.js x 49.72 ops/sec ±7.91% (41 runs sampled)
    x WebCrypto API (AES-GCM) x 0.00 ops/sec ±0.00% (0 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Decrypting of 1Mb random data ...
    * asmcrypto.js (AES-GCM) x 5.18 ops/sec ±4.70% (17 runs sampled)
    * js-nacl.js x 10.19 ops/sec ±2.17% (28 runs sampled)
    * libsodium.js x 4.21 ops/sec ±14.58% (14 runs sampled)
    * SJCL (AES-GCM) x 0.72 ops/sec ±8.07% (6 runs sampled)
    * tweetnacl.js x 62.49 ops/sec ±1.76% (44 runs sampled)
    x WebCrypto API (AES-GCM) x 0.00 ops/sec ±0.00% (0 runs sampled)
    Fastest is tweetnacl.js


### iOS (emulator)

Cordova app:

    Safari 8+ on Apple iPhone (iOS 10.3)

    Benchmark: Encrypting of 1Mb random data ...
    * asmcrypto.js (AES-GCM) x 7.61 ops/sec ±15.57% (23 runs sampled)
    * js-nacl.js x 22.43 ops/sec ±7.93% (40 runs sampled)
    * libsodium.js x 21.86 ops/sec ±11.19% (42 runs sampled)
    * SJCL (AES-GCM) x 0.49 ops/sec ±17.06% (6 runs sampled)
    * tweetnacl.js x 46.85 ops/sec ±10.28% (40 runs sampled)
    * WebCrypto API (AES-GCM) x 8.39 ops/sec ±9.41% (43 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Decrypting of 1Mb random data ...
    * asmcrypto.js (AES-GCM) x 9.05 ops/sec ±1.09% (26 runs sampled)
    * js-nacl.js x 20.87 ops/sec ±13.39% (37 runs sampled)
    * libsodium.js x 23.84 ops/sec ±0.87% (42 runs sampled)
    * SJCL (AES-GCM) x 0.51 ops/sec ±9.44% (6 runs sampled)
    * tweetnacl.js x 52.42 ops/sec ±0.93% (45 runs sampled)
    * WebCrypto API (AES-GCM) x 8.06 ops/sec ±8.74% (41 runs sampled)
    Fastest is tweetnacl.js


## Useful links

* [JavaScript Crypto Libraries](https://gist.github.com/jo/8619441) by [Johannes Jörg Schmidt](https://github.com/jo)
* [JavaScript Crypto Libraries (enhanced list)](https://github.com/gabrielizalo/JavaScript-Crypto-Libraries) by [Gabriel Porras](https://github.com/gabrielizalo)

