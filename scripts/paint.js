import { createNoise2D } from "https://cdn.skypack.dev/simplex-noise@4.0.0";

window.requestFrame = (() => {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    (callback => {
      window.setTimeout(callback, 1000 / 60);
    });
})();

const noise2D = createNoise2D();
const canvas = document.getElementById("paint");
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);

const context = canvas.getContext("2d");

const startTime = new Date().getTime();
const dripDist = 175;
const minSpeed = 1;
let currentTime = 0;

const dripsAmount = Math.floor(canvas.width / dripDist) + 2;

const colors = ['#add2ff', '#fdff6d', '#ff8868'];
let waves = [];
let currentWave = undefined;

if (colors.length > 0) {
  currentWave = createWave(0, colors[0])
  waves.push(currentWave);
}

function resizeCanvas() {
  canvas.setAttribute('width', window.innerWidth);
  canvas.setAttribute('height', window.innerHeight);
}

function createWave(colorIndex, color) {
  let drips = [];
  for (let i = 0; i < dripsAmount; i++) {
    drips.push(0);
  }

  return {
    drips: drips,
    color: color,
    colorIndex: colorIndex,
    isDone: false
  }
}

function render() {
  let now = new Date().getTime();
  currentTime = (now - startTime) / 10000;
  //context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < waves.length; i++) {
    let linePoints = [];
    //Create the line points
    for (let j = 0; j < waves[i].drips.length; j++) {
      waves[i].drips[j] += minSpeed + (noise2D((j * dripsAmount), currentTime) + 1);

      let linePoint = {
        x: dripDist * j,
        y: waves[i].drips[j]
      };

      linePoints.push(linePoint);

      //Check if any drip cross canvas height * [modifier]
      if (linePoint.y > (canvas.height * 1.6) && !waves[i].isDone) {
        waves[i].isDone = true;
      }
    }

    if (linePoints.length > 0) {
      //draw line
      context.beginPath();
      context.strokeStyle = waves[i].color;
      context.fillStyle = waves[i].color;
      context.moveTo(0, 0);
      context.lineTo(linePoints[0].x, linePoints[0].y);

      let p = 0;

      for (p = 1; p < linePoints.length - 2; p++) {
        var xc = (linePoints[p].x + linePoints[p + 1].x) / 2;
        var yc = ((linePoints[p].y + linePoints[p + 1].y) / 2);

        // draw the curve to using x and y values
        context.quadraticCurveTo(linePoints[p].x, linePoints[p].y, xc, yc);
      }

      // curve through the last two points
      context.quadraticCurveTo(linePoints[p].x, linePoints[p].y, linePoints[p + 1].x, linePoints[p + 1].y);
      context.lineTo(canvas.width, 0);
      context.stroke();
      context.fill();
    }
  }

  //Check if can add the next wave
  if (currentWave && currentWave.isDone) {
    let nextColorIndex = currentWave.colorIndex + 1;

    if (nextColorIndex >= colors.length) {
      nextColorIndex = 0;
    }

    currentWave = createWave(nextColorIndex, colors[nextColorIndex]);
    waves.push(currentWave);

    if (waves.length == 3) {
      //remove the first element and shift the rest
      waves.shift();
    }
  }

  requestFrame(render);
}

window.addEventListener('resize', resizeCanvas);

render();