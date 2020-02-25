var link = document.querySelector(".button-wright-us");
var popup = document.querySelector(".modal-wright-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");

 var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("name");
    storage = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }


  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }
     if (storage) {
      name.value = storage;
      email.value = storage;
      letter.focus();
    }
    });

    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

    form.addEventListener("submit", function (evt) {
      if (!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
        localStorage.setItem("email", email.value);
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