// Get a reference to the time element
function updateTime() {
    var today = new Date();
    var time = today.getDate() + today.getMonth() + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("currentTime").innerHTML = time;
    setTimeout(updateTime, 1000); // Update time every second
}

updateTime();