const screen = document.querySelector(".screen")
const egual = document.querySelector(".egual")
const allBtn = document.querySelectorAll(".calcBody div")
const numbtn = document.querySelectorAll(".calcBody div:not(.one,.second)")
const rmvOne = document.querySelector(".calcBody>div:nth-child(2)")
const acBtn = document.querySelector(".calcBody>div:nth-child(1)")
    // const symbols = document.querySelectorAll(".second:not(.egual)")
const arth = document.querySelectorAll(".arth")
let screenBlank = true


const screenChange = (x) => {
    fontSize()

    if (x == "." && screen.textContent.charAt(screen.textContent.length - 1) == ".") {
        console.log("Multiple dots not valid")
    } else {
        if (screenBlank == true) {
            screen.textContent = x

            screenBlank = false
        } else {
            screen.append(x)
        }
    }
}

numbtn.forEach((e) => {
    e.addEventListener("click", (x) => {
        screenChange(x.target.textContent)
    })
})

acBtn.addEventListener("click", () => {
    screen.innerHTML = 0
    screenBlank = true
    screen.style.fontSize = `50px`
})

rmvOne.addEventListener("click", () => {

    if (screen.textContent.length == 1) {
        screen.textContent = 0
        screenBlank = true
    } else {
        screen.textContent = screen.textContent.slice(0, -1)
    }
})

egual.addEventListener("click", () => {
    try {
        if (screen.textContent.charAt(screen.textContent.length - 1)) {
            if (screen.textContent.charAt(0) == "=") {
                screen.textContent = `= ${eval(screen.textContent.slice(1))}`
            } else {
                screen.textContent = `= ${eval(screen.textContent)}`
            }
        }
    } catch (error) {
        screen.textContent = "Invalid Input"
        screen.style.fontSize = "20px"
        screenBlank = true
    }
})

arth.forEach((e) => {
    e.addEventListener("click", (x) => {
        if (x.target.innerHTML.length == 1) {
            screenChange(x.target.attributes.arth.value)
        } else {
            screenChange("/")
        }

    })
})

document.addEventListener("keydown", (x) => {

    if ("*/+-7894561230.".includes(x.key)) {
        screenChange(x.key)
    } else if (x.key == "Backspace") {
        if (screen.textContent.length == 1) {
            screen.textContent = 0
            screenBlank = true
        } else {
            screen.textContent = screen.textContent.slice(0, -1)
        }
    } else if (x.key == "Enter") {
        try {
            screen.textContent = `=${eval(screen.textContent)}`
        } catch (error) {
            console.log("Something Went Wrong")
        }
    }
})

const fontSize = () => {
    switch (screen.innerHTML.length) {
        case 10:
            screen.style.fontSize = `45px`
            break;
        case 11:
            screen.style.fontSize = `40px`
            break;
        case 12:
            screen.style.fontSize = `35px`
            break;
        case 13:
            screen.style.fontSize = `30px`
            break;
        case 14:
            screen.style.fontSize = `25px`
            break;
        case 15:
            screen.style.fontSize = `20px`
            break;
        default:
    }
}