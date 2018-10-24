function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        value: document.getElementById("master-password").value
    });
}

function restoreOptions() {
    function setCurrentChoice(result) {
        document.getElementById("master-password").value = result.value;
    }

    function onError(error) {
        console.log('Error: ' + error);
    }
    var getting = browser.storage.sync.get("value");
    getting.then(setCurrentChoice, onError);
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
