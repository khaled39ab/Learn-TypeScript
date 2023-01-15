const form = document.querySelector(".reg-form") as HTMLFormElement;

const userNameInput = document.querySelector("#name") as HTMLInputElement;

const userEmailInput = document.querySelector("#email") as HTMLInputElement;

const userFeedbackInput = document.querySelector("#feedback") as HTMLSelectElement;

const userCountryInput = document.querySelector("#country") as HTMLTextAreaElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let userData = {
        username: userNameInput.value,
        userEmail: userEmailInput.value,
        userCountry: userCountryInput.value,
        userFeedback: userFeedbackInput.value
    }
    console.log(userData);
})