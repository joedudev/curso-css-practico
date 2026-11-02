const modal = document.querySelector(".modal");
const footer = document.querySelector(".footer");
const modalClose = document.querySelector("#modal__content--close");

footer.addEventListener("click", () => {
	modal.classList.remove("hidden");
	modal.classList.add("visible");
});

modalClose.addEventListener("click", () => {
	modal.classList.remove("visible");
	modal.classList.add("hidden");
});
