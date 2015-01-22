var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');

var square1 = {
    x: 200, 
    y: 200,
    width: 20,
    height: 20
};

setInterval(function(){
    square1.x = square1.x + 1;
    ctx.clearRect(0,0,600,500);
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
},1000/30);

