## Benchmark 2020-05-15

- Machine: 2.2 GHz IntelCore i7, 16GB of 1600 MHz DDR3

Libraries:
 * [asmcrypto.js](https://github.com/vibornoff/asmcrypto.js) (2.3.2)
 * [crypto-js](https://github.com/brix/crypto-js) (4.0.0)
 * [forge](https://github.com/digitalbazaar/forge) (0.9.1)
 * [libsodium.js](https://github.com/jedisct1/libsodium.js) (0.7.6)
 * [js-nacl](https://github.com/tonyg/js-nacl) (1.3.2)
 * [sjcl](https://github.com/bitwiseshiftleft/sjcl) (1.0.8)
 * [tweetnacl.js](https://github.com/dchest/tweetnacl-js) (1.0.3)
 * [webcrypto-liner](https://github.com/PeculiarVentures/webcrypto-liner) (1.2.0)

Where is possible WebCrypto API is tested as a reference.
A fallback to `webcrypto-liner`/`asmcrypto.js` is used if a native implementation is not available.


### Node.js

    Node.js 13.12.0 on Darwin 64-bit

    Benchmark: Encrypting 2 Kb of random data ...
    * asmcrypto.js (AES-CBC) x 4,036 ops/sec ±0.80% (86 runs sampled)
    * asmcrypto.js (AES-GCM) x 2,304 ops/sec ±0.49% (87 runs sampled)
    * crypto-js (AES-CBC) x 2,201 ops/sec ±0.66% (85 runs sampled)
    * forge (AES-CBC) x 14,976 ops/sec ±0.46% (87 runs sampled)
    * forge (AES-GCM) x 4,646 ops/sec ±0.48% (86 runs sampled)
    * js-nacl.js x 26,758 ops/sec ±0.50% (87 runs sampled)
    * libsodium.js x 26,499 ops/sec ±0.42% (89 runs sampled)
    * SJCL (AES-CCM) x 3,129 ops/sec ±0.30% (88 runs sampled)
    * SJCL (AES-GCM) x 804 ops/sec ±0.24% (88 runs sampled)
    * tweetnacl.js x 37,966 ops/sec ±0.58% (88 runs sampled)
    * WebCrypto API (AES-CBC) x 11,682 ops/sec ±5.28% (71 runs sampled)
    * WebCrypto API (AES-GCM) x 11,035 ops/sec ±6.01% (69 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Decrypting 2 Kb of random data ...
    * asmcrypto.js (AES-CBC) x 4,049 ops/sec ±1.90% (85 runs sampled)
    * asmcrypto.js (AES-GCM) x 2,308 ops/sec ±0.79% (87 runs sampled)
    * crypto-js (AES-CBC) x 3,101 ops/sec ±0.45% (88 runs sampled)
    * forge (AES-CBC) x 9,648 ops/sec ±0.31% (88 runs sampled)
    * forge (AES-GCM) x 4,305 ops/sec ±0.44% (88 runs sampled)
    * js-nacl.js x 24,975 ops/sec ±0.66% (90 runs sampled)
    * libsodium.js x 25,864 ops/sec ±0.40% (91 runs sampled)
    * SJCL (AES-CCM) x 3,109 ops/sec ±0.43% (91 runs sampled)
    * SJCL (AES-GCM) x 772 ops/sec ±0.32% (88 runs sampled)
    * tweetnacl.js x 36,578 ops/sec ±0.85% (89 runs sampled)
    * WebCrypto API (AES-CBC) x 11,682 ops/sec ±5.86% (72 runs sampled)
    * WebCrypto API (AES-GCM) x 11,208 ops/sec ±6.56% (71 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Encrypting 1 Mb of random data ...
    * asmcrypto.js (AES-CBC) x 49.78 ops/sec ±0.70% (64 runs sampled)
    * asmcrypto.js (AES-GCM) x 9.68 ops/sec ±0.26% (28 runs sampled)
    * crypto-js (AES-CBC) x 6.40 ops/sec ±0.65% (20 runs sampled)
    * forge (AES-CBC) x 11.97 ops/sec ±7.95% (34 runs sampled)
    * forge (AES-GCM) x 8.69 ops/sec ±0.95% (25 runs sampled)
    * js-nacl.js x 56.64 ops/sec ±0.27% (71 runs sampled)
    * libsodium.js x 57.09 ops/sec ±0.38% (71 runs sampled)
    * SJCL (AES-CCM) x 5.44 ops/sec ±0.63% (18 runs sampled)
    * SJCL (AES-GCM) x 1.51 ops/sec ±2.54% (8 runs sampled)
    * tweetnacl.js x 82.93 ops/sec ±1.04% (67 runs sampled)
    * WebCrypto API (AES-CBC) x 196 ops/sec ±10.40% (55 runs sampled)
    * WebCrypto API (AES-GCM) x 311 ops/sec ±11.66% (46 runs sampled)
    Fastest is WebCrypto API (AES-GCM)

    Benchmark: Decrypting 1 Mb of random data ...
    * asmcrypto.js (AES-CBC) x 51.34 ops/sec ±0.60% (64 runs sampled)
    * asmcrypto.js (AES-GCM) x 9.96 ops/sec ±0.33% (29 runs sampled)
    * crypto-js (AES-CBC) x 10.53 ops/sec ±1.24% (29 runs sampled)
    * forge (AES-CBC) x 14.11 ops/sec ±2.09% (37 runs sampled)
    * forge (AES-GCM) x 8.75 ops/sec ±7.66% (26 runs sampled)
    * js-nacl.js x 58.45 ops/sec ±0.71% (60 runs sampled)
    * libsodium.js x 58.90 ops/sec ±0.46% (59 runs sampled)
    * SJCL (AES-CCM) x 5.94 ops/sec ±0.50% (19 runs sampled)
    * SJCL (AES-GCM) x 1.53 ops/sec ±2.37% (8 runs sampled)
    * tweetnacl.js x 85.37 ops/sec ±0.84% (69 runs sampled)
    * WebCrypto API (AES-CBC) x 367 ops/sec ±11.73% (50 runs sampled)
    * WebCrypto API (AES-GCM) x 291 ops/sec ±9.66% (45 runs sampled)
    Fastest is WebCrypto API (AES-CBC)

### Google Chrome

    Chrome 81.0.4044.138 on OS X 10.15.3 64-bit

    Benchmark: Encrypting 2 Kb of random data ...
    * asmcrypto.js (AES-CBC) x 3,277 ops/sec ±2.99% (52 runs sampled)
    * asmcrypto.js (AES-GCM) x 2,136 ops/sec ±1.07% (63 runs sampled)
    * crypto-js (AES-CBC) x 2,153 ops/sec ±1.00% (61 runs sampled)
    * forge (AES-CBC) x 13,750 ops/sec ±0.58% (58 runs sampled)
    * forge (AES-GCM) x 3,857 ops/sec ±0.53% (62 runs sampled)
    * js-nacl.js x 24,270 ops/sec ±0.56% (62 runs sampled)
    * libsodium.js x 24,052 ops/sec ±0.47% (63 runs sampled)
    * SJCL (AES-CCM) x 3,073 ops/sec ±0.44% (63 runs sampled)
    * SJCL (AES-GCM) x 568 ops/sec ±0.31% (63 runs sampled)
    * tweetnacl.js x 34,495 ops/sec ±0.53% (63 runs sampled)
    * WebCrypto API (AES-CBC) x 11,432 ops/sec ±2.28% (55 runs sampled)
    * WebCrypto API (AES-GCM) x 11,109 ops/sec ±2.75% (54 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Decrypting 2 Kb of random data ...
    * asmcrypto.js (AES-CBC) x 3,546 ops/sec ±1.92% (22 runs sampled)
    * asmcrypto.js (AES-GCM) x 2,127 ops/sec ±1.41% (60 runs sampled)
    * crypto-js (AES-CBC) x 2,975 ops/sec ±0.66% (60 runs sampled)
    * forge (AES-CBC) x 10,198 ops/sec ±0.75% (59 runs sampled)
    * forge (AES-GCM) x 3,588 ops/sec ±0.49% (63 runs sampled)
    * js-nacl.js x 22,996 ops/sec ±0.49% (63 runs sampled)
    * libsodium.js x 23,840 ops/sec ±0.62% (64 runs sampled)
    * SJCL (AES-CCM) x 2,680 ops/sec ±0.96% (57 runs sampled)
    * SJCL (AES-GCM) x 133 ops/sec ±4.47% (21 runs sampled)
    * tweetnacl.js x 32,507 ops/sec ±0.46% (62 runs sampled)
    * WebCrypto API (AES-CBC) x 11,632 ops/sec ±2.39% (57 runs sampled)
    * WebCrypto API (AES-GCM) x 11,361 ops/sec ±2.30% (56 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Encrypting 1 Mb of random data ...
    * asmcrypto.js (AES-CBC) x 49.43 ops/sec ±0.37% (50 runs sampled)
    * asmcrypto.js (AES-GCM) x 9.81 ops/sec ±0.34% (28 runs sampled)
    * crypto-js (AES-CBC) x 6.65 ops/sec ±7.73% (21 runs sampled)
    * forge (AES-CBC) x 12.01 ops/sec ±7.25% (24 runs sampled)
    * forge (AES-GCM) x 8.63 ops/sec ±4.88% (25 runs sampled)
    * js-nacl.js x 53.13 ops/sec ±0.36% (45 runs sampled)
    * libsodium.js x 53.08 ops/sec ±0.35% (46 runs sampled)
    * SJCL (AES-CCM) x 4.30 ops/sec ±4.40% (15 runs sampled)
    * SJCL (AES-GCM) x 0.27 ops/sec ±0.16% (5 runs sampled)
    * tweetnacl.js x 74.06 ops/sec ±0.36% (53 runs sampled)
    * WebCrypto API (AES-CBC) x 198 ops/sec ±10.95% (39 runs sampled)
    * WebCrypto API (AES-GCM) x 477 ops/sec ±12.51% (37 runs sampled)
    Fastest is WebCrypto API (AES-GCM)

    Benchmark: Decrypting 1 Mb of random data ...
    * asmcrypto.js (AES-CBC) x 48.50 ops/sec ±0.81% (50 runs sampled)
    * asmcrypto.js (AES-GCM) x 9.87 ops/sec ±0.38% (28 runs sampled)
    * crypto-js (AES-CBC) x 9.97 ops/sec ±6.43% (28 runs sampled)
    * forge (AES-CBC) x 13.59 ops/sec ±4.13% (26 runs sampled)
    * forge (AES-GCM) x 8.39 ops/sec ±6.75% (25 runs sampled)
    * js-nacl.js x 52.93 ops/sec ±0.67% (46 runs sampled)
    * libsodium.js x 53.33 ops/sec ±0.30% (45 runs sampled)
    * SJCL (AES-CCM) x 5.14 ops/sec ±0.64% (17 runs sampled)
    * SJCL (AES-GCM) x 0.27 ops/sec ±0.41% (5 runs sampled)
    * tweetnacl.js x 74.18 ops/sec ±0.33% (54 runs sampled)
    * WebCrypto API (AES-CBC) x 515 ops/sec ±7.19% (40 runs sampled)
    * WebCrypto API (AES-GCM) x 430 ops/sec ±7.74% (31 runs sampled)
    Fastest is WebCrypto API (AES-CBC)


### Safari

    Safari 13.0.5 on OS X 10.15.3

    Benchmark: Encrypting 2 Kb of random data ...
    * asmcrypto.js (AES-CBC) x 12,701 ops/sec ±0.37% (65 runs sampled)
    * asmcrypto.js (AES-GCM) x 4,219 ops/sec ±0.59% (26 runs sampled)
    * crypto-js (AES-CBC) x 2,019 ops/sec ±0.48% (64 runs sampled)
    * forge (AES-CBC) x 4,081 ops/sec ±0.66% (65 runs sampled)
    * forge (AES-GCM) x 2,358 ops/sec ±0.57% (65 runs sampled)
    * js-nacl.js x 28,979 ops/sec ±0.23% (65 runs sampled)
    * libsodium.js x 27,025 ops/sec ±0.30% (63 runs sampled)
    * SJCL (AES-CCM) x 4,475 ops/sec ±1.41% (64 runs sampled)
    * SJCL (AES-GCM) x 317 ops/sec ±0.36% (60 runs sampled)
    * tweetnacl.js x 38,887 ops/sec ±0.26% (65 runs sampled)
    * WebCrypto API (AES-CBC) x 13,311 ops/sec ±1.18% (57 runs sampled)
    * WebCrypto API (AES-GCM) x 14,425 ops/sec ±0.85% (58 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Decrypting 2 Kb of random data ...
    * asmcrypto.js (AES-CBC) x 12,294 ops/sec ±0.85% (62 runs sampled)
    * asmcrypto.js (AES-GCM) x 4,313 ops/sec ±0.44% (63 runs sampled)
    * crypto-js (AES-CBC) x 7,133 ops/sec ±0.65% (40 runs sampled)
    * forge (AES-CBC) x 3,786 ops/sec ±1.88% (24 runs sampled)
    * forge (AES-GCM) x 2,359 ops/sec ±0.51% (63 runs sampled)
    * js-nacl.js x 28,247 ops/sec ±0.29% (64 runs sampled)
    * libsodium.js x 27,069 ops/sec ±0.42% (63 runs sampled)
    * SJCL (AES-CCM) x 4,387 ops/sec ±1.30% (26 runs sampled)
    * SJCL (AES-GCM) x 324 ops/sec ±0.51% (62 runs sampled)
    * tweetnacl.js x 38,227 ops/sec ±0.38% (65 runs sampled)
    * WebCrypto API (AES-CBC) x 16,079 ops/sec ±0.93% (55 runs sampled)
    * WebCrypto API (AES-GCM) x 15,528 ops/sec ±0.81% (60 runs sampled)
    Fastest is tweetnacl.js

    Benchmark: Encrypting 1 Mb of random data ...
    * asmcrypto.js (AES-CBC) x 65.00 ops/sec ±0.34% (54 runs sampled)
    * asmcrypto.js (AES-GCM) x 10.94 ops/sec ±0.42% (31 runs sampled)
    * crypto-js (AES-CBC) x 4.54 ops/sec ±6.04% (16 runs sampled)
    * forge (AES-CBC) x 6.66 ops/sec ±2.38% (21 runs sampled)
    * forge (AES-GCM) x 5.19 ops/sec ±1.32% (17 runs sampled)
    * js-nacl.js x 63.74 ops/sec ±0.54% (54 runs sampled)
    * libsodium.js x 60.64 ops/sec ±0.31% (51 runs sampled)
    * SJCL (AES-CCM) x 5.67 ops/sec ±5.61% (19 runs sampled)
    * SJCL (AES-GCM) x 0.65 ops/sec ±0.91% (6 runs sampled)
    * tweetnacl.js x 88.83 ops/sec ±0.54% (56 runs sampled)
    * WebCrypto API (AES-CBC) x 378 ops/sec ±1.55% (58 runs sampled)
    * WebCrypto API (AES-GCM) x 1,007 ops/sec ±0.30% (60 runs sampled)
    Fastest is WebCrypto API (AES-GCM)

    Benchmark: Decrypting 1 Mb of random data ...
    * asmcrypto.js (AES-CBC) x 63.97 ops/sec ±0.29% (54 runs sampled)
    * asmcrypto.js (AES-GCM) x 11.02 ops/sec ±0.36% (31 runs sampled)
    * crypto-js (AES-CBC) x 19.26 ops/sec ±4.62% (36 runs sampled)
    * forge (AES-CBC) x 7.02 ops/sec ±3.32% (22 runs sampled)
    * forge (AES-GCM) x 5.46 ops/sec ±0.50% (18 runs sampled)
    * js-nacl.js x 63.56 ops/sec ±0.47% (54 runs sampled)
    * libsodium.js x 60.40 ops/sec ±0.32% (51 runs sampled)
    * SJCL (AES-CCM) x 7.54 ops/sec ±3.97% (23 runs sampled)
    * SJCL (AES-GCM) x 0.65 ops/sec ±1.94% (6 runs sampled)
    * tweetnacl.js x 88.91 ops/sec ±0.37% (56 runs sampled)
    * WebCrypto API (AES-CBC) x 1,023 ops/sec ±33.22% (51 runs sampled)
    * WebCrypto API (AES-GCM) x 1,073 ops/sec ±2.37% (59 runs sampled)
    Fastest is WebCrypto API (AES-GCM)


### Firefox

    Firefox 76.0 on OS X 10.15

    Benchmark: Encrypting 2 Kb of random data ...
    * asmcrypto.js (AES-CBC) x 5,883 ops/sec ±1.65% (34 runs sampled)
    * asmcrypto.js (AES-GCM) x 2,982 ops/sec ±1.34% (20 runs sampled)
    * crypto-js (AES-CBC) x 3,135 ops/sec ±1.03% (64 runs sampled)
    * forge (AES-CBC) x 11,007 ops/sec ±2.26% (63 runs sampled)
    * forge (AES-GCM) x 3,075 ops/sec ±0.57% (63 runs sampled)
    * js-nacl.js x 26,281 ops/sec ±2.76% (59 runs sampled)
    * libsodium.js x 21,836 ops/sec ±0.58% (63 runs sampled)
    * SJCL (AES-CCM) x 2,192 ops/sec ±2.25% (61 runs sampled)
    * SJCL (AES-GCM) x 708 ops/sec ±1.13% (62 runs sampled)
    * tweetnacl.js x 19,726 ops/sec ±3.89% (57 runs sampled)
    * WebCrypto API (AES-CBC) x 18,174 ops/sec ±4.95% (52 runs sampled)
    * WebCrypto API (AES-GCM) x 16,575 ops/sec ±6.74% (51 runs sampled)
    Fastest is js-nacl.js

    Benchmark: Decrypting 2 Kb of random data ...
    * asmcrypto.js (AES-CBC) x 5,524 ops/sec ±2.12% (32 runs sampled)
    * asmcrypto.js (AES-GCM) x 2,868 ops/sec ±2.03% (55 runs sampled)
    * crypto-js (AES-CBC) x 3,936 ops/sec ±0.52% (63 runs sampled)
    * forge (AES-CBC) x 6,319 ops/sec ±0.69% (61 runs sampled)
    * forge (AES-GCM) x 3,088 ops/sec ±0.55% (62 runs sampled)
    * js-nacl.js x 26,823 ops/sec ±0.43% (62 runs sampled)
    * libsodium.js x 22,751 ops/sec ±0.35% (64 runs sampled)
    * SJCL (AES-CCM) x 2,187 ops/sec ±2.22% (63 runs sampled)
    * SJCL (AES-GCM) x 689 ops/sec ±0.63% (62 runs sampled)
    * tweetnacl.js x 19,920 ops/sec ±4.09% (58 runs sampled)
    * WebCrypto API (AES-CBC) x 20,042 ops/sec ±4.89% (52 runs sampled)
    * WebCrypto API (AES-GCM) x 17,212 ops/sec ±5.27% (53 runs sampled)
    Fastest is js-nacl.js

    Benchmark: Encrypting 1 Mb of random data ...
    * asmcrypto.js (AES-CBC) x 55.01 ops/sec ±0.62% (48 runs sampled)
    * asmcrypto.js (AES-GCM) x 10.60 ops/sec ±0.72% (30 runs sampled)
    * crypto-js (AES-CBC) x 7.40 ops/sec ±2.70% (22 runs sampled)
    * forge (AES-CBC) x 12.02 ops/sec ±3.21% (24 runs sampled)
    * forge (AES-GCM) x 8.22 ops/sec ±4.35% (25 runs sampled)
    * js-nacl.js x 60.03 ops/sec ±1.51% (51 runs sampled)
    * libsodium.js x 48.32 ops/sec ±1.56% (50 runs sampled)
    * SJCL (AES-CCM) x 4.54 ops/sec ±2.58% (16 runs sampled)
    * SJCL (AES-GCM) x 1.31 ops/sec ±0.82% (8 runs sampled)
    * tweetnacl.js x 49.89 ops/sec ±2.04% (48 runs sampled)
    * WebCrypto API (AES-CBC) x 214 ops/sec ±2.17% (55 runs sampled)
    * WebCrypto API (AES-GCM) x 164 ops/sec ±2.07% (56 runs sampled)
    Fastest is WebCrypto API (AES-CBC)

    Benchmark: Decrypting 1 Mb of random data ...
    * asmcrypto.js (AES-CBC) x 54.06 ops/sec ±1.08% (47 runs sampled)
    * asmcrypto.js (AES-GCM) x 10.29 ops/sec ±1.05% (30 runs sampled)
    * crypto-js (AES-CBC) x 9.52 ops/sec ±0.38% (27 runs sampled)
    * forge (AES-CBC) x 11.38 ops/sec ±5.37% (32 runs sampled)
    * forge (AES-GCM) x 8.32 ops/sec ±4.58% (25 runs sampled)
    * js-nacl.js x 60.75 ops/sec ±1.10% (52 runs sampled)
    * libsodium.js x 49.64 ops/sec ±0.29% (51 runs sampled)
    * SJCL (AES-CCM) x 4.63 ops/sec ±1.47% (16 runs sampled)
    * SJCL (AES-GCM) x 1.25 ops/sec ±0.59% (8 runs sampled)
    * tweetnacl.js x 50.69 ops/sec ±2.05% (53 runs sampled)
    * WebCrypto API (AES-CBC) x 314 ops/sec ±2.75% (56 runs sampled)
    * WebCrypto API (AES-GCM) x 163 ops/sec ±2.06% (55 runs sampled)
    Fastest is WebCrypto API (AES-CBC)
