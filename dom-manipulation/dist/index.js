"use strict";
const form = document.querySelector(".reg-form");
const userNameInput = document.querySelector("#name");
const userEmailInput = document.querySelector("#email");
const userFeedbackInput = document.querySelector("#feedback");
const userCountryInput = document.querySelector("#country");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userData = {
        username: userNameInput.value,
        userEmail: userEmailInput.value,
        userCountry: userCountryInput.value,
        userFeedback: userFeedbackInput.value
    };
    console.log(userData);
});
