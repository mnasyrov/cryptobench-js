## Benchmark 2018-02-16

- Machine: 2.2 GHz IntelCore i7, 16GB of 1600 MHz DDR3

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


### Node.js

    node.js 8.3.0 on OS X 10.13.1 64-bit

    Benchmark: Encrypting 2 Kb of random data ...
    * asmcrypto.js (AES-GCM) x 4,117 ops/sec ±1.35% (81 runs sampled)
    * crypto-js (AES) x 1,679 ops/sec ±2.16% (82 runs sampled)
    * forge (AES-GCM) x 4,413 ops/sec ±1.10% (84 runs sampled)
    * js-nacl.js x 9,205 ops/sec ±1.34% (81 runs sampled)
    * libsodium.js x 33,862 ops/sec ±1.59% (79 runs sampled)
    * SJCL (AES-GCM) x 959 ops/sec ±1.68% (84 runs sampled)
    * tweetnacl.js x 26,552 ops/sec ±4.28% (74 runs sampled)
    * WebCrypto API (AES-GCM) x 20,790 ops/sec ±3.82% (78 runs sampled)
    Fastest is libsodium.js

    Benchmark: Decrypting 2 Kb of random data ...
    * asmcrypto.js (AES-GCM) x 4,007 ops/sec ±1.48% (84 runs sampled)
    * crypto-js (AES) x 2,308 ops/sec ±2.43% (78 runs sampled)
    * forge (AES-GCM) x 4,042 ops/sec ±1.13% (81 runs sampled)
    * js-nacl.js x 8,801 ops/sec ±0.88% (80 runs sampled)
    * libsodium.js x 32,709 ops/sec ±1.56% (83 runs sampled)
    * SJCL (AES-GCM) x 921 ops/sec ±1.44% (84 runs sampled)
    * tweetnacl.js x 22,811 ops/sec ±3.95% (74 runs sampled)
    * WebCrypto API (AES-GCM) x 21,516 ops/sec ±2.11% (78 runs sampled)
    Fastest is libsodium.js

    Benchmark: Encrypting 1 Mb of random data ...
    * asmcrypto.js (AES-GCM) x 8.94 ops/sec ±1.16% (26 runs sampled)
    * crypto-js (AES) x 4.70 ops/sec ±6.31% (16 runs sampled)
    * forge (AES-GCM) x 7.50 ops/sec ±5.93% (21 runs sampled)
    * js-nacl.js x 18.93 ops/sec ±1.46% (35 runs sampled)
    * libsodium.js x 78.14 ops/sec ±1.62% (64 runs sampled)
    * SJCL (AES-GCM) x 1.87 ops/sec ±3.17% (9 runs sampled)
    * tweetnacl.js x 66.27 ops/sec ±4.86% (56 runs sampled)
    * WebCrypto API (AES-GCM) x 394 ops/sec ±2.17% (58 runs sampled)
    Fastest is WebCrypto API (AES-GCM)

    Benchmark: Decrypting 1 Mb of random data ...
    * asmcrypto.js (AES-GCM) x 8.31 ops/sec ±1.60% (25 runs sampled)
    * crypto-js (AES) x 7.63 ops/sec ±6.51% (23 runs sampled)
    * forge (AES-GCM) x 7.09 ops/sec ±7.93% (21 runs sampled)
    * js-nacl.js x 17.63 ops/sec ±1.72% (34 runs sampled)
    * libsodium.js x 72.34 ops/sec ±1.66% (60 runs sampled)
    * SJCL (AES-GCM) x 1.70 ops/sec ±3.61% (9 runs sampled)
    * tweetnacl.js x 64.18 ops/sec ±5.73% (59 runs sampled)
    * WebCrypto API (AES-GCM) x 567 ops/sec ±3.39% (44 runs sampled)
    Fastest is WebCrypto API (AES-GCM)


