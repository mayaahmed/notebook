container = document.getElementById('container');  
pagesArray = new Array();
var n = 10;

/*
 pagesArray[0] = document.createElement("canvas");
 pagesArray[0].className= "page coverPage";
 container.appendChild(pagesArray[0]);
pagesArray[0].id= "page0";
*/

  for(var i=0; i<n; i++){
  pagesArray[i] = document.createElement("canvas");
  container.appendChild(pagesArray[i]);
  var string = "page"+i;
  pagesArray[i].id= string;
     pagesArray[i].className= "page";
    pagesArray[i].style.visibility="hidden";
   
  }
pagesArray[0].style.visibility="visible";
  pagesArray[0].className= "page coverPage";



function nextPage(k){

   var string1= "page"+k; 
  var t=k+1;
  var string2= "page"+t;
var s1= document.getElementById(string1);
var s2 = document.getElementById(string2);  
s1.innerHTML=string1;
s1.innerHTML=string2;
  
  if(k<4)  slideOpenPage(s1, s2);
  else if(k==4) 
location.reload(); 
  }




function slideOpenPage(el,newPage){
console.log(el);
 
el.style.transition="width 4s linear 0s";
el.style.width="0.5%";
 newPage.style.visibility="visible";
 
}


