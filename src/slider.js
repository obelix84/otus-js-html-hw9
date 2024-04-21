const slides = document.getElementById('carousel')
  .querySelectorAll('li');

showSlide(0);
document.querySelector('.carousel-control-right').addEventListener('click', nextSlide);
document.querySelector('.carousel-control-left').addEventListener('click', previousSlide);
function nextSlide() {
  let next = 0;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].hasAttribute('data-current'))
      next = (i + 1) % slides.length;
  }
  showSlide(next);
}

function previousSlide() {
  let previous = 0;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].hasAttribute('data-current'))
      if (i === 0) previous = slides.length - 1;
      else previous = i - 1;
  }
  showSlide(previous);
}

function showSlide(slideNumber) {
  const currentSlide = document.querySelector('.carousel-item__active');
  currentSlide.removeAttribute('class');
  currentSlide.removeAttribute('data-current');
  currentSlide.setAttribute('class', 'carousel-item')
  slides[slideNumber].setAttribute('class', 'carousel-item__active');
  slides[slideNumber].setAttribute('data-current', 'true');
}

