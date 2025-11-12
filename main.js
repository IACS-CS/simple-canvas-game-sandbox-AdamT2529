import "./style.css";

import { GameInterface } from "simple-canvas-library";

let gi = new GameInterface();

let top = 0;
let left = 0;

gi.addDrawing(function ({ ctx, width, height, stepTime }) {
  ctx.strokeStyle = 'rgba(0, 247, 255, 1)';
  ctx.beginPath();
  ctx.lineWidth = 5;
  let x = left;
  let y = top;
  // Make a staircase pattern across the screen
  for (let i = 0; i < 60; i++) {
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 10);
    ctx.lineTo(x + 20, y + 10);
    x += 20;

    y += 10;
  }

  ctx.stroke();
  // Update staircase position for next frame
  top += stepTime * 0.05;
  left += stepTime * 0.1;

  if(top > height) {
    top = 0;
  }
  if (left > width) {
    left = 0;
  }

});
 
gi.run();
