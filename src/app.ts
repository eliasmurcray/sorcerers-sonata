import Camera from "./Camera";
import Player from "./Player";
import "./style.css";
import { get } from "./util";

// Set up globals
let assets: {
  [key: string]: HTMLCanvasElement;
} = {};
const palette = {
  player_skin_tone: [245, 216, 166],
  asset_background: [0, 0, 0, 0],
};

// Create canvas
const gameWrapper = document.getElementById("game-wrapper") as HTMLDivElement;
const canvas: HTMLCanvasElement = document.createElement("canvas");
const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
gameWrapper.appendChild(canvas);

// Setup player
const player = new Player(300, 300);
player.bindEventListeners(canvas);

let scene: () => void;

let shake = 0;
const camera = new Camera(0, 0, 0, 1200, 0, 1200, canvas);
function game() {
  // Render objects
  ctx.save();
  ctx.translate(
    (camera.x + shake * Math.random()) | 0,
    (camera.y + shake * Math.random()) | 0
  );
  if (shake) {
    shake *= shake > 1 ? 0.8 : 0;
  }
  ctx.drawImage(assets.background, 0, 0);
  player.render(ctx, assets);
  ctx.restore();

  // Update game state
  camera.lookAt(player.x, player.y);
  player.update([]);
}

let loadAssets = (function () {
  let assetsToLoad = {
    background() {
      let capturedCanvas = document.createElement("canvas");
      capturedCanvas.width = 1200;
      capturedCanvas.height = 1200;
      let capturedCtx = capturedCanvas.getContext("2d");

      capturedCtx.fillStyle = "rgb(31, 105, 27)";
      capturedCtx.strokeStyle = "rgb(21, 84, 17)";
      for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
          capturedCtx.fillRect(j * 44, i * 44, 44, 44);
          capturedCtx.strokeRect(j * 44, i * 44, 44, 44);
        }
      }
      return capturedCanvas;
    },
    crate() {
      ctx.fillStyle = `rgb(${palette.asset_background.join(",")})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgb(94, 54, 14)";
      ctx.lineWidth = 3;
      ctx.fillStyle = "rgb(158, 117, 76)";
      ctx.fillStyle = "rgb(158, 117, 76)";
      ctx.fillRect(1, 1, 61, 61);
      ctx.strokeRect(1, 1, 61, 61);
      ctx.fillRect(12, 12, 40, 40);
      ctx.strokeRect(12, 12, 40, 40);
      ctx.fillRect(12, 12, 10, 40);
      ctx.strokeRect(12, 12, 10, 40);
      ctx.fillRect(22, 12, 10, 40);
      ctx.strokeRect(22, 12, 10, 40);
      ctx.fillRect(32, 12, 10, 40);
      ctx.strokeRect(32, 12, 10, 40);

      // Draw lines on the canvas
      ctx.beginPath();
      ctx.moveTo(3, 3);
      ctx.lineTo(12, 12);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(60, 60);
      ctx.lineTo(51, 51);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(60, 3);
      ctx.lineTo(51, 12);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(3, 60);
      ctx.lineTo(12, 51);
      ctx.stroke();
      return get(canvas, 0, 0, 64, 64);
    },
    player_body() {
      ctx.fillStyle = `rgb(${palette.asset_background.join(",")})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 3;
      ctx.fillStyle = `rgb(${palette.player_skin_tone.join(",")})`;
      ctx.beginPath();
      ctx.ellipse(19, 19, 34 / 2, 34 / 2, 0, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.ellipse(14, 18, 7 / 2, 7 / 2, 0, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(26, 18, 7 / 2, 7 / 2, 0, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      return get(canvas, 0, 0, 38, 38);
    },
  };
  let index = 0;
  let keys = Object.keys(assetsToLoad);
  return function () {
    if (index < keys.length) {
      let key = keys[index++];
      assets[key] = assetsToLoad[key]();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      scene = game;
    }
  };
})();

scene = loadAssets;

const FPS = 60;
const FRAME_TIME = 1000 / FPS;
let then = window.performance.now();

function animationLoop(now: number) {
  requestAnimationFrame(animationLoop);

  let elapsed = now - then;
  if (elapsed > FRAME_TIME) {
    then = now - (elapsed % FRAME_TIME);
    scene();
  }
}

requestAnimationFrame(animationLoop);
