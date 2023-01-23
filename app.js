let colors=["green","red","skyblue","grey","pink"];
let body = document.body;
let btn = document.querySelector(".btn");
let innerText = document.querySelector(".Text");
const ham = document.querySelector(".ham");
const links = document.querySelector(".links");

btn.addEventListener("click",pickcolor);

function pickcolor(){
    let random = (Math.floor(Math.random()*colors.length))
    body.style.backgroundColor= colors[random];
    innerText.innerText=colors[random];
}
ham.addEventListener("click",openHam);
function openHam(){
    // links.style.display = "block"
}
    
