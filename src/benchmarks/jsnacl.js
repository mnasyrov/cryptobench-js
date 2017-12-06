import {getRandomBytes} from './common';

var jsnacl;

export function getTitle() {
    return 'js-nacl.js';
}

export function initialize() {
    return new Promise(function (resolve) {
        nacl_factory.instantiate(function (nacl) {
            jsnacl = nacl;
            resolve();
        });
    });
}

export function getEncryptionTest(payloadSize) {
    var key, nonce, payload;
    return {
        onStart: function () {
            key = getRandomBytes(32);
            nonce = getRandomBytes(24);
            payload = getRandomBytes(payloadSize);
        },
        fn: function () {
            jsnacl.crypto_secretbox(payload, nonce, key);
        }
    }
}

export function getDecryptionTest(payloadSize) {
    var key, nonce, payload, encryptedPayload;
    return {
        onStart: function () {
            key = getRandomBytes(32);
            nonce = getRandomBytes(24);
            payload = getRandomBytes(payloadSize);
            encryptedPayload = jsnacl.crypto_secretbox(payload, nonce, key);
        },
        fn: function () {
            jsnacl.crypto_secretbox_open(encryptedPayload, nonce, key);
        }
    }
}
