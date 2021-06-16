const wrapper = document.querySelector('.pad');
const greyButton = document.querySelector('.p-grey');
const blueButton = document.querySelector('.p-blue');
const pinkButton = document.querySelector('.p-pink');
const greenButton = document.querySelector('.p-green');
const rainbowButton = document.querySelector('.p-rainbow');
const resetButton = document.querySelector('.reset-pad');
const slider = document.querySelector('.slider-bar');

// Create and add divs into container
function addNewDiv(columns, rows) {
  let n = columns * rows;
  for (let i = 0; i < n; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newCreatedDiv');
    wrapper.appendChild(newDiv);
  }
}

// Grey
function grayPen() {
  divs.forEach((items) =>
    items.addEventListener('mouseenter', function (e) {
      e.target.style.background = '#bec5cb';
      e.target.style.filter = reduceBrightness(e.target.style.filter);
      console.log(e.target.style.filter);
    })
  );
}

// Blue
function bluePen() {
  divs.forEach((items) =>
    items.addEventListener('mouseenter', function (e) {
      e.target.style.background = '#63e1ff';
      e.target.style.filter = reduceBrightness(e.target.style.filter);
      console.log(e.target.style.filter);
    })
  );
}

// Pink
function pinkPen() {
  divs.forEach((items) =>
    items.addEventListener('mouseenter', function (e) {
      e.target.style.background = '#ffb4b4';
      e.target.style.filter = reduceBrightness(e.target.style.filter);
      console.log(e.target.style.filter);
    })
  );
}

// Green
function greenPen() {
  divs.forEach((items) =>
    items.addEventListener('mouseenter', function (e) {
      e.target.style.background = '#c0ff8f';
      e.target.style.filter = reduceBrightness(e.target.style.filter);
      console.log(e.target.style.filter);
    })
  );
}

// Rainbow
function rainbowPen() {
  // Randomly generate numbers from 0 - 255
  function randomNum() {
    return Math.floor(Math.random() * 256);
  }
  divs.forEach((items) =>
    items.addEventListener('mouseenter', function (e) {
      e.target.style.background = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
      e.target.style.filter = reduceBrightness(e.target.style.filter);
      console.log(e.target.style.filter);
    })
  );
}

// Reduce brightness by 10% each time mouse passes
function reduceBrightness(brightnessValue) {
  let value = Number(brightnessValue.match(/(\d+)/)[0]);
  if (value > 0) {
    let newValue = `brightness(${value - 10}%)`;
    return newValue;
  } else if (value === 0) {
    let newValue = `brightness(${value + 80}%)`;
    return newValue;
  }
}

// Change pad size
function sliderBarAdjument() {
  slider.oninput = function (input) {
    let padSize = input.target.value;
    wrapper.style.cssText = `grid-template-columns: repeat(${padSize}, 1fr); grid-template-rows: repeat(${padSize}, 1fr);`;
    console.log(input.target.value);
  };
}

// Set Brightness to 110%
function setBrightness() {
  divs.forEach((items) => (items.style.filter = 'brightness(110%)'));
}

function buttons() {
  greyButton.addEventListener('click', function () {
    grayPen();
  });

  rainbowButton.addEventListener('click', function () {
    rainbowPen();
  });

  blueButton.addEventListener('click', function () {
    bluePen();
  });

  pinkButton.addEventListener('click', function () {
    pinkPen();
  });

  greenButton.addEventListener('click', function () {
    greenPen();
  });

  resetButton.addEventListener('click', function () {
    divs.forEach((items) => (items.style.background = 'none'));
    setBrightness();
  });
}

addNewDiv(100, 100);
const divs = Array.from(document.querySelectorAll('.newCreatedDiv'));
sliderBarAdjument();
setBrightness();
buttons();
