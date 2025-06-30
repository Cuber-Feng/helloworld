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

function goDark() {
    if (!document.body.classList.contains("dark")) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");

        document.querySelectorAll("body *").forEach(el => {
            el.classList.remove("light");
            el.classList.add("dark");
        });
    }
}

function goLight() {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");

        document.querySelectorAll("body *").forEach(el => {
            el.classList.remove("dark");
            el.classList.add("light");
        });
    }
}

window.onload = () => {
    // check the device's mode
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDark) {
        goDark();
    }
}

function toggleMode() {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");

        document.querySelectorAll("body *").forEach(el => {
            el.classList.remove("dark");
            el.classList.add("light");
        });
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");

        document.querySelectorAll("body *").forEach(el => {
            el.classList.remove("light");
            el.classList.add("dark");
        });
    }
}

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

mediaQuery.addEventListener('change', (e) => {
    const isDark = e.matches;
    // 你可以在这里切换页面主题
    if (isDark) {
        goDark();
    } else {
        goLight();
    }
});