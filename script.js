var hobbiesButton = document.querySelector(".btn-hobbies");
var hobbies = document.querySelector(".hobbies-container");
var languagesButton = document.querySelector(".btn-languages");
var languages = document.querySelector(".languages-container");
hobbiesButton.addEventListener("click", function () {
    if (hobbies.style.display === "none") {
        hobbies.style.display = "block";
    }
    else {
        hobbies.style.display = "none";
    }
});
languagesButton.addEventListener("click", function () {
    console.log(languages.style.display);
    if (languages.style.display === "none") {
        languages.style.display = "block";
    }
    else {
        languages.style.display = "none";
    }
});
