const answer1 = document.getElementsByClassName("answer_and_divider_section")[0];
const answer2 = document.getElementsByClassName("answer_and_divider_section")[1];
const answer3 = document.getElementsByClassName("answer_and_divider_section")[2];

const btnIcon1 = document.getElementById("more_icon1")
const btnIcon2 = document.getElementById("more_icon2")
const btnIcon3 = document.getElementById("more_icon3")


let flagIsExpand1 = false;
let flagIsExpand2 = false;
let flagIsExpand3 = false;

btnIcon1.addEventListener("click",() => {
    btnIcon1.style.width = "50px"
    btnIcon1.style.height = "50px"
    flagIsExpand1 = !flagIsExpand1
    if(flagIsExpand1){
        btnIcon1.src = "minus_icon.svg"
    }else {
        btnIcon1.src = "plus_icon.svg"
    }
    answer1.classList.toggle("hide_show_answer")

})

btnIcon2.addEventListener("click",() => {
    btnIcon2.style.width = "50px"
    btnIcon2.style.height = "50px"
    flagIsExpand2 = !flagIsExpand2
    if(flagIsExpand2){
        btnIcon2.src = "minus_icon.svg"
    }else {
        btnIcon2.src = "plus_icon.svg"
    }
    answer2.classList.toggle("hide_show_answer")
})

btnIcon3.addEventListener("click",() => {
    btnIcon3.style.width = "50px"
    btnIcon3.style.height = "50px"
    flagIsExpand3 = !flagIsExpand3
    if(flagIsExpand3){
        btnIcon3.src = "minus_icon.svg"
    }else {
        btnIcon3.src = "plus_icon.svg"
    }
    answer3.classList.toggle("hide_show_answer")
})