global.crypto = new (require('node-webcrypto-ossl'))();

// AsmCrypto.js is very buggy (https://github.com/vibornoff/asmcrypto.js/issues/100).
if (!global.location) {
    global.location = {protocol: 'file:'}
}
// Preserve the generator of 'node-webcrypto-ossl'
var originalGetRandomValues = global.crypto.getRandomValues;
global.asmCrypto = require('asmcrypto.js');
global.crypto.getRandomValues = originalGetRandomValues;


global.nacl_factory = require('js-nacl');
global.sodium = require('libsodium-wrappers');
global.nacl = require('tweetnacl/nacl-fast');
global.sjcl = require('sjcl');
global.Benchmark = require('benchmark');
global.platform = require('platform');

var benchmarkTests = require('../dist/benchmark-tests');

benchmarkTests.run();
