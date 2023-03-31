const siderbar = document.getElementsByClassName("siderbar")[0];
const navBar = document.getElementsByClassName("nav_header")[0];
const navLogo = document.getElementsByClassName("logo")[0];
const btnSidebarClose = document.getElementById("btn_close")


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

navLogo.addEventListener("click",() => {
    siderbar.classList.add("show_siderbar")
    navBar.classList.add("show_navbar")
})

btnSidebarClose.addEventListener("click",() => {
    siderbar.classList.remove("show_siderbar")
    navBar.classList.remove("show_navbar")
})