let inp  = document.querySelector(".input")
let a = document.querySelector(".btn")
let b = document.querySelector(".btn1")
let c = document.querySelector(".btn2")
let d = document.querySelector(".btn3")
let e = document.querySelector(".btn4")
let f = document.querySelector(".btn5")
let text = document.querySelector(".h1")
let h2 = document.querySelector("h2") 





a.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.toUpperCase()
}

b.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.toLowerCase()
}
c.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = `${inpvalue.charAt(0).toUpperCase()}${inpvalue.slice(1)}`
}
d.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.italics()

}
e.onclick = () => {
    let inpvalue = inp.value
    h2.innerHTML = inpvalue.bold()
}
f.onclick = () => {
    let inpvalue = inp.value
    h2.style.textDecoration = "underline";
    h2.innerHTML = inpvalue.toUpperCase()
}
