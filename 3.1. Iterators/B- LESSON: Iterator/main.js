// 1. Intro to Iterators:
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers);
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});
console.log(onlyNumbers);


// 2. The .forEach() Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))


// 3. The .map() Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(''));
const bigNumbers = [100, 200, 300, 400, 500];
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);
console.log(smallNumbers)


// 4. The .filter() Method
onst randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

// 5. The .findIndex() Method
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});


// 6. The .reduce() Method
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);


// 7. Iterator Documentation
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
// Something is missing in the method call below
console.log(words.some(word => {
  return word.length < 6;
}));
// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});
// Make sure to uncomment the code below and fix the incorrect code before running it
console.log(interestingWords.every((word) => {return word.length > 5}));


// 8. Choose the Right Iterator
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];
//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));
// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);
// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
console.log(word)
// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);
// Choose a method that will return a boolean value
nums.every(num => num < 0);
// OR nums.some(num => num < 0);
