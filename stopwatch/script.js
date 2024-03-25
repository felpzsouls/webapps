document.addEventListener(`DOMContentLoaded`, () => {

    const playBtn = document.getElementById(`btn-play`),
        pauseBtn = document.getElementById(`btn-pause`),
        resetBtn = document.getElementById(`btn-reset`),
        timer = document.querySelector(`.timer`);

    function timeToString(time) {
        let diferrenceInHours = time / 3600000,
            hr = Math.floor(diferrenceInHours),
            differenceInMinutes = (diferrenceInHours - hr) * 60,
            min = Math.floor(differenceInMinutes),
            differenceInSeconds = (differenceInMinutes - min) * 60,
            sec = Math.floor(differenceInSeconds),
            differenceInMilliseconds = (differenceInSeconds - sec) * 100,
            ms = Math.floor(differenceInMilliseconds),
            formattedmin = min.toString().padStart(2, '0'),
            formattedsec = sec.toString().padStart(2, '0'),
            formattedms = ms.toString().padStart(2, '0');

        return `${formattedmin}:${formattedsec}:${formattedms}`
    }

    let startTime,
        elapsedTime = 0,
        timerInterval;

    function displayInTimer(str) {
        timer.innerHTML = str
    };

    function play() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            displayInTimer(timeToString(elapsedTime));
        }, 10);
        toggleButtons('pause');
    }

    function pause() {
        clearInterval(timerInterval);
        toggleButtons('play');
    }

    function reset() {
        clearInterval();
        displayInTimer("00:00:00");
        elapsedTime = 0;
        toggleButtons(`play`);
    }

    function toggleButtons(key) {
        if (key === "play") {
            playBtn.style.display = "block";
            pauseBtn.style.display = "none";
        } else {
            playBtn.style.display = "none";
            pauseBtn.style.display = "block";
        }
    };

    playBtn.addEventListener(`click`, play);
    pauseBtn.addEventListener(`click`, pause);
    resetBtn.addEventListener(`click`, reset);
})