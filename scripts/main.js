// Get a reference to the time element
function updateTime() {
    var today = new Date();
    var time = today.getHours() + ":" + String(today.getMinutes()).padStart(2, '0') + ":" + String(today.getSeconds()).padStart(2, '0');
    document.getElementById("currentTime").innerHTML = time;
    setTimeout(updateTime, 1000); // Update time every second
}

updateTime();