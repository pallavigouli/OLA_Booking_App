let bikebtn = document.querySelector("div:nth-child(1) button");
let bikeinput = document.querySelector("div:nth-child(1) input");
let bikediv = document.querySelector("div:nth-child(1) .bikeDiv");

let carbtn = document.querySelector("div:nth-child(2) button");
let carinput = document.querySelector("div:nth-child(2) input");
let cardiv = document.querySelector("div:nth-child(2) .carDiv");

let autobtn = document.querySelector("div:nth-child(3) button");
let autoinput = document.querySelector("div:nth-child(3) input");
let autodiv = document.querySelector("div:nth-child(3) .autoDiv");

bikebtn.addEventListener("click", () => {
    let amount = bikeinput.value * 50;
    bikediv.innerText =  + amount;
});

autobtn.addEventListener("click", () => {
    let amount = autoinput.value * 100;
    autodiv.innerText = + amount;
});
carbtn.addEventListener("click", () => {
    let amount = carinput.value * 200;
    cardiv.innerText =  + amount;
});