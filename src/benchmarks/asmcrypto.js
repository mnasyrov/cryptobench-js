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
            asmCrypto.AES_GCM.encrypt(payload, key, nonce)
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
            encryptedPayload = asmCrypto.AES_GCM.encrypt(payload, key, nonce)
        },
        fn: function () {
            asmCrypto.AES_GCM.decrypt(encryptedPayload, key, nonce);
        }
    }
}

