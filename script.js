
// mouse replacement
const cursor = document.getElementById('touchy-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('active');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('active');
});


// the canvas drawing part
const canvas = document.getElementById('fluid');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;

function startDrawing(event) {
  isDrawing = true;
  context.beginPath();
  context.moveTo(
    event.clientX - canvas.getBoundingClientRect().left,
    event.clientY - canvas.getBoundingClientRect().top
  );
}

function draw(event) {
  if (!isDrawing) return;

  context.lineTo(
    event.clientX - canvas.getBoundingClientRect().left,
    event.clientY - canvas.getBoundingClientRect().top
  );
  context.stroke();
}

function stopDrawing() {
  isDrawing = false;
  context.closePath();
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

