//بسم الله الرحمن الرحيم
let $ = document
//mode buttons
let lightMode = $.getElementById("mL")
let darkMode = $.getElementById("mD")
//changeable elements
let title =$.getElementById("title")
let m = $.querySelectorAll("#theM")
let mBg = $.getElementsByClassName("the_Mode")
let body = $.body


//storage
lightMode.onclick = function(){
window.localStorage.setItem("bg","#F6E9D7")
window.localStorage.setItem("barBg","#6A4A2F")
window.localStorage.setItem("title","#82562C")
window.localStorage.setItem("ldText","antiquewhite")
window.location.reload()
}
//dark mode
darkMode.onclick = function(){
window.localStorage.setItem("bg","#6A4A2F")
window.localStorage.setItem("barBg","#F6E9D7")
window.localStorage.setItem("title","antiquewhite")
window.localStorage.setItem("ldText","#82562C")
window.location.reload()

}
//give values for each element
title.style.color = window.localStorage.getItem("title")
m.forEach((element)=>{
    element.style.color=window.localStorage.getItem("ldText")
})
mBg[0].style.backgroundColor = window.localStorage.getItem("barBg")
body.style.backgroundColor = window.localStorage.getItem("bg")  
/////////////---the game----/////
//imGs click
let rockImg = $.getElementById("theRock")
let paperImg   = $.querySelector("#thePaper")
let scissorsImg = $.getElementById("theScissors")
//setup  choice
let choices = ["theRock","thePaper","theScissors"]
let [theRock,thePaper,theScissors] = choices
//human first
let userChoice = ""
rockImg.onclick = function(){
userChoice = theRock
}
paperImg.onclick = function(){
userChoice = thePaper
}
scissorsImg.onclick = function(){
userChoice = theScissors
}
///pc choices

let random = parseInt(Math.random()*choices.length)
let pcChoice = choices[random]
//setup images and memes
let theStitation = $.getElementById("rImg")
let userImg = $.getElementById("theUser")
let pcImg = $.getElementById("thePc")
let theReasaulte = $.getElementById("reasalte")
let data = $.getElementById("data")
let theReplay = $.getElementById("replay")
//replay
theStitation.onclick = function(){
    location.reload()
}
//time
let second = 5
let time = $.getElementById("time")
let counter = setInterval(() => {
if(second <= 0){
    
    clearInterval(counter)
    second = 1
}
time.textContent = `${--second}s`

}, 1000);
//i don t have anything to name this
setTimeout(() => {
theGame()
}, 5000);
function theGame(){
//pc choices rotate
if(pcChoice===thePaper){
$.getElementById("pPc").style.rotate = "45deg"
$.getElementById("pPc").style.transform = "scale(2)"

}
else if(pcChoice === theRock){
$.getElementById("rPc").style.rotate = "45deg"
$.getElementById("rPc").style.transform = "scale(2)"

}
else if(pcChoice === theScissors){
 $.getElementById("cPc").style.rotate = "45deg"
 $.getElementById("cPc").style.transform = "scale(2)"

}
//Condetions
//draw
if(userChoice === pcChoice){
resizeIcons()
userImg.src = "assets/user/usDraw.jpeg"
pcImg.src = "assets/user/pcDraw.jpeg"
theReasaulte.textContent = `Draw 😧`
data.textContent = `Our choices are${pcChoice} `
theReplay.textContent = "click Down to replay"
theStitation.src = "assets/theReaslte/draw.webp"
}
//lose
else if(userChoice === theScissors && pcChoice === theRock ||
        userChoice === thePaper    && pcChoice === theScissors||
        userChoice === theRock     && pcChoice == thePaper
){
resizeIcons()
userImg.src = "assets/user/userLose.jpeg"
pcImg.src = "assets/user/lose.gif"
theReasaulte.textContent = `Lose 💔😭😭`
data.textContent = `Pc choice ${pcChoice}`
theReplay.textContent = "click Down to replay"
theStitation.src = "assets/theReaslte/lose.gif"
}
//win 
else if(userChoice === theScissors && pcChoice === thePaper ||
        userChoice === thePaper    && pcChoice === theRock||
        userChoice === theRock     && pcChoice == theScissors 
){
resizeIcons()
userImg.src = "assets/user/win.gif"
pcImg.src = "assets/user/pcLose.png"
theReasaulte.textContent = `Win 🎉🎉❤️`
data.textContent = `Pc choice ${pcChoice}`
theReplay.textContent = "click Down to replay"
theStitation.src = "assets/theReaslte/win.gif"
}
else{
    window.alert("you Done choice anything")
    location.reload()
}

}
//user choices style
function resizeIcons(){
if(userChoice === theRock){
rockImg.style.transform = "scale(2)"
}
else if(userChoice === thePaper){
paperImg.style.transform = "scale(2)"
}
else if(userChoice === theScissors){
scissorsImg.style.transform = "scale(2)"
scissorsImg.style.rotate = "-180deg"
}
}


























