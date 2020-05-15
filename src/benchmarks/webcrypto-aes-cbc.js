import {getRandomBytes} from './common';

export function getTitle() {
    return 'WebCrypto API (AES-CBC)';
}

export function getEncryptionTest(payloadSize) {
    var key, nonce, payload, iv;
    return {
        defer: true,
        onStart: function () {
            key = getRandomBytes(32);
            nonce = getRandomBytes(24);
            payload = getRandomBytes(payloadSize);
            iv = crypto.getRandomValues(new Uint8Array(16));
        },
        fn: function (deferred) {
            var errorHandler = function (error) {
                console.error('WebCrypto error', error);
                deferred.benchmark.abort();
                deferred.resolve();
            };
            try {
                crypto.subtle.importKey('raw', key, {name: 'AES-CBC'}, false, ['encrypt', 'decrypt'])
                    .then(function (masterKey) {
                        return crypto.subtle.encrypt({
                            name: 'AES-CBC',
                            iv: iv,
                            additionalData: nonce
                        }, masterKey, payload)
                            .then(function () {
                                deferred.resolve();
                            })
                            .catch(errorHandler);
                    })
                    .catch(errorHandler);
            } catch (error) {
                errorHandler(error);
            }
        }
    }
}

export function prepareDecryptionTest(payloadSize) {
    var key = getRandomBytes(32);
    var nonce = getRandomBytes(24);
    var payload = getRandomBytes(payloadSize);
    var iv = crypto.getRandomValues(new Uint8Array(16));

    return crypto.subtle.importKey('raw', key, {name: 'AES-CBC'}, false, ['encrypt', 'decrypt'])
        .then(function (masterKey) {
            return crypto.subtle.encrypt({
                name: 'AES-CBC',
                iv: iv,
                additionalData: nonce
            }, masterKey, payload)
                .then(function (encryptedPayload) {
                    return {
                        key: key,
                        nonce: nonce,
                        iv: iv,
                        encryptedPayload: encryptedPayload
                    }
                })
        })
}

export function getDecryptionTest(params) {
    return {
        defer: true,
        fn: function (deferred) {
            var errorHandler = function (error) {
                console.error('WebCrypto error', error);
                deferred.benchmark.abort();
                deferred.resolve();
            };
            try {
                crypto.subtle.importKey('raw', params.key, {name: 'AES-CBC'}, false, ['encrypt', 'decrypt'])
                    .then(function (masterKey) {
                        return crypto.subtle.decrypt({
                            name: 'AES-CBC',
                            iv: params.iv,
                            additionalData: params.nonce
                        }, masterKey, params.encryptedPayload)
                            .then(function () {
                                deferred.resolve();
                            })
                            .catch(errorHandler);
                    })
                    .catch(errorHandler);
            } catch (error) {
                errorHandler(error);
            }
        }
    }
}
