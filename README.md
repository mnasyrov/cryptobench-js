# CryptoBench.js

Benchmarks for javascript crypto libraries.

[![Build Status](https://travis-ci.org/mnasyrov/cryptobench-js.svg?branch=master)](https://travis-ci.org/mnasyrov/cryptobench-js)

The subject of tests are client-side javascript libraries under various environments:
* node.js;
* browsers;
* cordova applications: Android and iOS.

Benchmark tests performance of encryption and decryption of 1Mb random data.


## History results

- [Benchmark 2018-02-16](docs/benckmark-results_2018-02-16.md)


## The latest benchmark

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

TODO


### Google Chrome

TODO


### Safari

TODO


### Firefox

TODO


## Running benchmarks

Install dependencies:

    npm install


### Node.js

For testing in node.js run:

    npm start


### Browser

For testing in a browser run:

    npm run serve

and open a test page [http://localhost:8080](http://localhost:8080).


### Android

Android SDK must be installed before and an emulator/device should be running.

    npm run android


### iOS

Xcode must be installed before.

    npm run ios


## Useful links

* [JavaScript Crypto Libraries](https://gist.github.com/jo/8619441) by [Johannes Jörg Schmidt](https://github.com/jo)
* [JavaScript Crypto Libraries (enhanced list)](https://github.com/gabrielizalo/JavaScript-Crypto-Libraries) by [Gabriel Porras](https://github.com/gabrielizalo)

