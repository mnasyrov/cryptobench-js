import {getRandomBytes} from './common';

export function getEncryptionTest(payloadSize) {
    var key, nonce, payload;
    return {
        onStart: function () {
            key = getRandomBytes(32);
            nonce = getRandomBytes(24);
            payload = getRandomBytes(payloadSize);
        },
        fn: function () {
            nacl.secretbox(payload, nonce, key);
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
            encryptedPayload = nacl.secretbox(payload, nonce, key)
        },
        fn: function () {
            nacl.secretbox.open(encryptedPayload, nonce, key);
        }
    }
}
