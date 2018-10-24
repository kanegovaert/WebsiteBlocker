function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        value: document.querySelector("#master-password").value
    });
}

function restoreOptions() {

    function setCurrentChoice(result) {
        document.querySelector("#master-password").value = result.color || "blue";
    }

    function onError(error) {
        console.log('Error: ' + error);
    }

    var getting = browser.storage.sync.get("color");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);