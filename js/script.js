var contactsButton = document.querySelector(".contacts-button");

var contactsPopup = document.querySelector(".modal-feedback");
var contactsClose = contactsPopup.querySelector(".modal-close");

var contactsForm = contactsPopup.querySelector("form");
var contactsName = contactsForm.querySelector("[name=name]");
var contactsEmail = contactsForm.querySelector("[name=email]");
var contactsText = contactsForm.querySelector("[name=text]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactsButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-closing");
  contactsPopup.classList.add("modal-show");

  if (storageName && storageEmail) {
    contactsName.value = storageName;
    contactsEmail.value = storageEmail;
    setTimeout(function() {
      contactsText.focus();
    }, 500);
  } else {
    setTimeout(function() {
      contactsName.focus();
    }, 500);
  }
});

contactsClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-error");
  contactsPopup.classList.add("modal-closing");
  setTimeout(function() {
    contactsPopup.classList.remove("modal-show");
  }, 650);
});

contactsForm.addEventListener("submit", function(evt) {
  if (!contactsName.value || !contactsEmail.value || !contactsText.value) {
    evt.preventDefault();
    contactsPopup.classList.remove("modal-error");
    contactsPopup.offsetWidth = contactsPopup.offsetWidth;
    contactsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", contactsName.value);
      localStorage.setItem("email", contactsEmail.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactsPopup.classList.contains("modal-show")) {
      contactsPopup.classList.remove("modal-error");
      contactsPopup.classList.add("modal-closing");
      setTimeout(function() {
        contactsPopup.classList.remove("modal-show");
      }, 650);
    }
  }
});

var mapLink = document.querySelector(".map-link");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-closing");
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-closing");
  setTimeout(function() {
    mapPopup.classList.remove("modal-show");
  }, 650);
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.add("modal-closing");
      setTimeout(function() {
        mapPopup.classList.remove("modal-show");
      }, 650);
    }
  }
});
