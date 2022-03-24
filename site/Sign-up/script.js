document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var icon = document.getElementById("icon");
var logo = document.getElementById("logo");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "../img/SunIcon.png"
        logo.src = "../img/logoWhite.png"
    } else {
        icon.src = "../img/MoonIcon.png"
        logo.src = "../img/MainIcon.png"
    }
}

