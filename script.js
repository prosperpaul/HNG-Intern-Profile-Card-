
function updateUTCTime() {
  const utcTimeElement = document.getElementById("utcTime");
  const now = new Date();
  utcTimeElement.textContent = now.toUTCString();
}

// Update time when the page loads
updateUTCTime();

// Update time every second (1000 milliseconds)
setInterval(updateUTCTime, 1000);
