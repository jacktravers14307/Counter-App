let count = 0
let currentInt = document.getElementById("currentInt")
let saved = document.getElementById("saved")


function increment(){
    count += 1
    currentInt.textContent = count
}

function decrement(){
    count -= 1
    currentInt.textContent = count
}

function save(){
    saved.textContent = saved.textContent + " " + "["+ count + "]"
}