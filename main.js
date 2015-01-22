var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');

function addSquare(width, height) {
   var square = {
      x: 300, 
      y: 250,
      width: width,
      height: height
  };
  ctx.strokeRect(square.x, square.y, square.width, square.height);
};


// Executes when the form is submitted
$('form').submit(function(){
  
  // Clears previous rectangle
  ctx.clearRect(0,0,600,500);

  // Stores values from the input
  var formWidth = $('#width').val();
  var formHeight = $('#height').val();

  // Clears the input from the form
  $('#width').val("");
  $('#height').val("");

  // Calls the addSquare function that is declared above
  addSquare(formWidth,formHeight);

  // Stops the page from refreshing
  return false;
});