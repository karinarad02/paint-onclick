// Mouse replacement
const cursor = document.getElementById('touchy-cursor');

document.addEventListener('mousemove', (e) => {
  //we subtract 30 to position the custom cursor
  cursor.style.left = e.clientX-30 + 'px';
  cursor.style.top = e.clientY-30 + 'px';
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('active');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('active');
});


// The canvas drawing part
// "use strict";

// const canvas = document.getElementById("fluid");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const fluidSimulator = new FluidSimulator(canvas);

// let time = 0;
// let brushSize = 100;

// ctx.lineCap = "round";

// let mouseDown = false;

// window.addEventListener("mousedown", () => {
//   mouseDown = true;
// });

// window.addEventListener("mouseup", () => {
//   mouseDown = false;
// });

// window.addEventListener("touchstart", () => {
//   mouseDown = true;
// });

// window.addEventListener("touchend", () => {
//   mouseDown = false;
// });

// const mouse = { x: undefined, y: undefined };

// document.addEventListener("mousemove", (e) => {
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;

//   if (mouseDown) {
//     fluidSimulator.addVelocity(mouse.x, mouse.y);
//   }

//   draw();
// });

// document.body.addEventListener("touchmove", (e) => {
//   const touch = e.touches[0] || e.changedTouches[0];
//   mouse.x = touch.clientX;
//   mouse.y = touch.clientY;

//   if (mouseDown) {
//     fluidSimulator.addVelocity(mouse.x, mouse.y);
//   }

//   draw();
// });

// function resize() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   fluidSimulator.setResolution(canvas.width, canvas.height);

//   time = 0;
// }

// window.addEventListener("resize", resize);

// function draw() {
//   ctx.fillStyle = "red";
//   ctx.strokeStyle = `hsl(${time}, 100%, 50%)`;
//   ctx.lineWidth = 2;
//   ctx.shadowBlur = 30;
//   ctx.shadowColor = `hsl(${time}, 100%, 30%)`;

//   ctx.beginPath();

//   if (mouseDown) {
//     ctx.moveTo(mouse.x, mouse.y);

//     for (let i = 0; i < 60; i++) {
//       ctx.lineTo(
//         mouse.x + Math.random() * brushSize - brushSize / 2,
//         mouse.y + Math.random() * brushSize - brushSize / 2
//       );
//       ctx.moveTo(mouse.x, mouse.y);
//     }
//     ctx.moveTo(0, 0);
//   }
//   ctx.stroke();
// }

// function animate() {
//   fluidSimulator.update();
//   ctx.fillStyle = "rgba(0,0,0,0.035)";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   time++;

//   requestAnimationFrame(animate);
// }

// resize(); // Call resize once to initialize the fluid simulator
// animate();
