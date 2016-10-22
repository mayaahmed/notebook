// Drop down punjiri screen

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function slideOpen(el){
el.style= "-webkit-transition: height 0.5s ease-in 0s";
el.style.height="300px";
el.style.visibility="visible";
}

function slideClose(el){
el.style.transition="height 1.0s linear 0s";
el.style.height="0px";
el.style.border="none";
}




