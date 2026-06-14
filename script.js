const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    const html = document.documentElement;

    const theme = html.getAttribute("data-theme");

    if(theme === "light"){

        html.setAttribute("data-theme", "dark");
        toggleBtn.textContent = "☀️";

    } else {

        html.setAttribute("data-theme", "light");
        toggleBtn.textContent = "🌙";
    }

});