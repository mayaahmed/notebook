function init(){
  if(localStorage.pagesArray)
    pagesArray = JSON.parse(localStorage.savedPages);
  else  createPages();
}


container = document.getElementById('container');  
pagesArray = new Array();
 n = 11;

pagesArray[0] = document.createElement("canvas");
 container.appendChild(pagesArray[0]);
pagesArray[0].style.visibility="visible";
pagesArray[0].className= "page coverPage";
pagesArray[0].id= "page0";

function createPages(){
 for(var i=1; i<n; i++){
  pagesArray[i] = document.createElement("canvas");
  container.appendChild(pagesArray[i]);
  var string = "page"+i;
  pagesArray[i].id= string;
  if(i>0){
     pagesArray[i].className= "page";
    pagesArray[i].style.visibility="hidden";
  }
 }
}

localStorage.savedPages = JSON.stringify(pagesArray);





function reachPage(k){
  if(k > n-1) {alert("no no no"+n); k=0;}
  
var string= "page"+k; 
var s= document.getElementById(string);
hidePages(k);
openPage(s);
 
}

function hidePages(j){
  for(var i=0; i<n; i++){
    if(i != j){
      
  pagesArray[i].style.visibility="hidden";}
  }
}



function openPage(el){

el.style.transition="width 4s linear 0s";
el.style.width="350px";
el.style.visibility="visible";
}



