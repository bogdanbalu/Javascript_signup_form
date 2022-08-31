const fname = document.getElementById("fname");
const email = document.getElementById("email")
const password = document.getElementById("password");

const submitBtn = document.getElementById("submit");
const submitGoogleBtn = document.getElementById("google");
const submitGithubBtn = document.getElementById("github");

submitBtn.addEventListener("click", () => {
    const user = getFormData();
    if (!fname.value && !email.value && !password.value) {
        alert("No show data");
    } else {
        alert(`The full Name is ${user.fname} and email is ${user.email}. Is not recommanded to show the password`);
    }
    clearForm();

});

submitGoogleBtn.addEventListener("click", () => {
    alert("Sign up with Google")
});

submitGithubBtn.addEventListener("click", () => {
    alert("Sign up with Github")
});

const getFormData = () => {
    const data = {
        "fname": fname.value,
        "email": email.value,
        "password": password.value
    }
    return data;
}

const clearForm = () => {
    fname.value = '';
    email.value = '';
    password.value = '';
}


