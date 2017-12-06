import {getRandomBytes} from './common';

export function getTitle() {
    return 'libsodium.js';
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
            sodium.crypto_secretbox_easy(payload, nonce, key);
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
            encryptedPayload = sodium.crypto_secretbox_easy(payload, nonce, key);
        },
        fn: function () {
            sodium.crypto_secretbox_open_easy(encryptedPayload, nonce, key);
        }
    }
}
