// Manage slideshows separately
const slideshows = {
    fleet: { index: 0, slides: null, dots: null },
    cargo: { index: 0, slides: null, dots: null }
};

// Initialize the slideshows
function initSlideshows() {
    for (const key in slideshows) {
        slideshows[key].slides = document.querySelectorAll(`#${key}-slideshow .slides`);
        slideshows[key].dots = document.querySelectorAll(`#${key}-dots .dot`);
        showSlide(0, key); // Show the first slide in each slideshow
    }
}

// Show the specified slide for a given slideshow
function showSlide(index, slideshowKey) {
    const slideshow = slideshows[slideshowKey];
    if (!slideshow) return;

    // Wrap the index around if necessary
    if (index >= slideshow.slides.length) {
        slideshow.index = 0;
    } else if (index < 0) {
        slideshow.index = slideshow.slides.length - 1;
    } else {
        slideshow.index = index;
    }

    // Update slides and dots visibility
    slideshow.slides.forEach((slide, i) => {
        slide.style.display = i === slideshow.index ? 'block' : 'none';
    });

    slideshow.dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideshow.index);
    });
}

// Change the slide by an offset for a given slideshow
function changeSlide(offset, slideshowKey) {
    const slideshow = slideshows[slideshowKey];
    if (!slideshow) return;
    showSlide(slideshow.index + offset, slideshowKey);
}

// Initialize slideshows on page load
window.onload = initSlideshows;





