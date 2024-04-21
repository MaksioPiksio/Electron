"use strict"    

const timeTag = document.querySelector("time");
const input =  document.querySelector(".activityInput");

function time(){
    let czas =new Date();
    if(czas.getMinutes().toString().length==1){
        var minuta="0"+czas.getMinutes();
    } else{
        var minuta=czas.getMinutes();
    }
    let godzina=czas.getHours()+":"+minuta;
    const timeTag = document.querySelector("time");
    if(timeTag!=null){
        timeTag.textContent=godzina;
    }
}
setInterval(time,1);
let i=0;
function dodaj(){
    let todoValue = document.querySelector(".activityInput").value;
    let activityWrapper = document.querySelector(".activityWrapper");
    let activity = document.createElement("div");
    activity.setAttribute("class","activity");
    let numer = document.createElement("div");
    numer.setAttribute("class","numer");
    let numer1 = document.createElement("div");
    numer1.setAttribute("class","numer1");numer.append(numer1)
    let deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type","button");
    deleteBtn.setAttribute("value","Delete Activity");
    deleteBtn.setAttribute("class","deleteBtn");
    if(todoValue.toString().length > 0){
        activity.textContent = todoValue;
        
        activityWrapper.append(numer,activity,deleteBtn);
        i++
        numer1.textContent = i;
        setTimeout(()=>{
            activity.style.height="92px";
            deleteBtn.style.height="92px";
            numer.style.height="92px";
        },10);
    } else{
        document.querySelector(".activityInput").placeholder = "ENTER ACTIVITY"
    }
    
    document.querySelector(".activityInput").value = null
}

input.addEventListener("keypress",function(e){
    if(e.key === "Enter") {
        dodaj()
    }
})