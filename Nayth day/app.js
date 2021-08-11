btn = document.getElementById("theme-button");
link = document.getElementById("theme-link");

btn.addEventListener("click", function () {
    ChangeTheme();
});

function ChangeTheme() {
    let lightTheme = "light.css";
    let darkTheme = "dark.css";

    currTheme = link.getAttribute("href");
    theme = "";

    if (currTheme == lightTheme) {
        currTheme = darkTheme;
        theme = "dark";
    } else {
        currTheme = lightTheme;
        theme = "light";
    }

    link.setAttribute("href", currTheme);


}