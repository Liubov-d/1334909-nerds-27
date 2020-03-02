var link = document.querySelector(".button-wright-us");
var popup = document.querySelector(".modal-wright-us");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var validation = popup.querySelectorAll(".validation");

var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");


  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    name.focus();
  });

    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

    form.addEventListener("submit", function (evt) {
      for (var i = 0; i < validation.length; i++) {
      if (!validation[i].value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error")
  }
  }
  });

    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("name", name.value);
          localStorage.setItem("email", email.value);
        }
        }
    }
  });