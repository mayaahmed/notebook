var canvas = document.getElementById('page0');
var context= canvas.getContext('2d'); 


context.lineWidth=radius*2; 

var p = 5;

var radius=10;

var dragging = false;



function choosePage(){
 p =document.getElementById("pageNumber").value;
 for(var j=0; j<p; j++){ setTimeout(nextPage(j),300);}
 string= "page"+p; 
canvas = document.getElementById(string);
console.log(canvas); console.log(string);
context=canvas.getContext('2d');
context.lineWidth=radius*2;
console.log(context);
check();
}



var setRadius=function(newRadius){
  if(newRadius<minRad)
    newRadius=minRad;
  else if(newRadius>maxRad)
    newRadius=maxRad;
  radius=newRadius;
  context.lineWidth=radius*2;
  radSpan.innerHTML=radius;
}

 var  newButton = document.getElementById('new');
newButton.addEventListener('click', function(){
    context.clearRect(0,0,canvas.width,canvas.height);
});  

 


var minRad=0.5, maxRad=100, defaultRad=3, interval=1;
var radSpan=document.getElementById('radval');
var decRad=document.getElementById('decrad');
var  incRad=document.getElementById('incrad');

decRad.addEventListener('click',function(){
      setRadius(radius-interval); });
incRad.addEventListener('click',function(){
      setRadius(radius+interval); });
setRadius(defaultRad);


function  getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect(), // abs. size of element
      scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
      scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

  return {
    x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
      y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
  }
}



var putPoint=function(e){
  var pos = getMousePos(canvas, e);

  if(dragging){
  
     context.lineTo(pos.x, pos.y);
    context.stroke();
  context.beginPath();
  context.arc(pos.x,pos.y, radius, 0, Math.PI*2);
  context.fill();
  context.beginPath();
  context.moveTo(pos.x, pos.y);
  }
}

var erasePoint=function(e){
 
 var pos = getMousePos(canvas, e);
  if(dragging){

    context.clearRect(e.clientX- rect.left, e.clientY- rect.top,20,20);
    context.moveTo(pos.x,pos.y);
  }
}



  var engage = function(e){
    dragging=true;
    if(pen==0)  putPoint(e);
    else if(pen==1)  erasePoint(e);
  }

var disengage = function(){
    dragging=false;
    context.beginPath();
  }

var pen=0;
check();

function changePen(){
  pen=1;
  alert(pen); check();
}


function check(){
console.log(canvas);
canvas.addEventListener("mousedown",engage);
canvas.addEventListener("mouseup",disengage);

if(pen==0){
canvas.addEventListener("mousemove",putPoint);
}
if(pen==1)
canvas.addEventListener("mousemove",erasePoint);
} 


