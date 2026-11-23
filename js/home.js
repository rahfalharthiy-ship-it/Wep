/* =========================================================
   Home page scripts: navigation menu on small screens,
   "Back to Top" button and real-time clock in the footer
   ========================================================= */

/* Opens and closes the navigation menu on small screens */
function toggleMenu() {
    let nav = document.getElementById("main-nav");
    if (nav.className == "main-nav open") {
        nav.className = "main-nav";
    } else {
        nav.className = "main-nav open";
    }
}

/* Shows the "Back to Top" button only after the user scrolls down */
window.onscroll = function () {
    let button = document.getElementById("back-to-top");
    if (document.documentElement.scrollTop > 400) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

/* Returns the user to the top of the page */
function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Displays the current time as hh:mm:ss AM/PM */
function showClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = "AM";

    if (hours >= 12) {
        period = "PM";
    }
    hours = hours % 12;
    if (hours == 0) {
        hours = 12;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + period;
}

/* Show the time immediately, then update it every second */
showClock();
setInterval(showClock, 1000);
