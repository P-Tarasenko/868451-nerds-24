var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var user = popup.querySelector("[name=user-name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("textarea");

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("user");
  } catch (err) {
    isStorageSupport = false;
  }

var isStorageEmailSupport = true;
  var storageEmail = "";

  try {
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageEmailSupport = false;
  }


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    user.value = storage;
    email.focus();
  } else {
    user.focus(); 
  }
  if (storageEmail) {
    email.value = storageEmail;
    text.focus();
  } 
    
})

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
})

form.addEventListener("submit", function (evt) {
  if (!user.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    if (!user.value) {
      user.classList.add("modal-error-border");
      user.addEventListener("keydown", function() {
        if (user.classList.contains("modal-error-border")) {
          user.classList.remove("modal-error-border");
        }
      })
    }
    if(!email.value) {
      email.classList.add("modal-error-border");
      email.addEventListener("keydown", function() {
        if (email.classList.contains("modal-error-border")) {
          email.classList.remove("modal-error-border");
        }
      })
    }
  } else {
    if (isStorageSupport) { localStorage.setItem("user", user.value); }
    if (isStorageEmailSupport) {
    localStorage.setItem("email", email.value); }
  }
  
})