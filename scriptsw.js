let hour = 0;
let minutes = 0;
let seconds = 0;
let count = 0;
let timer = false;
let lap = null;
let Laps = "";

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let laps = document.getElementById("lapsBtn");

start.addEventListener("click", function() {
    timer = true;
    stopwatch();
});

stop.addEventListener("click", function() {
    timer = false;
});

reset.addEventListener("click", function() {
    timer = false;
    hour = 0;
    minutes = 0;
    seconds = 0;
    count = 0;
    Laps = "";
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('count').innerHTML = "00"; 
    document.getElementById('laps').innerHTML = ""; // Clear laps display
});

laps.addEventListener("click", function() {
    let hrString = hour < 10 ? "0" + hour : hour;
    let minString = minutes < 10 ? "0" + minutes : minutes;
    let secString = seconds < 10 ? "0" + seconds : seconds;
    let countString = count < 10 ? "0" + count : count;

    lap = `${hrString}:${minString}:${secString}:${countString}`;
    Laps += `<div class="lap-item">${lap}</div>`;
    document.getElementById("laps").innerHTML = Laps;
});

function stopwatch() {
    if (timer) {
        count++;

        if (count == 100) {
            count = 0;
            seconds++;
        }

        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes == 60) {
            minutes = 0;
            hour++;
        }

        let hrString = hour < 10 ? "0" + hour : hour;
        let minString = minutes < 10 ? "0" + minutes : minutes;
        let secString = seconds < 10 ? "0" + seconds : seconds;
        let countString = count < 10 ? "0" + count : count;

        document.getElementById('hr').innerHTML = hrString; 
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
        document.getElementById('count').innerHTML = countString;

        setTimeout(stopwatch, 10);
    }
}









