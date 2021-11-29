let startTime = new Date().getTime();

function getRandomColor () {
    let letters = "0123456789ABCDEF".split('');
    let color = "#";
   for ( let i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}
let makeShapeVisible = function(){
    let shape = document.getElementById("shape");
    let top = Math.floor(Math.random() * 250);
    let left = Math.floor(Math.random() * 400);
    let width = Math.floor(Math.random() * 200 + 50);
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.width = width + "px";
    if(Math.floor(Math.random() * 11) < 3) {
        shape.style.borderRadius = "0";
        shape.style.left = "0";
        shape.style.width = "0";
        shape.style.borderLeft = "50px solid transparent";
        shape.style.borderRight = "50px solid transparent";
        shape.style.borderBottom = "100px solid green";
        shape.style.backgroundColor = "transparent"
    } else if  (Math.floor(Math.random() * 11) >= 3 && Math.floor(Math.random() * 11) <= 7) {
        shape.style.borderRadius = "0";
        shape.style.backgroundColor = getRandomColor();
        shape.style.borderBottom = "0";
    } else if(Math.floor(Math.random() * 11) > 7) {
        shape.style.borderRadius = "50%";
        shape.style.backgroundColor = getRandomColor();
        shape.style.borderBottom = "0";
    } 
    shape.style.display = "block";
    startTime = new Date().getTime();
}
setTimeout(makeShapeVisible, Math.floor(Math.random() * 500))

document.getElementById("shape").onclick = function(){ 
    let shape = document.getElementById("shape");
    shape.style.display = "none";
    let finishTime =  new Date().getTime();
    document.getElementById("shape").style.display="none";
    let reactionTime = (finishTime - startTime) / 1000;
    document.getElementById("reactionTime").innerHTML = reactionTime + " second";
    setTimeout(makeShapeVisible, Math.floor(Math.random() * 1500))
}