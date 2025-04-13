let btnEL = document.querySelector("button");
let headingEL = document.querySelector("h2");

btnEL.addEventListener("click", () => {
    btnEL.classlist.add("hide");
    headingEL.textContent = "Jestem początkującym front end developerem uczącym sie html,css oraz js od ponad 6 lat"
})