import "./style.css";

import { GameInterface } from 'simple-canvas-library';

let gi = new GameInterface();

gi.addDrawing(
  function ({ ctx, width, height, elapsed }) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(1, 228, 249, 1)";
    ctx.lineWidth = 5;
    let x = 30 + ((elapsed / 10)) % width /2); 
    let y = 60 + ((elapsed /10)) % height /2);
for (let i = 0; i < 60; i++) {
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + 10);
  ctx.lineTo(x + 20, y + 10);
  x = x + 20;
  y = y + 10;
}

ctx.stroke();

gi.run();


