function saveOptions(e) {
    console.log("aaa")
    e.preventDefault();
    browser.storage.sync.set({
        value: document.getElementById("#master-password").value
    });
    console.log(value);
    console.log("aaa")
    console.log("dd" + document.getElementById("#master-password").value);
}

function restoreOptions() {
    function setCurrentChoice(result) {
        console.log(result);
        document.getElementById("#master-password").value = result;
    }

    function onError(error) {
        console.log('Error: ' + error);
    }
    var getting = browser.storage.sync.get("value");
    getting.then(setCurrentChoice, onError);
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

function onError(error) {
    console.log("Error: " + error);
}

function onGot(item) {
    var value = "password";
    if (item.value) {
        value = item.value;
    }
    document.getElementById("#master-password").value = value;
}

var getting = browser.storage.sync.get("value");
getting.then(onGot, onError);