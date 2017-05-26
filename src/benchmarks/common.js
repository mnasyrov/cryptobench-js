export function getRandomBytes(size) {
    var MAX_BUFFER_SIZE = 64000;
    var result = new Uint8Array(size);
    var offset = 0;
    while (offset < size) {
        var bufferSize = Math.min(size - offset, MAX_BUFFER_SIZE);
        var buffer = new Uint8Array(bufferSize);
        crypto.getRandomValues(buffer);
        result.set(buffer, offset);
        offset = offset + bufferSize;
    }
    return result;
}
