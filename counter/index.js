const counterText = document.getElementById("counter")
const btnIncrement = document.getElementById("btnIcrement")
const btnReset = document.getElementById("btnReset")
const btnDecrement = document.getElementById("btnDecrement")

let counter = 0
counterText.innerHTML = `Start Counter`;

const changeText = (number) =>{
    counterText.innerHTML = number
}

const cahngeTextColor = (number) =>{
    if(number > 0){
        counterText.style.color = "#00ff00"
    }
    else if(number < 0){
        counterText.style.color = "#FF0000"
    }
    else{
        counterText.style.color = "#000000"
    }
}


btnIncrement.addEventListener("click",() => {
    ++counter;
    changeText(counter)
    cahngeTextColor(counter)
})

btnDecrement.addEventListener("click",() => {
    --counter;
    changeText(counter)
    cahngeTextColor(counter)
})

btnReset.addEventListener("click",() => {
    counter = 0;
    changeText(counter)
    cahngeTextColor(counter)
})