var regForm = document.querySelector(".reg-form");
var firstNameInput = document.querySelector(".first-name__input");
var firstNameInvalid = document.querySelector(".first-name__input-invalid");
var lastNameInput = document.querySelector(".last-name__input");
var lastNameInvalid = document.querySelector(".last-name__input-invalid");
var emailInput = document.querySelector(".email__input");
var emailInvalid = document.querySelector(".email__input-invalid");

firstNameInput.addEventListener("invalid", function(evt) {
  evt.preventDefault();
  if (firstNameInput.validity.valueMissing) {
    firstNameInvalid.classList.remove("visually-hidden");
    firstNameInvalid.innerHTML = "Enter your first name";
  }
});

lastNameInput.addEventListener("invalid", function(evt) {
  evt.preventDefault();
  if (lastNameInput.validity.valueMissing) {
    lastNameInvalid.classList.remove("visually-hidden");
    lastNameInvalid.innerHTML = "Enter your last name";
  }
});

firstNameInput.addEventListener("input", function(evt) {
  firstNameInvalid.classList.add("visually-hidden");
});

lastNameInput.addEventListener("input", function(evt) {
  lastNameInvalid.classList.add("visually-hidden");
});

emailInput.addEventListener("input", function(evt) {
  emailInvalid.classList.add("visually-hidden");
});

emailInput.addEventListener("invalid", function(evt) {
  evt.preventDefault();
  if (emailInput.validity.valueMissing) {
    emailInvalid.classList.remove("visually-hidden");
    emailInvalid.innerHTML = "Enter your e-mail";
  } else if (emailInput.validity.patternMismatch) {
    emailInvalid.classList.remove("visually-hidden");
    emailInvalid.innerHTML = "Check e-mail format";
  }
  else {
    emailInvalid.classList.remove("visually-hidden");
    emailInvalid.innerHTML = "Wrong e-mail";
  }
});

regForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  alert("Sent");
});
