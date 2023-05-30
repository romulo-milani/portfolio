const changeTheme = () => {
  document.body.classList.toggle("lightMode");
};

const themeBtn = document
  .querySelector("#theme")
  .addEventListener("click", changeTheme);
