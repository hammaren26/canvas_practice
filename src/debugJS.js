

window.addEventListener('load', eventWindowLoaded, false);

function eventWindowLoaded() {
   canvasApp();
}


function canvasApp() {
   var pointImage = new Image();
   pointImage.src = "point.png";

   function drawScreen() {
      context.fillStyle = '#EEEEEE';
      context.fillRect(0, 0, theCanvas.width, theCanvas.height);
      //Box
      context.strokeStyle = '#000000';
      context.strokeRect(1, 1, theCanvas.width - 2, theCanvas.height - 2);
      ball.x = circle.centerX + Math.cos(circle.angle) * circle.radius;
      ball.y = circle.centerY + Math.sin(circle.angle) * circle.radius;
      circle.angle += ball.speed;
      circle.radius += radiusInc;
      //Draw points to illustrate path
      points.push({ x: ball.x, y: ball.y });
      for (var i = 0; i < points.length; i++) {
         context.drawImage(pointImage, points[i].x, points[i].y, 1, 1);
      }
      context.fillStyle = "#000000";
      context.beginPath();
      context.arc(ball.x, ball.y, 15, 0, Math.PI * 2, true);
      context.closePath();
      context.fill();
   }

   var radiusInc = 2;
   var circle = { centerX: 150, centerY: 100, radius: 2, angle: 0, radiusInc: 1.1 }
   var ball = { x: 0, y: 0, speed: .1 };
   var points = new Array();

   theCanvas = document.getElementById("canvasOne");
   context = theCanvas.getContext("2d");

   function gameLoop() {
      window.setTimeout(gameLoop, 20);
      drawScreen()
   }

   gameLoop();
}