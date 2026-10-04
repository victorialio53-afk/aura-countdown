const deadline = new Date("2026-10-05T23:59:00+03:00").getTime();

const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const statusElement = document.getElementById("status");

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

function updateCountdown() {
  const now = Date.now();
  const distance = deadline - now;

  if (distance <= 0) {
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";

    statusElement.textContent = "STATUS // ACCESS CLOSED";
    clearInterval(timerInterval);
    return;
  }

  const totalSeconds = Math.floor(distance / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  hoursElement.textContent = formatNumber(hours);
  minutesElement.textContent = formatNumber(minutes);
  secondsElement.textContent = formatNumber(seconds);

  if (distance <= 10 * 60 * 1000) {
    statusElement.textContent = "STATUS // CRITICAL";
  } else if (distance <= 60 * 60 * 1000) {
    statusElement.textContent = "STATUS // WARNING";
  } else {
    statusElement.textContent = "STATUS // ACTIVE";
  }
}

updateCountdown();

const timerInterval = setInterval(updateCountdown, 1000);
