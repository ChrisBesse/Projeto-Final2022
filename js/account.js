const userInfos = document.querySelectorAll(".user-info");
const nomeSobre = document.querySelector("#nomesobre-id");
const showPassBtn = document.querySelector(".show-pass-btn");
const senhaInp = document.querySelector("#senha");

window.addEventListener("DOMContentLoaded", () => {

  if (!(localStorage.hasOwnProperty("hasAccount"))) {
    window.location = "error.html";
  }

  nomeSobre.value =
    localStorage.getItem("nome") + " " + localStorage.getItem("sobrenome");

    userInfos.forEach((input) => {
      input.value = localStorage.getItem(input.id);
    });
    userInfos2.forEach((input) => {
      input.value = localStorage.getItem(input.id);
    });

  if (localStorage.hasOwnProperty("image")) {
	  userImgId.src = localStorage.getItem("image");
  }
});

// show password toggle
showPassBtn.addEventListener("click", () => {
  if (senhaInp.type === "password") {
    senhaInp.type = "text";
  } else {
    senhaInp.type = "password";
  }
});

// change user img

const editImgInput = document.querySelector("#edit-img");
const userImgId = document.querySelector("#user-img-id");

editImgInput.addEventListener("input", (e) => {
  let file = e.target.files[0];
  if (file.size > 2200000) {
    alert("Arquivo grande demais!");
    this.value = "";
    file = "";
  }

  //   Creating a URL of the img and putting on localstorage
  userImgId.src = URL.createObjectURL(file);

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    localStorage.setItem("image", reader.result);
  });
  if (file) {
    reader.readAsDataURL(file);
  }
});

// Edit account handling
const userInfos2 = document.querySelectorAll(".user-info2");

const editInfoBtn1 = document.querySelector(".edit-info-btn1");
const editInfoBtn2 = document.querySelector(".edit-info-btn2");
const editSelectBtn1 = document.querySelector(".edit-select-btn1");
const editSelectBtn2 = document.querySelector(".edit-select-btn2");

const accountEditExitBtn = document.querySelector(".account-edit-exit-btn");
const accountEditSubmitForm = document.querySelector(".first-info");

const accountEditExitBtn2 = document.querySelector(".account-edit-exit-btn2");
const accountEditSubmitForm2 = document.querySelector(
  ".second-info"
);

// botoes de ativar a edição
editInfoBtn1.addEventListener("click", (e) => {
  userInfos.forEach((input) => {
    input.removeAttribute("readonly");
    input.classList.add("account-input-active");

    editSelectBtn1.classList.add("edit-select-btn1-active");
  });
});


editInfoBtn2.addEventListener("click", (e) => {
  userInfos2.forEach((input) => {
    input.removeAttribute("readonly");
    input.classList.add("account-input-active");

    editSelectBtn2.classList.add("edit-select-btn2-active");
  });
});


// Botoes de cancelar a edição
accountEditExitBtn.addEventListener("click", () => {
  userInfos.forEach((input) => {
    input.setAttribute("readonly", "");
    input.classList.remove("account-input-active");

    editSelectBtn1.classList.remove("edit-select-btn1-active");

    nomeSobre.value =
      localStorage.getItem("nome") + " " + localStorage.getItem("sobrenome");

    userInfos.forEach((pTag) => {
      pTag.value = localStorage.getItem(pTag.id);
    });
  });
});



accountEditExitBtn2.addEventListener("click", () => {
  userInfos2.forEach((input) => {
    input.setAttribute("readonly", "");
    input.classList.remove("account-input-active");

    editSelectBtn2.classList.remove("edit-select-btn2-active");

  
    userInfos2.forEach((input2) => {
      input2.value = localStorage.getItem(input2.id);
    });
  });
});


// Botoes de atualizar as informações

accountEditSubmitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  userInfos.forEach((input) => {
    localStorage.setItem(input.id, input.value);
  });

  userInfos.forEach((input) => {
    input.setAttribute("readonly", "");
    input.classList.remove("account-input-active");

    editSelectBtn1.classList.remove("edit-select-btn1-active");

    nomeSobre.value =
      localStorage.getItem("nome") + " " + localStorage.getItem("sobrenome");

    userInfos.forEach((pTag) => {
      pTag.value = localStorage.getItem(pTag.id);
    });
  });
})


accountEditSubmitForm2.addEventListener("submit", (e) => {
  e.preventDefault();

  userInfos2.forEach((input) => {
    localStorage.setItem(input.id, input.value);
  });

  userInfos2.forEach((input) => {
    input.setAttribute("readonly", "");
    input.classList.remove("account-input-active");

    editSelectBtn2.classList.remove("edit-select-btn2-active");

  
    userInfos2.forEach((input2) => {
      input2.value = localStorage.getItem(input2.id);
    });
  });
})

// Delete account Button

const btnDeleteAccont = document.querySelector(".btn-delete-accont");

btnDeleteAccont.addEventListener("click", () => {
  localStorage.clear();
  window.location = "index.html"
}) 



// Sidebar Handling

const btnMobileSidebar = document.querySelector(".btn-mobile-sidebar");

const accountAsideMenu = document.querySelector(".account-aside-menu")

btnMobileSidebar.addEventListener("click", () => {
  accountAsideMenu.classList.toggle("show-sidebar")
})