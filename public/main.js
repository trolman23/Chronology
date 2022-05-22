const timeDisplay = document.querySelector(".td");
const pbar = document.querySelector(".progress-bar");

function getTimePercentage(timeString) {
    const secs = timeString.substring(0, 2) * 3600
                + timeString.substring(3, 5) * 60
                + timeString.substring(6, 8) * 1;
    return secs/86399;
}

setInterval(() => {
    const time = new Date().toTimeString().substring(0, 8);
    const percent = getTimePercentage(time);
    document.getElementById("time").innerHTML = time;
    document.getElementById("pofd").innerHTML = percent.toPrecision(4)*100 + '%';
    pbar.style.width = percent.toPrecision(4)*100 + '%';
}, 1000);



