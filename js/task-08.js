const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  if (email === "" || password === "") {
    alert("Пожалуйста, заполните обязательные поля");
  } else {
    const userData = {
      email,
      password,
    };

    event.currentTarget.reset();
    console.log(userData);
  }
}
