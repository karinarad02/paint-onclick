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
