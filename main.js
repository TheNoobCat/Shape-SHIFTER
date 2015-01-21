var square1 = {
    x: 200, 
    y: 200,
    width: 20,
    height: 20
};
function draw() {
  var canvas = document.getElementById('mainCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);

  }
}
draw();
setInterval(function(){	
    draw();
    square1.x = square1.x + 1;
},1000/30);

