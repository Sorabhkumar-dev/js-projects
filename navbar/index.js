const siderbar = document.getElementsByClassName("siderbar")[0];
const navBar = document.getElementsByClassName("nav_header")[0];
const navLogo = document.getElementsByClassName("logo")[0];
const btnSidebarClose = document.getElementById("btn_close");
const mainContainer = document.getElementsByClassName("main_container")[0];
const modal = document.getElementsByClassName("modal")[0];
const btnShowModal = document.getElementsByClassName("btn_modal")[0];
const btnClose = document.getElementsByClassName("btn_close")[0];



const btnHumburger = document.getElementsByClassName("btn_hambuger")[0];
const dropDown = document.getElementById("myDropdown");


const showMenu = () =>{
    dropDown.classList.toggle("show");
}

btnHumburger.addEventListener("click",(event) => {
   showMenu()
   event.stopPropagation()
})

window.onclick = function(event){
    if(!event.target.matches("btn_hambuger") && dropDown.classList.contains("show")){
        showMenu()
    }
}

const handleSize = () =>{
    siderbar.classList.toggle("show_siderbar");
    navBar.classList.toggle("show_navbar");
    modal.classList.toggle("margin_modal");
    btnShowModal.classList.toggle("margin_show_modal");
    mainContainer.classList.toggle("show_container"); 
}

navLogo.addEventListener("click",() => { 
    handleSize()
})

btnSidebarClose.addEventListener("click",() => {
    handleSize()
})

btnShowModal.addEventListener("click",() => {
    btnShowModal.classList.add("hide_btn")
    modal.classList.add("show_conainer")
})

btnClose.addEventListener("click", () => {
    btnShowModal.classList.remove("hide_btn")
    modal.classList.remove("show_conainer")
})