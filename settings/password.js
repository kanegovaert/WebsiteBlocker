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