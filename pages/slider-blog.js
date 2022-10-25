const blogContainer = document.querySelector('.blog');
const blogSlider = blogContainer.querySelector('.blog__slider');
const blogSliderContainer = blogContainer.querySelector('.blog__slider-container');
const blogWrapper = blogContainer.querySelector('.blog__wrapper');
const elementsSlides = blogContainer.querySelectorAll('.element');
// const widthSlide = screen.width;


if (width < 767) {
  blogSlider.classList.add('slider','blog-slider');
  blogSlider.setAttribute('data-slider', true);
  blogSliderContainer.classList.add('slider__container', 'blog-slider__container');
  console.log(blogSlider.getAttribute('data-slider'));

  blogWrapper.classList.add('slider__items');
  blogWrapper.classList.remove('wrapper');
  elementsSlides.forEach(function (item) {
    item.classList.add('slider__item', 'blog-slider__item');
  });

} else {
  blogSlider.classList.remove('slider','blog-slider');
  blogSlider.removeAttribute('data-slider');
  blogSliderContainer.classList.remove('slider__container', 'blog-slider__container');

  blogWrapper.classList.remove('slider__items');
  blogWrapper.classList.add('wrapper');
  elementsSlides.forEach(function (item) {
    item.classList.remove('slider__item', 'blog-slider__item');
  });

}




