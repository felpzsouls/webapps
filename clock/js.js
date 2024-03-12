function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds(),
    day = now.getDate(),
    month = now.getUTCMonth(),
    year = now.getFullYear();

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  month = eval(month + 1);

  document.getElementById('horas').innerText = hours;
  document.getElementById('minutos').innerText = minutes;
  document.getElementById('segundos').innerText = seconds;
  document.getElementById('dia').innerText = day;
  document.getElementById('mes').innerText = month;
  document.getElementById('ano').innerText = year;
}

setInterval(updateClock, 1000);
