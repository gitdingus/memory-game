const randomNumberWithBounds = (min, max) => {
  const seed = Math.random();
  const randomNumber = Math.floor(seed * (max - min)) + min;

  return randomNumber;
};

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = randomNumberWithBounds(0, i);
    swap(array, i, j);
  }
};

export default shuffleArray;
