import {bytesToString, getRandomBytes} from './common';

export function getTitle() {
    return 'SJCL (AES-GCM)';
}

export function getEncryptionTest(payloadSize) {
    var iv, payloadBits, keyBits, cipher;
    return {
        onStart: function () {
            var strPayload = bytesToString(getRandomBytes(payloadSize));
            payloadBits = sjcl.codec.utf8String.toBits(strPayload);
            keyBits = sjcl.random.randomWords(8); // 32 bytes
            cipher = new sjcl.cipher.aes(keyBits);
            iv = sjcl.random.randomWords(32, 0);
        },
        fn: function () {
            sjcl.mode.gcm.encrypt(cipher, payloadBits, iv);
        }
    }
}

export function getDecryptionTest(payloadSize) {
    var iv, payloadBits, keyBits, cipher, encryptedPayloadBits;
    return {
        onStart: function () {
            var strPayload = bytesToString(getRandomBytes(payloadSize));
            payloadBits = sjcl.codec.utf8String.toBits(strPayload);
            keyBits = sjcl.random.randomWords(8); // 32 bytes
            cipher = new sjcl.cipher.aes(keyBits);
            iv = sjcl.random.randomWords(32, 0);
            encryptedPayloadBits = sjcl.mode.gcm.encrypt(cipher, payloadBits, iv)
        },
        fn: function () {
            sjcl.mode.gcm.decrypt(cipher, encryptedPayloadBits, iv);
        }
    }
}

