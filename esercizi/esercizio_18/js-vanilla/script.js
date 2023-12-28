const buttonEl = document.querySelector("button");
const counterEl = document.querySelector(".counter");

buttonEl.addEventListener("click", ()=> {
    counterEl.innerHTML = parseInt(counterEl.textContent) + 1;
})