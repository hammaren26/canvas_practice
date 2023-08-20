
window.addEventListener('load', eventWindowLoaded, false);
let bullseye;

function eventWindowLoaded() {
   bullseye = new Image();
   bullseye.src = "point.png"
   bullseye.onload = eventAssetsLoaded;
}

function eventAssetsLoaded() {
   canvasApp();
}

function canvasApp() {
   let pointImage = new Image();
   pointImage.src = "point.png";
   function drawScreen() {
      context.fillStyle = '#EEEEEE';
      context.fillRect(0, 0, theCanvas.width, theCanvas.height);
      //Box
      context.strokeStyle = '#000000';
      context.strokeRect(1, 1, theCanvas.width - 2, theCanvas.height - 2);
      let t = player.t;
      let cx = 3 * (p1.x - p0.x)
      let bx = 3 * (p2.x - p1.x) - cx;
      let ax = p3.x - p0.x - cx - bx;
      let cy = 3 * (p1.y - p0.y);
      let by = 3 * (p2.y - p1.y) - cy;
      let ay = p3.y - p0.y - cy - by;
      let xt = ax * (t * t * t) + bx * (t * t) + cx * t + p0.x;
      let yt = ay * (t * t * t) + by * (t * t) + cy * t + p0.y;
      player.t += player.speed;
      if (player.t > 1) {
         player.t = 1;
      }
      //draw the points
      context.font = "10px sans";
      context.fillStyle = "#FF0000";
      context.beginPath();
      context.arc(p0.x, p0.y, 8, 0, Math.PI * 2, true);
      context.closePath();
      context.fill();
      context.fillStyle = "#FFFFFF";
      context.fillText("0", p0.x - 2, p0.y + 2);
      context.fillStyle = "#FF0000";
      context.beginPath();
      context.arc(p1.x, p1.y, 8, 0, Math.PI * 2, true);
      context.closePath();
      context.fill();
      context.fillStyle = "#FFFFFF";
      context.fillText("1", p1.x - 2, p1.y + 2);
      context.fillStyle = "#FF0000";
      context.beginPath();
      context.arc(p2.x, p2.y, 8, 0, Math.PI * 2, true);
      context.closePath();
      context.fill();
      context.fillStyle = "#FFFFFF";
      context.fillText("2", p2.x - 2, p2.y + 2);
      context.fillStyle = "#FF0000";
      context.beginPath();
      context.arc(p3.x, p3.y, 8, 0, Math.PI * 2, true);
      context.closePath();
      context.fill();
      context.fillStyle = "#FFFFFF";
      context.fillText("3", p3.x - 2, p3.y + 2);
      //Draw points to illustrate path
      points.push({ x: xt, y: yt });
      for (let i = 0; i < points.length; i++) {
         context.drawImage(pointImage, points[i].x, points[i].y, 1, 1);
      }
      context.closePath();
      player.x = xt - bullseye.width / 2;
      player.y = yt - bullseye.height / 2;
      context.drawImage(bullseye, player.x, player.y);
   }
   let p0 = { x: 60, y: 10 };
   let p1 = { x: 150, y: 350 };
   let p2 = { x: 300, y: 375 };
   let p3 = { x: 400, y: 20 };
   let player = { x: 0, y: 0, speed: .01, t: 0 };
   let points = new Array();
   theCanvas = document.getElementById("canvasOne");
   context = theCanvas.getContext("2d");
   function gameLoop() {
      window.setTimeout(gameLoop, 20);
      drawScreen()
   }
   gameLoop();
}