const bigCircle = document.querySelector('.big-circle');
const hide = document.querySelector('.hide');

bigCircle.addEventListener('mouseover', () => {
  hide.style.display = 'block';
});

bigCircle.addEventListener('mouseout', () => {
  hide.style.display = 'none';
});