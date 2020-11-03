<html>
  <head>
    <title>Project Wave</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js"></script> <p5js>
     <script>
       
var snake;

function setup(){
  createCanvas(600, 600);
  snake = new Snake();
} 
       
function draw() {
  background(1);
  snake.update();
  snake.show();
  
  //fill(value);
  //rect(25, 25, 50, 50);
}
       
function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.ysspeed = 0;
  
  this.update = function() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  
  this.show = function(){
    fill(255)
    rect(this.x,this.y, 10,10);
  }
}
       
          

</script>
<style>

</style>
  </head>
  <body>
  </body>
</html>






