const printNumbers = (finalNumber) => {
  const arrayNumbers = [];

  for (let i = 1; i <= finalNumber; i++) {
    arrayNumbers.push(printIt(i));
  }

  return arrayNumbers.join(" ");
};

const printIt = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
};

//test
console.log(printNumbers(50));
