const numKeys = [...document.querySelectorAll(".num")];
const opKeys = [... document.querySelectorAll(".op")];
const resKey = document.querySelector(".res");
const display = document.querySelector("#show-display");
const backspace = document.querySelector("#kdelete");
const equal = document.querySelector(".res")

let sinal = false


numKeys.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false;
        if (display.innerHTML == "0") {
            display.innerHTML = ""
        }
        display.innerHTML += evt.target.innerHTML  
    })
})

opKeys.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (!sinal) {
            sinal = true
        if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
        if (evt.target.innerHTML == "x") {
            display.innerHTML += "*"
        }else {
            display.innerHTML += evt.target.innerHTML
        }
    }
         
    })
})

backspace.addEventListener("click", (evt) => {
    sinal = false
    display.innerHTML = "0" 
})

equal.addEventListener("click", (evt) => {
    sinal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})
