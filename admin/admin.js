const actionImgs = document.querySelectorAll(".action-img");
const trashBtn = document.querySelectorAll(".trash");
const addBtn = document.querySelector("#add-btn");

const trTags = document.querySelectorAll(".tr-class");
const searchInput = document.querySelector("#search-input");

const btnCancel = document.querySelector("#btn-cancel");

const adicionarBtn = document.querySelector("#adicionarBtn");
const addInput = document.querySelectorAll(".add-input");



const popup = document.querySelector(".popup");

const popupCards = document.querySelectorAll(".cards")

actionImgs.forEach((img) => {
    img.addEventListener("click", (e) => {
        let id = e.target.id

        console.log(id);

        
        popupCards.forEach((card) => {
            if (card.classList.contains(id)) {
                const inputs = document.querySelectorAll(`${id}-input`)
                console.log(card);
                const nome = document.querySelector(`nome${card.index}`)

                inputs.forEach((input) => {
                    if (input.id === nome)  {
                        input.value = nome;
                    }
                })

                popup.classList.toggle("show-flex")
                card.classList.toggle("show")
            }
        })
    })
})

addBtn.addEventListener("click", (e) => {
    popup.classList.toggle("show-flex")
    popupCards[0].classList.toggle("show")
})


const btnClose = document.querySelectorAll(".btn-close");

btnClose.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        popupCards.forEach((card) => {
            card.classList.remove("show")
        })
        popup.classList.remove("show-flex")
    })
})




trashBtn.forEach((trash) => {
    trash.addEventListener("click", (e) => {
        let parentTemp = e.target.parentNode;

        let parent = parentTemp.parentNode;

        parent.remove()

    }) 
})

btnCancel.addEventListener("click", (e) => {
    window.location = "../index.html"
})

// Search

searchInput.addEventListener("input", (e) => {
    let searchValue = e.target.value.toLowerCase()

    trTags.forEach((tr) => {
        const isVisible = tr.innerText.toLowerCase().includes(searchValue) 
        tr.classList.toggle("hide", !isVisible)
    })
})
