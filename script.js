function handleMenu() {
  const $closeButton = document.querySelector(".header__nav-close-button");
  const $nav = document.querySelector(".header__nav");
  $closeButton.addEventListener("click", () => {
    $nav.classList.remove("isOpen");
  });
  const $openButton = document.querySelector(".header__nav-open-button");
  $openButton.addEventListener("click", () => {
    $nav.classList.add("isOpen");
  });
}

handleMenu();
