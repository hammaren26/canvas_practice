const IMAGE_URL = 'https://media.tenor.com/fCvghb3z3MEAAAAi/pokemon-pikachu.gif';
const IMAGE_URL2 = 'https://media.tenor.com/-Uz6xHwMa4gAAAAj/snorlax-snorlax-pokemon.gif';


window.addEventListener('load', eventWindowLoaded, false);
function eventWindowLoaded() {
   // canvasApp();


   var c = document.getElementById("canvas");
   var ctx = c.getContext("2d");

   var tileSheet = new Image();
   tileSheet.src = "pic_the_scream.jpg";



   tileSheet.addEventListener('load', function (e) {
      ctx.drawImage(tileSheet, 90, 130, 50, 60, 10, 10, 50, 60);
   });




}

function canvasApp() {
   let canvas = document.getElementById("canvas");
   let context = canvas.getContext("2d");
   var tileSheet = new Image();
   // tileSheet.src = "image-093.png";
   tileSheet.src = "image-101.png";
   tileSheet.addEventListener('load', eventSheetLoaded, false);


   var mapIndexOffset = -1;
   var mapRows = 10;
   var mapCols = 10;


   let tileMap = [
      [1, 2, 2, 2, 0, 6, 6, 6, 6, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [6, 0, 23, 0, 23, 0, 23, 0, 0, 6],
      [6, 23, 23, 0, 23, 0, 23, 23, 0, 6],
      [6, 0, 0, 0, 23, 0, 0, 23, 0, 6],
      [6, 0, 0, 0, 23, 23, 0, 23, 0, 6],
      [6, 0, 0, 0, 0, 0, 0, 23, 0, 6],
      [0, 0, 23, 0, 23, 0, 0, 23, 0, 6],
      [6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [6, 6, 6, 6, 0, 6, 6, 6, 6, 6],
   ]

   function eventSheetLoaded() {
      drawScreen();
   }

   function drawScreen() {
      for (var rowCtr = 0; rowCtr < mapRows; rowCtr++) {
         for (var colCtr = 0; colCtr < mapCols; colCtr++) {
            var tileId = tileMap[rowCtr][colCtr] + mapIndexOffset;
            var sourceX = Math.floor(tileId % 8) * 32;
            var sourceY = Math.floor(tileId / 8) * 32;
            context.drawImage(tileSheet, sourceX,
               sourceY, 32, 32, colCtr * 32, rowCtr * 32, 32, 32);
         }
      }
   }

   function startUp() {
      gameLoop();
   }

   function gameLoop() {
      window.setTimeout(gameLoop, 100);
      drawScreen();
   }

}