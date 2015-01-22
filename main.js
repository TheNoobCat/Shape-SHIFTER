var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');

var square1 = {
    x: 200, 
    y: 200,
    width: 20,
    height: 20
};

setInterval(function(){
    /*square1.x = square1.x + 1;
    ctx.clearRect(0,0,600,500);
    ctx.strokeRect(square1.x, square1.y, square1.width, square1.height);*/
},1000/30);

function addSquare(width, height) {
  var square = {
    x: 300, 
    y: 250,
    width: width,
    height: height
  };
  ctx.strokeRect(square.x, square.y, square.width, square.height);
  console.log("working");
};

$('form').submit(function(){
  console.log("submitted");
  ctx.clearRect(0,0,600,500);
  var formWidth = $('#width').val();
  var formHeight = $('#height').val();
  addSquare(formWidth,formHeight);
  return false;
});