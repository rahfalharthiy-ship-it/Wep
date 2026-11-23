/* =========================================================
   Website theme (linked in the <head> of every page)
   The chosen theme is saved in localStorage, so it stays
   active while the user moves between pages.
   ========================================================= */

/* Apply the saved theme as soon as the page starts loading */
if (localStorage.getItem("theme") == "dark") {
    document.documentElement.className = "dark-theme";
}

/* Called by the theme button on the Home page:
   switches between the light and dark themes and saves the choice */
function switchTheme() {
    if (document.documentElement.className == "dark-theme") {
        document.documentElement.className = "";
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.className = "dark-theme";
        localStorage.setItem("theme", "dark");
    }
}
