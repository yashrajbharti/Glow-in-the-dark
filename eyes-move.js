const eyes = document.querySelectorAll(".eye");

const moveEyes = (x, y) => {
  const rect1 = eyes[0].getBoundingClientRect();
  const rect2 = eyes[1].getBoundingClientRect();

  const midX = (rect1.right + rect2.left) / 2;
  const midY = (rect1.top + rect1.bottom) / 2;

  const deltaX = x - midX;
  const deltaY = y - midY;
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  if (distance < 100) {
    eyes.forEach((eye) => (eye.style.transform = `translate(0px, 0px)`));
    return;
  }

  const maxOffset = 2;
  const moveX = Math.max(-maxOffset, Math.min(maxOffset, deltaX / 30));
  const moveY = Math.max(-maxOffset, Math.min(maxOffset, deltaY / 30));

  eyes.forEach((eye) => {
    eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
};

document.addEventListener("mousemove", (event) => {
  moveEyes(event.clientX, event.clientY);
});

document.addEventListener("touchmove", (event) => {
  const touch = event.touches[0];
  moveEyes(touch.clientX, touch.clientY);
});
