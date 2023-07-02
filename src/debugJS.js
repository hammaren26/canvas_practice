const IMAGE_URL = 'https://media.tenor.com/fCvghb3z3MEAAAAi/pokemon-pikachu.gif';
const IMAGE_URL2 = 'https://media.tenor.com/-Uz6xHwMa4gAAAAj/snorlax-snorlax-pokemon.gif';

window.addEventListener('load', eventWindowLoaded, false);

function eventWindowLoaded() {
   canvasApp();
}

function canvasApp() {
   let message = "HTML5 Canvas";
   let canvas = document.getElementById("canvas");
   let context = canvas.getContext("2d");
   let colorStops = [
      { color: "#FF0000", stopPercent: 0 },
      { color: "#FFFF00", stopPercent: .125 },
      { color: "#00FF00", stopPercent: .375 },
      { color: "#0000FF", stopPercent: .625 },
      { color: "#FF00FF", stopPercent: .875 },
      { color: "#FF0000", stopPercent: 1 }
   ]



   function drawScreen() {
      //Background
      context.fillStyle = "#000000";
      context.fillRect(0, 0, canvas.width, canvas.height);

      //Text
      context.font = "90px impact"
      context.textAlign = "center";
      context.textBaseline = "middle";

      let metrics = context.measureText(message);
      let textWidth = metrics.width;
      let xPosition = (canvas.width / 2);
      let yPosition = (canvas.height / 2);
      let gradient = context.createLinearGradient(
         canvas.width / 2,
         0,
         canvas.width / 2,
         canvas.height
      );

      for (let i = 0; i < colorStops.length; i++) {
         let tempColorStop = colorStops[i];
         let tempColor = tempColorStop.color;
         let tempStopPercent = tempColorStop.stopPercent;
         gradient.addColorStop(tempStopPercent, tempColor);
         tempStopPercent += .015;
         if (tempStopPercent > 1) {
            tempStopPercent = 0;
         }
         tempColorStop.stopPercent = tempStopPercent;
         colorStops[i] = tempColorStop;
      }
      context.fillStyle = gradient;
      context.fillText(message, xPosition, yPosition);
   }

   function gameLoop() {
      window.setTimeout(gameLoop, 40);
      drawScreen()
   }

   gameLoop();
}