import * as asmCryptoBench from './benchmarks/asmcrypto';
import * as cryptoJsBench from './benchmarks/crypto-js';
import * as forgeBench from './benchmarks/forge';
import * as jsNaclBench from './benchmarks/jsnacl';
import * as libsodiumBench from './benchmarks/libsodium';
import * as sjclBench from './benchmarks/sjcl';
import * as tweetNaclBench from './benchmarks/tweetnacl';
import * as webCryptoBench from './benchmarks/webcrypto';

var PAYLOAD_SIZE_2KB = 2048;
var PAYLOAD_SIZE_1MB = 1048576;
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
        .then(function () {
            return runEncryptionTests('Encrypting 2 Kb of random data', PAYLOAD_SIZE_2KB)
        })
        .then(function () {
            return runDecryptionTests('Decrypting 2 Kb of random data', PAYLOAD_SIZE_2KB)
        })
        .then(function () {
            return runEncryptionTests('Encrypting 1 Mb of random data', PAYLOAD_SIZE_1MB)
        })
        .then(function () {
            return runDecryptionTests('Decrypting 1 Mb of random data', PAYLOAD_SIZE_1MB)
        })
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

function runEncryptionTests(suiteTitle, payloadSize) {
    var suite = decorateSuite(new Benchmark.Suite(suiteTitle))
        .add(forgeBench.getTitle(), forgeBench.getEncryptionTest(payloadSize))
        .add(asmCryptoBench.getTitle(), asmCryptoBench.getEncryptionTest(payloadSize))
        .add(cryptoJsBench.getTitle(), cryptoJsBench.getEncryptionTest(payloadSize))
        .add(jsNaclBench.getTitle(), jsNaclBench.getEncryptionTest(payloadSize))
        .add(libsodiumBench.getTitle(), libsodiumBench.getEncryptionTest(payloadSize))
        .add(sjclBench.getTitle(), sjclBench.getEncryptionTest(payloadSize))
        .add(tweetNaclBench.getTitle(), tweetNaclBench.getEncryptionTest(payloadSize))
        .add(webCryptoBench.getTitle(), webCryptoBench.getEncryptionTest(payloadSize));
    return runSuite(suite);
}

function runDecryptionTests(suiteTitle, payloadSize) {
    return webCryptoBench.prepareDecryptionTest(payloadSize)
        .catch(function (error) {
            console.error('Failed to create parameters for WebCrypto test.', error);
            return null;
        })
        .then(function (webCryptoDecryptionTestParams) {
            var suite = decorateSuite(new Benchmark.Suite(suiteTitle))
                // .add(forgeBench.getTitle(), forgeBench.getDecryptionTest(payloadSize))
                .add(asmCryptoBench.getTitle(), asmCryptoBench.getDecryptionTest(payloadSize))
                .add(cryptoJsBench.getTitle(), cryptoJsBench.getDecryptionTest(payloadSize))
                .add(jsNaclBench.getTitle(), jsNaclBench.getDecryptionTest(payloadSize))
                .add(libsodiumBench.getTitle(), libsodiumBench.getDecryptionTest(payloadSize))
                .add(sjclBench.getTitle(), sjclBench.getDecryptionTest(payloadSize))
                .add(tweetNaclBench.getTitle(), tweetNaclBench.getDecryptionTest(payloadSize))
                .add(webCryptoBench.getTitle(), webCryptoBench.getDecryptionTest(webCryptoDecryptionTestParams));
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
