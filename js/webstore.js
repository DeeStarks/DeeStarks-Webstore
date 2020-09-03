document.getElementById("chat").onclick = function(){
        document.getElementById("chatScreen").style.display = "block";
}

document.getElementById("closeChat").onclick = function(){
    document.getElementById("chatScreen").style.display = "none";
    document.getElementById("inboxContainer").innerHTML = "";
}

document.getElementById("sendChat").onclick = function(){

    let node = document.createElement("p");
    let inputText = document.getElementById("chatInput").value;
    let createText = document.createTextNode(inputText)

    node.appendChild(createText);
    document.getElementById("inboxContainer").appendChild(node);

    let createdChatElement = document.getElementById("inboxContainer").appendChild(node);

    createdChatElement.style.borderRadius = "10px";

    createdChatElement.style.borderTopRightRadius = "0px";

    createdChatElement.style.backgroundColor = "rgb(255, 158, 123)";
    
    createdChatElement.style.float = "right"

    createdChatElement.style.color = "black"

    createdChatElement.style.width = "150px"

    createdChatElement.style.padding = "5px"
    
    createdChatElement.style.fontSize = "15px"
    
    createdChatElement.style.margin = "2px"
    
    createdChatElement.style.paddingLeft = "10px"
    
    document.getElementById("chatInput").value = ""
}

function scrollNav(){
    let scrollCheck = document.getElementById("scroll");
    let yOffset = window.pageYOffset;

    if(yOffset > 180){
        scrollCheck.style.opacity = "1";
        scrollCheck.style.marginTop = "0";
    }else{
        scrollCheck.style.opacity = "0";
        scrollCheck.style.marginTop = "-60px";
    }
}

document.addEventListener("scroll", scrollNav)


function scrollCollect(){
    let scrollCheck = document.getElementById("scrollCollection");
    let cOffset = window.pageYOffset;

    if(cOffset > 150){
        scrollCheck.style.opacity = "1";
        scrollCheck.style.marginTop = "0";
    }else{
        scrollCheck.style.opacity = "0";
        scrollCheck.style.marginTop = "40px";
    }
}

document.addEventListener("scroll", scrollCollect)


function scrollCollt1(){
    let scrollCheck = document.getElementById("scrollCollection1");
    let cOffset = window.pageYOffset;

    if(cOffset > 150){
        scrollCheck.style.opacity = "1";
        scrollCheck.style.marginTop = "0";
    }else{
        scrollCheck.style.opacity = "0";
        scrollCheck.style.marginTop = "40px";
    }
}

document.addEventListener("scroll", scrollCollt1)


function scrollCollt2(){
    let scrollCheck = document.getElementById("scrollCollection2");
    let cOffset = window.pageYOffset;

    if(cOffset > 150){
        scrollCheck.style.opacity = "1";
        scrollCheck.style.marginTop = "0";
    }else{
        scrollCheck.style.opacity = "0";
        scrollCheck.style.marginTop = "40px";
    }
}

document.addEventListener("scroll", scrollCollt2)


function scrollCollt3(){
    let scrollCheck = document.getElementById("scrollCollection3");
    let cOffset = window.pageYOffset;

    if(cOffset > 150){
        scrollCheck.style.opacity = "1";
        scrollCheck.style.marginTop = "0";
    }else{
        scrollCheck.style.opacity = "0";
        scrollCheck.style.marginTop = "40px";
    }
}

document.addEventListener("scroll", scrollCollt3);


let shopScroll = document.getElementById("shop_box1_container3");

document.getElementById("slideBack").onclick = function(){
    $(shopScroll).animate({ scrollLeft: "-=200px" }, "slow");
}