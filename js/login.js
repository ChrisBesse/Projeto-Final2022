const loginFormEl = document.querySelector(".login-form");

const usernameInput = document.querySelector("#username-email");
const passwordInput = document.querySelector("#senha");

const lembreSe = document.querySelector("#lembrese")

// const errorEl = document.querySelector(".error-msg")

loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    (usernameInput.value === localStorage.getItem("username") ||
    usernameInput.value === localStorage.getItem("email")) &&
    passwordInput.value === localStorage.getItem("senha")
  ) {
    localStorage.setItem("hasAccount", true)
  
    window.location = "account.html";
  } else if (
    usernameInput.value === "admin" &&
    passwordInput.value === "123456789"
  ) {
    window.location = "admin/admin.html";
  } else {
    console.log("asdasd");
  }
});
