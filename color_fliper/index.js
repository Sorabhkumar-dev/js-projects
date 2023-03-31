const mainContaner = document.getElementById("main_container")
const changeColorBtn = document.getElementById("btn")
const colorSpan = document.getElementById("colorId")

changeColorBtn.addEventListener("click", () => {
    let color = `#${Math.floor(Math.random()*16777215).toString(16)}`
    mainContaner.style.backgroundColor = color
    colorSpan.textContent   = color
})