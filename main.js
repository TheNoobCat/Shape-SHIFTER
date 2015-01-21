function draw() {
  var canvas = document.getElementById('mainCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(250,250,10,10);
    ctx.clearRect(450,45,60,60);
    ctx.strokeRect(50,50,50,50);
    
  }
}
draw();