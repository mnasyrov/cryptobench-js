import * as asmCryptoBench from './benchmarks/asmcrypto';
import * as jsNaclBench from './benchmarks/jsnacl';
import * as libsodiumBench from './benchmarks/libsodium';
import * as sjclBench from './benchmarks/sjcl';
import * as tweetNaclBench from './benchmarks/tweetnacl';
import * as webCryptoBench from './benchmarks/webcrypto';

var PAYLOAD_1MB_SIZE = 1048576;
var logCallback = null;
var isInitialized = false;
var runFlag = false;

export function setLogCallback(callback) {
    logCallback = callback;
}

export function isRunning() {
    return runFlag;
}

export function run() {
    runFlag = true;
    return Promise.resolve()
        .then(initialize)
        .then(runEncryptionTests)
        .then(runDecryptionTests)
        .then(function () {
            runFlag = false;
        })
        .catch(function (error) {
            runFlag = false;
            throw error;
        });
}

function initialize() {
    var initializers = [];
    if (!isInitialized) {
        logPlatformInfo();
        initializers.push(jsNaclBench.initialize());
    }
    return Promise.all(initializers).then(function () {
        isInitialized = true;
    });
}

function logPlatformInfo() {
    if (platform.description) {
        log(platform.description);
        logEmptyLine();
    }
}

function runEncryptionTests() {
    var suite = decorateSuite(new Benchmark.Suite('Encrypting of 1Mb random data'))
        .add('asmcrypto.js (AES-GCM)', asmCryptoBench.getEncryptionTest(PAYLOAD_1MB_SIZE))
        .add('js-nacl.js', jsNaclBench.getEncryptionTest(PAYLOAD_1MB_SIZE))
        .add('libsodium.js', libsodiumBench.getEncryptionTest(PAYLOAD_1MB_SIZE))
        .add('SJCL (AES-GCM)', sjclBench.getEncryptionTest(PAYLOAD_1MB_SIZE))
        .add('tweetnacl.js', tweetNaclBench.getEncryptionTest(PAYLOAD_1MB_SIZE))
        .add('WebCrypto API (AES-GCM)', webCryptoBench.getEncryptionTest(PAYLOAD_1MB_SIZE));
    return runSuite(suite);
}

function runDecryptionTests() {
    return webCryptoBench.prepareDecryptionTest(PAYLOAD_1MB_SIZE)
        .catch(function (error) {
            console.error('Failed to create parameters for WebCrypto test.', error);
            return null;
        })
        .then(function (webCryptoDecryptionTestParams) {
            var suite = decorateSuite(new Benchmark.Suite('Decrypting of 1Mb random data'))
                .add('asmcrypto.js (AES-GCM)', asmCryptoBench.getDecryptionTest(PAYLOAD_1MB_SIZE))
                .add('js-nacl.js', jsNaclBench.getDecryptionTest(PAYLOAD_1MB_SIZE))
                .add('libsodium.js', libsodiumBench.getDecryptionTest(PAYLOAD_1MB_SIZE))
                .add('SJCL (AES-GCM)', sjclBench.getDecryptionTest(PAYLOAD_1MB_SIZE))
                .add('tweetnacl.js', tweetNaclBench.getDecryptionTest(PAYLOAD_1MB_SIZE))
                .add('WebCrypto API (AES-GCM)', webCryptoBench.getDecryptionTest(webCryptoDecryptionTestParams));
            return runSuite(suite);
        });
}

function runSuite(benchmark) {
    return new Promise(function (resolve) {
        benchmark.on('complete', function () {
            logEmptyLine();
            resolve();
        });
        benchmark.run({async: true});
    })
}

function decorateSuite(suite) {
    return suite
        .on('start', function () {
            log('Benchmark: ' + this.name + ' ...');
        })
        .on('cycle', function (event) {
            var benchmark = event.target;
            var bullet = benchmark.error ? '!' : benchmark.aborted ? 'x' : '*';
            log(bullet + ' ' + String(benchmark));
        })
        .on('complete', function () {
            log('Fastest is ' + this.filter('fastest').map('name'));
        });
}

function log(message) {
    console.log(message);
    if (logCallback) {
        logCallback(message);
    }
}

function logEmptyLine() {
    log('');
}
