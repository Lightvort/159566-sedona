var button = document.querySelector(".get-form");
var form = document.querySelector(".search-form");
var datein = form.querySelector("[id=date-text-in]");
var dateout = form.querySelector("[id=date-text-out]");
var adults = form.querySelector("[id=stepper-adults]");
var kids = form.querySelector("[id=stepper-kids]");

button.addEventListener("click", function(event) {
  if (!form.classList.contains("animation-form-open")) {
    event.preventDefault();
    form.classList.remove("animation-form-close");
    form.classList.add("animation-form-open");
  }
  else {
    event.preventDefault();
    form.classList.remove("animation-form-open");
    form.classList.remove("animation-form-error");
    form.classList.add("animation-form-close");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (form.classList.contains("animation-form-open")) {
      form.classList.remove("animation-form-open");
      form.classList.remove("animation-form-error");
      form.classList.add("animation-form-close");
    }
  }
});

form.addEventListener("submit", function(event) {
  if (!datein.value || !dateout.value || !adults.value || !kids.value) {
    event.preventDefault();
    form.classList.remove("animation-form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("animation-form-error");
  }
});