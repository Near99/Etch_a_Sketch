const wrapper = document.querySelector('.pad');
const greyButton = document.querySelector('.p-grey');
const blueButton = document.querySelector('.p-blue');
const redButton = document.querySelector('.p-red');
const rainbowButton = document.querySelector('.p-rainbow');
const resetButton = document.querySelector('.reset-pad');
const slider = document.querySelector('.slider-bar');

// Create grid
function addNewDiv(columns, rows) {
  let n = columns * rows;
  for (let i = 0; i < n; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newCreatedDiv');
    wrapper.appendChild(newDiv);
  }
}

// Gray theme play
function grayTheme() {
  divs.forEach((items) =>
    items.addEventListener('mouseenter', function (e) {
      e.target.style.background = '#bec5cb';
      e.target.style.filter = reduceBrightness(e.target.style.filter);
      console.log(e.target.style.filter);
    })
  );
}

// Blue theme play
function blueTheme() {
  divs.forEach((items) =>
    items.addEventListener('mouseenter', function (e) {
      e.target.style.background = '#086695';
      e.target.style.filter = reduceBrightness(e.target.style.filter);
      console.log(e.target.style.filter);
    })
  );
}

// Red theme play
function redTheme() {
  divs.forEach((items) =>
    items.addEventListener('mouseenter', function (e) {
      e.target.style.background = '#782424';
      e.target.style.filter = reduceBrightness(e.target.style.filter);
      console.log(e.target.style.filter);
    })
  );
}

// Rainbow theme play
function rainbowTheme() {
  // Randomly generate numbers from 0 - 255;
  function randomNum() {
    return Math.floor(Math.random() * 256);
  }
  divs.forEach((items) =>
    items.addEventListener('mouseenter', function (e) {
      e.target.style.background = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
      e.target.style.filter = reduceBrightness(e.target.style.filter);
      //   setTimeout(() => (e.target.style.background = 'none'), 500);
      console.log(e.target.style.filter);
    })
  );
}

// Reduce brightness by 10% every mouse passes
function reduceBrightness(brightnessValue) {
  let value = Number(brightnessValue.match(/(\d+)/)[0]);
  let newValue = `brightness(${value - 10}%)`;
  return newValue;
}

// Ajust pad size
function sliderBarAdjument() {
  slider.oninput = function (input) {
    // data-type: string
    let boxSize = input.target.value;
    wrapper.style.cssText = `grid-template-columns: repeat(${boxSize}, 1fr); grid-template-rows: repeat(${boxSize}, 1fr);`;
    console.log(input.target.value);
  };
}

function buttons() {
  greyButton.addEventListener('click', function () {
    grayTheme();
  });

  rainbowButton.addEventListener('click', function () {
    rainbowTheme();
  });

  blueButton.addEventListener('click', function () {
    blueTheme();
  });

  redButton.addEventListener('click', function () {
    redTheme();
  });

  resetButton.addEventListener('click', function () {
    divs.forEach((items) => (items.style.background = 'none'));
  });
}

// Add new divs to the container makes grid box;
addNewDiv(100, 100);
// Put all new created divs into array;
const divs = Array.from(document.querySelectorAll('.newCreatedDiv'));
// Set all divs brightness to 110%;
divs.forEach((items) => (items.style.filter = 'brightness(110%)'));

buttons();
sliderBarAdjument();
