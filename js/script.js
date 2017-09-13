var link = document.querySelector(".search-hotel-header");
var popup = document.querySelector(".form-search");

link.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.toggle("modal-show");
});
