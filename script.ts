let hobbiesButton = document.querySelector(".btn-hobbies") as HTMLButtonElement;
let hobbies = document.querySelector(".hobbies-container") as HTMLElement;

let languagesButton = document.querySelector(
  ".btn-languages"
) as HTMLButtonElement;
let languages = document.querySelector(".languages-container") as HTMLElement;

hobbiesButton.addEventListener("click", () => {
  if (hobbies.style.display === "none") {
    hobbies.style.display = "block";
  } else {
    hobbies.style.display = "none";
  }
});

languagesButton.addEventListener("click", () => {
  console.log(languages.style.display);

  if (languages.style.display === "none") {
    languages.style.display = "block";
  } else {
    languages.style.display = "none";
  }
});
