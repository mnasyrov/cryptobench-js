import {bytesToString, getRandomBytes} from './common';

export function getTitle() {
    return 'crypto-js (AES-CBC)';
}

export function getEncryptionTest(payloadSize) {
    var key, nonce, payload;
    return {
        onStart: function () {
            key = bytesToString(getRandomBytes(32));
            nonce = bytesToString(getRandomBytes(24));
            payload = bytesToString(getRandomBytes(payloadSize));
        },
        fn: function () {
            CryptoJS.AES.encrypt(nonce + payload, key);
        }
    }
}

export function getDecryptionTest(payloadSize) {
    var key, nonce, payload, encryptedPayload;
    return {
        onStart: function () {
            key = bytesToString(getRandomBytes(32));
            nonce = bytesToString(getRandomBytes(24));
            payload = bytesToString(getRandomBytes(payloadSize));
            encryptedPayload = CryptoJS.AES.encrypt(nonce + payload, key)
        },
        fn: function () {
            CryptoJS.AES.decrypt(encryptedPayload, key);
        }
    }
}
