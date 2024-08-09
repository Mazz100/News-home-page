const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#show-button");
const closeButton = document.querySelector("#close-button");

//Event listeners for opening / closing
showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
