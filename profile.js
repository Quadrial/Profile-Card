function updateTime() {
    const currentTimeElement = document.getElementById('current-time');
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    currentTimeElement.textContent = `🕒 ${hours}:${minutes}:${seconds} UTC`;
  }
  
  setInterval(updateTime, 1000); // Update time every second
  updateTime(); // Initial call to display time immediately