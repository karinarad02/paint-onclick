// Mouse replacement
// const cursor = document.getElementById('touchy-cursor');

// document.addEventListener('mousemove', (e) => {
//   cursor.style.left = e.clientX + 'px';
//   cursor.style.top = e.clientY + 'px';
// });

// document.addEventListener('mousedown', () => {
//   cursor.classList.add('active');
// });

// document.addEventListener('mouseup', () => {
//   cursor.classList.remove('active');
// });
//!!!!!!!!!!!!!!!!!!!!CAN'T DRAW WITH CUSTOM CURSOR!!!!!!!!!!!!!!

// The canvas drawing part
const canvas = document.getElementById('fluid');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function startDrawing(event) {
  isDrawing = true;
  [lastX, lastY] = [event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top];
  context.beginPath();
  context.moveTo(lastX, lastY);
}

function draw(event) {
  if (!isDrawing) return;

  const [x, y] = [event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top];

  context.lineJoin = 'round';
  context.lineCap = 'round';
  context.lineWidth = 10; // Increase the line width for a fire-like effect
  const gradient = context.createLinearGradient(lastX, lastY, x, y);
  gradient.addColorStop(0, 'orange'); // Starting color
  gradient.addColorStop(0.2, 'red'); // Middle color
  gradient.addColorStop(0.4, 'orange'); // Middle color
  gradient.addColorStop(0.6, 'red'); // Middle color
  gradient.addColorStop(0.8, 'orange'); // Middle color
  gradient.addColorStop(1, 'red'); // Ending color
  context.strokeStyle = gradient;

  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(x, y);
  context.stroke();

  [lastX, lastY] = [x, y];
}

function stopDrawing() {
  isDrawing = false;
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
