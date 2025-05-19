function updateClock() {
    const now = new Date();

    // clock
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    // Date
    const year = now.getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = String(now.getDate()).padStart(2, '0');
    const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const formattedDate = `${monthNames[now.getMonth()]}-${day}, ${year}`;
    const weekday = weekdayNames[now.getDay()];
    document.getElementById('date').textContent = `${formattedDate}    ${weekday}`;
}

updateClock(); // ini
setInterval(updateClock, 1000); // update every second