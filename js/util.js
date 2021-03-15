const getRandomNumber = function (min, max) {
  if (min<=max) {
    let temp = min;
    min = max;
    max = temp;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomFraction = function (min, max, quantity) {
  if (min<=max) {
    let temp = min;
    min = max;
    max = temp;
  }
  let num = Math.random() * (max - min) + min;
  return +num.toFixed(quantity);
}

const getRandomElement = function(array) {
  return array[getRandomNumber(0, array.length)];
}

export {getRandomNumber, getRandomFraction, getRandomElement}