### Google Chrome

    Chrome 62.0.3202.94 on OS X 10.13.1 64-bit

    Benchmark: Encrypting 2 Kb of random data ...
    * asmcrypto.js (AES-GCM) x 4,429 ops/sec ±1.88% (27 runs sampled)
    * crypto-js (AES) x 1,569 ops/sec ±2.61% (57 runs sampled)
    * forge (AES-GCM) x 3,536 ops/sec ±1.38% (58 runs sampled)
    * js-nacl.js x 22,347 ops/sec ±1.13% (63 runs sampled)
    * libsodium.js x 31,475 ops/sec ±1.76% (62 runs sampled)
    * SJCL (AES-GCM) x 646 ops/sec ±0.80% (61 runs sampled)
    * tweetnacl.js x 35,300 ops/sec ±1.94% (58 runs sampled)
    * WebCrypto API (AES-GCM) x 7,454 ops/sec ±1.35% (56 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Decrypting 2 Kb of random data ...
    * asmcrypto.js (AES-GCM) x 4,519 ops/sec ±1.56% (60 runs sampled)
    * crypto-js (AES) x 2,645 ops/sec ±2.35% (59 runs sampled)
    * forge (AES-GCM) x 3,322 ops/sec ±1.03% (59 runs sampled)
    * js-nacl.js x 21,506 ops/sec ±1.28% (59 runs sampled)
    * libsodium.js x 30,936 ops/sec ±1.22% (62 runs sampled)
    * SJCL (AES-GCM) x 650 ops/sec ±0.83% (62 runs sampled)
    * tweetnacl.js x 33,011 ops/sec ±1.23% (58 runs sampled)
    * WebCrypto API (AES-GCM) x 7,330 ops/sec ±1.42% (56 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Encrypting 1 Mb of random data ...
    * asmcrypto.js (AES-GCM) x 9.32 ops/sec ±1.62% (27 runs sampled)
    * crypto-js (AES) x 4.27 ops/sec ±6.15% (15 runs sampled)
    * forge (AES-GCM) x 5.93 ops/sec ±5.36% (19 runs sampled)
    * js-nacl.js x 43.50 ops/sec ±1.77% (45 runs sampled)
    * libsodium.js x 64.73 ops/sec ±1.74% (48 runs sampled)
    * SJCL (AES-GCM) x 1.25 ops/sec ±2.07% (8 runs sampled)
    * tweetnacl.js x 72.06 ops/sec ±3.50% (47 runs sampled)
    * WebCrypto API (AES-GCM) x 439 ops/sec ±5.75% (43 runs sampled)
    Fastest is WebCrypto API (AES-GCM)

    Benchmark: Decrypting 1 Mb of random data ...
    * asmcrypto.js (AES-GCM) x 8.92 ops/sec ±1.89% (26 runs sampled)
    * crypto-js (AES) x 8.45 ops/sec ±4.18% (25 runs sampled)
    * forge (AES-GCM) x 5.96 ops/sec ±7.15% (18 runs sampled)
    * js-nacl.js x 43.72 ops/sec ±1.69% (45 runs sampled)
    * libsodium.js x 66.40 ops/sec ±1.43% (50 runs sampled)
    * SJCL (AES-GCM) x 1.22 ops/sec ±3.25% (8 runs sampled)
    * tweetnacl.js x 74.39 ops/sec ±2.77% (48 runs sampled)
    * WebCrypto API (AES-GCM) x 453 ops/sec ±5.83% (44 runs sampled)
    Fastest is WebCrypto API (AES-GCM)


### Safari

    Safari 11.0.1 on OS X 10.13.1

    Benchmark: Encrypting 2 Kb of random data ...
    * asmcrypto.js (AES-GCM) x 4,976 ops/sec ±1.53% (60 runs sampled)
    * crypto-js (AES) x 3,673 ops/sec ±2.20% (60 runs sampled)
    * forge (AES-GCM) x 3,488 ops/sec ±3.67% (41 runs sampled)
    * js-nacl.js x 14,348 ops/sec ±0.92% (61 runs sampled)
    * libsodium.js x 22,875 ops/sec ±0.94% (61 runs sampled)
    * SJCL (AES-GCM) x 317 ops/sec ±12.37% (24 runs sampled)
    * tweetnacl.js x 20,119 ops/sec ±5.01% (34 runs sampled)
    * WebCrypto API (AES-GCM) x 4,618 ops/sec ±2.46% (54 runs sampled)
    Fastest is libsodium.js

    Benchmark: Decrypting 2 Kb of random data ...
    * asmcrypto.js (AES-GCM) x 4,552 ops/sec ±1.30% (59 runs sampled)
    * crypto-js (AES) x 6,609 ops/sec ±2.03% (37 runs sampled)
    * forge (AES-GCM) x 3,197 ops/sec ±2.50% (21 runs sampled)
    * js-nacl.js x 14,178 ops/sec ±0.94% (63 runs sampled)
    * libsodium.js x 23,218 ops/sec ±1.49% (61 runs sampled)
    * SJCL (AES-GCM) x 267 ops/sec ±1.23% (57 runs sampled)
    * tweetnacl.js x 31,428 ops/sec ±1.57% (57 runs sampled)
    * WebCrypto API (AES-GCM) x 5,283 ops/sec ±0.91% (52 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Encrypting 1 Mb of random data ...
    * asmcrypto.js (AES-GCM) x 10.57 ops/sec ±1.81% (30 runs sampled)
    * crypto-js (AES) x 7.74 ops/sec ±4.11% (24 runs sampled)
    * forge (AES-GCM) x 5.02 ops/sec ±5.17% (17 runs sampled)
    * js-nacl.js x 27.23 ops/sec ±2.09% (37 runs sampled)
    * libsodium.js x 52.50 ops/sec ±1.17% (46 runs sampled)
    * SJCL (AES-GCM) x 0.55 ops/sec ±4.61% (6 runs sampled)
    * tweetnacl.js x 67.96 ops/sec ±7.90% (43 runs sampled)
    * WebCrypto API (AES-GCM) x 908 ops/sec ±1.57% (59 runs sampled)
    Fastest is WebCrypto API (AES-GCM)

    Benchmark: Decrypting 1 Mb of random data ...
    * asmcrypto.js (AES-GCM) x 10.17 ops/sec ±2.06% (29 runs sampled)
    * crypto-js (AES) x 18.24 ops/sec ±2.51% (34 runs sampled)
    * forge (AES-GCM) x 7.30 ops/sec ±6.96% (21 runs sampled)
    * js-nacl.js x 29.77 ops/sec ±0.81% (40 runs sampled)
    * libsodium.js x 56.15 ops/sec ±1.26% (48 runs sampled)
    * SJCL (AES-GCM) x 0.55 ops/sec ±3.97% (6 runs sampled)
    * tweetnacl.js x 85.91 ops/sec ±1.86% (51 runs sampled)
    * WebCrypto API (AES-GCM) x 1,000 ops/sec ±0.38% (60 runs sampled)
    Fastest is WebCrypto API (AES-GCM)


### Firefox

    Firefox 57.0 on OS X 10.13

    Benchmark: Encrypting 2 Kb of random data ...
    * asmcrypto.js (AES-GCM) x 5,116 ops/sec ±2.17% (30 runs sampled)
    * crypto-js (AES) x 1,719 ops/sec ±4.91% (53 runs sampled)
    * forge (AES-GCM) x 2,912 ops/sec ±5.09% (52 runs sampled)
    * js-nacl.js x 15,831 ops/sec ±2.07% (57 runs sampled)
    * libsodium.js x 17,696 ops/sec ±3.25% (56 runs sampled)
    * SJCL (AES-GCM) x 644 ops/sec ±1.92% (59 runs sampled)
    * tweetnacl.js x 22,745 ops/sec ±8.07% (47 runs sampled)
    * WebCrypto API (AES-GCM) x 3,962 ops/sec ±6.67% (53 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Decrypting 2 Kb of random data ...
    * asmcrypto.js (AES-GCM) x 5,193 ops/sec ±1.72% (58 runs sampled)
    * crypto-js (AES) x 2,193 ops/sec ±4.06% (55 runs sampled)
    * forge (AES-GCM) x 3,017 ops/sec ±4.88% (55 runs sampled)
    * js-nacl.js x 16,197 ops/sec ±2.75% (56 runs sampled)
    * libsodium.js x 14,936 ops/sec ±3.74% (54 runs sampled)
    * SJCL (AES-GCM) x 525 ops/sec ±4.43% (53 runs sampled)
    * tweetnacl.js x 17,521 ops/sec ±9.47% (46 runs sampled)
    * WebCrypto API (AES-GCM) x 3,916 ops/sec ±7.52% (54 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Encrypting 1 Mb of random data ...
    * asmcrypto.js (AES-GCM) x 10.37 ops/sec ±1.56% (30 runs sampled)
    * crypto-js (AES) x 6.22 ops/sec ±3.67% (20 runs sampled)
    * forge (AES-GCM) x 8.70 ops/sec ±4.47% (26 runs sampled)
    * js-nacl.js x 36.66 ops/sec ±0.95% (48 runs sampled)
    * libsodium.js x 42.54 ops/sec ±2.90% (45 runs sampled)
    * SJCL (AES-GCM) x 1.24 ops/sec ±7.57% (7 runs sampled)
    * tweetnacl.js x 65.73 ops/sec ±3.04% (49 runs sampled)
    * WebCrypto API (AES-GCM) x 156 ops/sec ±6.00% (55 runs sampled)
    Fastest is WebCrypto API (AES-GCM)

    Benchmark: Decrypting 1 Mb of random data ...
    * asmcrypto.js (AES-GCM) x 11.03 ops/sec ±1.92% (31 runs sampled)
    * crypto-js (AES) x 9.32 ops/sec ±5.08% (27 runs sampled)
    * forge (AES-GCM) x 8.73 ops/sec ±4.52% (26 runs sampled)
    * js-nacl.js x 37.62 ops/sec ±1.17% (49 runs sampled)
    * libsodium.js x 43.38 ops/sec ±2.24% (46 runs sampled)
    * SJCL (AES-GCM) x 1.30 ops/sec ±1.33% (8 runs sampled)
    * tweetnacl.js x 67.49 ops/sec ±2.83% (50 runs sampled)
    * WebCrypto API (AES-GCM) x 167 ops/sec ±4.91% (58 runs sampled)
    Fastest is WebCrypto API (AES-GCM)
