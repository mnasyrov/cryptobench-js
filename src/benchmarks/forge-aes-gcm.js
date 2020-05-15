import {getRandomBytes} from './common';

export function getTitle() {
    return 'forge (AES-GCM)';
}

export function getEncryptionTest(payloadSize) {
    var key, nonce, payload;
    return {
        onStart: function () {
            key = forge.random.getBytesSync(32);
            nonce = forge.random.getBytesSync(24);
            payload = forge.util.createBuffer(getRandomBytes(payloadSize));
        },
        fn: function () {
            var cipher = forge.cipher.createCipher('AES-GCM', key);
            cipher.start({iv: nonce});
            cipher.update(forge.util.createBuffer(payload));
            cipher.finish();
        }
    }
}

export function getDecryptionTest(payloadSize) {
    var key, nonce, payload, encryptedPayload, authTag;
    return {
        onStart: function () {
            key = forge.random.getBytesSync(32);
            nonce = forge.random.getBytesSync(24);
            payload = forge.util.createBuffer(getRandomBytes(payloadSize));

            var cipher = forge.cipher.createCipher('AES-GCM', key);
            cipher.start({iv: nonce});
            cipher.update(forge.util.createBuffer(payload));
            cipher.finish();
            encryptedPayload = cipher.output;
            authTag = cipher.mode.tag;
        },
        fn: function () {
            var decipher = forge.cipher.createDecipher('AES-GCM', key);
            decipher.start({iv: nonce, tag: authTag});
            decipher.update(forge.util.createBuffer(encryptedPayload));
            var result = decipher.finish();
            if (!result) {
                throw new Error('Failed to decode')
            }
        }
    }
}
