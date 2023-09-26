
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


// when the mouse is clicked and dragged, the background will become painted
const canvas = document.getElementById('fluid');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to match the container
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let isDrawing = false;

    // Function to draw on the canvas
    function draw(e) {
      if (!isDrawing) return;
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
      ctx.lineTo(
        e.clientX - canvas.getBoundingClientRect().left + 1,
        e.clientY - canvas.getBoundingClientRect().top + 1
      );
      ctx.stroke();
    }

    canvas.addEventListener('mousedown', () => {
      isDrawing = true;
    });

    canvas.addEventListener('mousemove', draw);

    document.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    
    // document.addEventListener('mousedown', () => {
    //     document.addEventListener('mousemove', paintBackground);
    //     document.addEventListener('mouseup', removePaintListener);
    //   });
  
    //   function removePaintListener() {
    //     document.removeEventListener('mousemove', paintBackground);
    //     document.removeEventListener('mouseup', removePaintListener);
    //   }

