import * as asmCryptoBench_AES_GCM from './benchmarks/asmcrypto-aes-gcm';
import * as asmCryptoBench_AES_CBC from './benchmarks/asmcrypto-aes-cbc';
import * as cryptoJsBench from './benchmarks/crypto-js';
import * as forgeBench_AES_GCM from './benchmarks/forge-aes-gcm';
import * as forgeBench_AES_CBC from './benchmarks/forge-aes-cbc';
import * as jsNaclBench from './benchmarks/jsnacl';
import * as libsodiumBench from './benchmarks/libsodium';
import * as sjclBench_AES_GCM from './benchmarks/sjcl-aes-gcm';
import * as sjclBench_AES_CCM from './benchmarks/sjcl-aes-ccm';
import * as tweetNaclBench from './benchmarks/tweetnacl';
import * as webCryptoBench_AES_GCM from './benchmarks/webcrypto-aes-gcm';
import * as webCryptoBench_AES_CBC from './benchmarks/webcrypto-aes-cbc';

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
        .add(asmCryptoBench_AES_CBC.getTitle(), asmCryptoBench_AES_CBC.getEncryptionTest(payloadSize))
        .add(asmCryptoBench_AES_GCM.getTitle(), asmCryptoBench_AES_GCM.getEncryptionTest(payloadSize))

        .add(cryptoJsBench.getTitle(), cryptoJsBench.getEncryptionTest(payloadSize))

        .add(forgeBench_AES_CBC.getTitle(), forgeBench_AES_CBC.getEncryptionTest(payloadSize))
        .add(forgeBench_AES_GCM.getTitle(), forgeBench_AES_GCM.getEncryptionTest(payloadSize))

        .add(jsNaclBench.getTitle(), jsNaclBench.getEncryptionTest(payloadSize))
        .add(libsodiumBench.getTitle(), libsodiumBench.getEncryptionTest(payloadSize))

        .add(sjclBench_AES_CCM.getTitle(), sjclBench_AES_CCM.getEncryptionTest(payloadSize))
        .add(sjclBench_AES_GCM.getTitle(), sjclBench_AES_GCM.getEncryptionTest(payloadSize))

        .add(tweetNaclBench.getTitle(), tweetNaclBench.getEncryptionTest(payloadSize))

        .add(webCryptoBench_AES_CBC.getTitle(), webCryptoBench_AES_CBC.getEncryptionTest(payloadSize))
        .add(webCryptoBench_AES_GCM.getTitle(), webCryptoBench_AES_GCM.getEncryptionTest(payloadSize));
    return runSuite(suite);
}

function runDecryptionTests(suiteTitle, payloadSize) {
    return Promise.all([
        webCryptoBench_AES_CBC.prepareDecryptionTest(payloadSize),
        webCryptoBench_AES_GCM.prepareDecryptionTest(payloadSize),
    ])
        .catch(function (error) {
            console.error('Failed to prepare WebCrypto tests', error);
            return null;
        })
        .then(function (preparedParams) {
            var webCryptoAesCbcDecryptionParams = preparedParams[0];
            var webCryptoAesGcmDecryptionParams = preparedParams[1];

            var suite = decorateSuite(new Benchmark.Suite(suiteTitle))
                .add(asmCryptoBench_AES_CBC.getTitle(), asmCryptoBench_AES_CBC.getDecryptionTest(payloadSize))
                .add(asmCryptoBench_AES_GCM.getTitle(), asmCryptoBench_AES_GCM.getDecryptionTest(payloadSize))

                .add(cryptoJsBench.getTitle(), cryptoJsBench.getDecryptionTest(payloadSize))

                .add(forgeBench_AES_CBC.getTitle(), forgeBench_AES_CBC.getDecryptionTest(payloadSize))
                .add(forgeBench_AES_GCM.getTitle(), forgeBench_AES_GCM.getDecryptionTest(payloadSize))

                .add(jsNaclBench.getTitle(), jsNaclBench.getDecryptionTest(payloadSize))
                .add(libsodiumBench.getTitle(), libsodiumBench.getDecryptionTest(payloadSize))

                .add(sjclBench_AES_CCM.getTitle(), sjclBench_AES_CCM.getDecryptionTest(payloadSize))
                .add(sjclBench_AES_GCM.getTitle(), sjclBench_AES_GCM.getDecryptionTest(payloadSize))

                .add(tweetNaclBench.getTitle(), tweetNaclBench.getDecryptionTest(payloadSize))

                .add(webCryptoBench_AES_CBC.getTitle(), webCryptoBench_AES_CBC.getDecryptionTest(webCryptoAesCbcDecryptionParams))
                .add(webCryptoBench_AES_GCM.getTitle(), webCryptoBench_AES_GCM.getDecryptionTest(webCryptoAesGcmDecryptionParams));
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
