// Get buttons and counter display elements
const addBtn = document.getElementById('add-btn');
const lowerBtn = document.getElementById('lower-btn');
const counter = document.getElementById('counter');


// Change color function

const changeNumColor = (num) => {
  if (num === 0) {
    counter.style.color = 'black';
  } else if (num < 0) {
    counter.style.color = 'red';
  } else if (num > 0) {
    counter.style.color = 'green';
  }
}

// Event Listeners

addBtn.addEventListener('click', () => {
  // Convert string to int value
  let counterIntVal = parseInt(counter.innerText);
  counterIntVal++;
  counter.innerText = counterIntVal;
  changeNumColor(counterIntVal);
});

lowerBtn.addEventListener('click', () => {
  // Convert string to int value
  let counterIntVal = parseInt(counter.innerText);
  counterIntVal--;
  counter.innerText = counterIntVal;
  changeNumColor(counterIntVal);
});