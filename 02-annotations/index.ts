// ******************** Types in Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};


// ********************
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates);


// ********************
const words = ['red', 'green', 'blue'];
let foundWord = false;

for (let index = 0; index < words.length; index++) {
  if(words[index] === 'green') {
    foundWord = true;
  }  
}

// ******************** Variable whoise type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: number | boolean = false;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > 0) {
    numberAboveZero = numbers[index];
  }
}
