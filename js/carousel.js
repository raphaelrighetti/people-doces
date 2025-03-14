let index = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  index = (index + direction + totalItems) % totalItems;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}
