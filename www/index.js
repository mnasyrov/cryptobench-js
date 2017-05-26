var runButton = document.getElementById('runButton');
var logOutput = document.getElementById('log');

benchmarkTests.setLogCallback(function (message) {
    logOutput.innerText += message + '\n';
});

function runTests() {
    if (benchmarkTests.isRunning()) {
        return;
    }
    runButton.setAttribute('disabled', true);
    return benchmarkTests.run()
        .then(function () {
            runButton.removeAttribute('disabled');
        });
}
