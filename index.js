// Select the main element
const main = document.querySelector('.main');

// Set the current slide index to 0
let currentSlide = 0;

// Set the total number of slides
const totalSlides = 3;

// Set the slide duration in milliseconds
const slideDuration = 5000;

// Set the slide images
const slideImages = [
  './img/web88.jpg',
  './img/web99.jpg',
  './img/web1111.jpg'
];

// Set the slide texts
const slideTexts = [
  'I am front end developer',
  'Haboba',
  'Welcome in my app'
];

// Set the slide interval
let slideInterval = setInterval(nextSlide, slideDuration);

// Function to go to the next slide
function nextSlide() {
  // Increment the current slide index
  currentSlide = (currentSlide + 1) % totalSlides;

  // Update the main element's background image and text
  main.style.backgroundImage = `url(${slideImages[currentSlide]})`;
  main.querySelector('h2').textContent = slideTexts[currentSlide];
}

// Function to go to the previous slide
function prevSlide() {
  // Decrement the current slide index
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;

  // Update the main element's background image and text
  main.style.backgroundImage = `url(${slideImages[currentSlide]})`;
  main.querySelector('h2').textContent = slideTexts[currentSlide];
}


// // // // // // // // // // // // to top // // // // // // // // // // // // 
// Select the to top button
const toTopBtn = document.querySelector('.totop-btn');

// Function to scroll to the top of the page
function scrollToTop() {
  // Check if the user is already at the top of the page
  if (window.pageYOffset > 0) {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }
}

// Add a click event listener to the to top button
toTopBtn.addEventListener('click', scrollToTop);

// Function to toggle the visibility of the to top button
function toggleToTopBtn() {
  // Check if the user has scrolled more than 50px from the top of the page
  if (window.pageYOffset > 50) {
    // Show the to top button
    toTopBtn.style.display = 'block';
  } else {
    // Hide the to top button
    toTopBtn.style.display = 'none';
  }
}

// Add a scroll event listener to the window
window.addEventListener('scroll', toggleToTopBtn);

// // // // // // // // // // // // write effect // // // // // // // // // // // //
// Set the write effect duration in milliseconds
const writeDuration = 800;

// Function to apply the write effect to a target element with a text string
function write(target, text) {
  // Set the write effect index
  let writeIndex = 0;

  // Set the write interval
  let writeInterval = setInterval(function() {
    // Check if the write effect is complete
    if (writeIndex === text.length) {
      // Reset the write index
      writeIndex = 0;

      // Clear the element text
      target.textContent = '';
    } else {
      // Update the element text
      target.textContent += text[writeIndex];

      // Increment the write index
      writeIndex++;
    }
  }, writeDuration);

  // Return a function to stop the write effect
  return function() {
    clearInterval(writeInterval);
  };
}

// Select the element to apply the write effect to
const writeElement = document.querySelector('.write-effect');

// Set the write effect text
const writeText = 'bobb';

// Start the write effect
let stopWrite = write(writeElement, writeText);

// Stop the write effect after 5 seconds
// setTimeout(stopWrite, 5000);

