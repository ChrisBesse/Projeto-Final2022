const formEl = document.querySelector(".signup-form");

const inputs = document.querySelectorAll(".user-input");

console.log(inputs);

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    localStorage.setItem(input.id, input.value);
  });



  window.location = "login.html";
});


// Formatação do input de CPF
const cpfInput = document.querySelector("#cpf");

cpfInput.addEventListener("input", (e) => { 
  let input = e.target
  let value = input.value;
  
  if(isNaN(value[value.length-1])){  
    input.value = value.substring(0, value.length-1);
     return;
  }
  
  cpf.setAttribute("maxlength", "14");
  if (value.length == 3 || value.length == 7) input.value += ".";
  if (value.length == 11) input.value += "-";
})
