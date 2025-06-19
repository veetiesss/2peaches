document.querySelectorAll(".counter").forEach(counter => {
let add = counter.querySelector(".plus")
let decrease = counter.querySelector(".minus")
let amount = counter.querySelector(".amount")
let price = counter.querySelector(".price")
let allprice = Number(price.dataset.step) 
let oneprice = Number(price.dataset.step) 
let sum = 1

function ChangePrice(){
    allprice = oneprice * sum
    price.innerHTML = `Preis: ${allprice}€`
}

add.addEventListener("click", () => {
    sum++
    amount.innerHTML = sum
    ChangePrice()
})
decrease.addEventListener("click", () => {
    if (sum > 1){
    sum-- 
    amount.innerHTML = sum
    ChangePrice()
    }
})
})



let pizza = document.querySelector(".pizza")
let pasta = document.querySelector(".pasta")
let snacks = document.querySelector(".snacks")
let drinks = document.querySelector(".drinks")


pizza.addEventListener("click", () =>{
    let pizzacard = document.querySelectorAll(".pizzacard").forEach(pizzacard => {
        pizzacard.classList.remove("hidden")
    })
    let pastacard = document.querySelectorAll(".pastacard").forEach(pastacard => {
        pastacard.classList.add("hidden")
    })
    let snackcard = document.querySelectorAll(".snackcard").forEach(snackcard => {
        snackcard.classList.add("hidden")
    })    
    let drinkcard = document.querySelectorAll(".drinkcard").forEach(drinkcard =>{
        drinkcard.classList.add("hidden")
    })  
})

pasta.addEventListener("click", () =>{
    let pizzacard = document.querySelectorAll(".pizzacard").forEach(pizzacard => {
        pizzacard.classList.add("hidden")
    })
    let pastacard = document.querySelectorAll(".pastacard").forEach(pastacard => {
        pastacard.classList.remove("hidden")
    })
    let snackcard = document.querySelectorAll(".snackcard").forEach(snackcard => {
        snackcard.classList.add("hidden")
    })    
    let drinkcard = document.querySelectorAll(".drinkcard").forEach(drinkcard =>{
        drinkcard.classList.add("hidden")
    })  
})

snacks.addEventListener("click", () =>{
    let pizzacard = document.querySelectorAll(".pizzacard").forEach(pizzacard => {
        pizzacard.classList.add("hidden")
    })
    let pastacard = document.querySelectorAll(".pastacard").forEach(pastacard => {
        pastacard.classList.add("hidden")
    })
    let snackcard = document.querySelectorAll(".snackcard").forEach(snackcard => {
        snackcard.classList.remove("hidden")
    })    
    let drinkcard = document.querySelectorAll(".drinkcard").forEach(drinkcard =>{
        drinkcard.classList.add("hidden")
    })  
})

drinks.addEventListener("click", () =>{
    let pizzacard = document.querySelectorAll(".pizzacard").forEach(pizzacard => {
        pizzacard.classList.add("hidden")
    })
    let pastacard = document.querySelectorAll(".pastacard").forEach(pastacard => {
        pastacard.classList.add("hidden")
    })
    let snackcard = document.querySelectorAll(".snackcard").forEach(snackcard => {
        snackcard.classList.add("hidden")
    })    
    let drinkcard = document.querySelectorAll(".drinkcard").forEach(drinkcard =>{
        drinkcard.classList.remove("hidden")
    })  
})


let cart = document.querySelector(".cart1")
let modalwindow = document.querySelector(".modalwindow")
cart.addEventListener("click", () =>{
    modalwindow.classList.toggle("hidden")
    cart.classList.toggle("cart2")
})

let orderbutton = document.querySelector(".order")
let orderwindow = document.querySelector(".orderwindow")
let closebutton = document.querySelector(".close")
orderbutton.addEventListener("click", () => {
    orderwindow.classList.remove("hidden")
    modalwindow.classList.toggle("hidden")
})
closebutton.addEventListener("click", () =>{
    orderwindow.classList.add("hidden")
})

document.getElementById("send").addEventListener("click", () => {
    const name = document.getElementById("name").value 
    const date = document.getElementById("date").value 
    const totalPrice = document.getElementById("totalprice").textContent

    let count = Number(localStorage.getItem("formEntryCount")) || 0
    count++

    localStorage.setItem(`${count}_Name:`, name)
    localStorage.setItem(`${count}_Date:`, date)
    localStorage.setItem(`${count}_Gesamtpreis:`, totalPrice)
    localStorage.setItem("formEntryCount", count)

    document.getElementById("name").value = ""
    document.getElementById("date").value = ""
    displayTable()
})

function displayTable() {
    const tableBody = document.querySelector("#outputTable tbody")
    tableBody.innerHTML = ""

    const count = Number(localStorage.getItem("formEntryCount")) || 0

    for (let i = 1; i <= count; i++) {
        const name = localStorage.getItem(`${i}_Name:`)
        const date = localStorage.getItem(`${i}_Date:`)
        const totalPrice = localStorage.getItem(`${i}_Gesamtpreis:`)

        if(name !== null && date !== null && totalPrice !== null) {
            const tr = document.createElement("tr")

            const tdIndex = document.createElement("td")
            tdIndex.textContent = i

            const tdName= document.createElement("td")
            tdName.textContent = name
            const tdDate = document.createElement("td")
            tdDate.textContent = date
            const tdTotalPrice = document.createElement("td")
            tdTotalPrice.textContent = totalPrice

            tr.appendChild(tdIndex)
            tr.appendChild(tdName)
            tr.appendChild(tdDate)
            tr.appendChild(tdTotalPrice)

            tableBody.appendChild(tr)
        }
    }
}
document.addEventListener("DOMContentLoaded", displayTable)