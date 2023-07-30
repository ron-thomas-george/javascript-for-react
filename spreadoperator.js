const numbersOne = [1, 2, 3, 4];
const numbersTwo = [5, 6, 7, 8];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

const numbers = [1, 2, 3, 4, 5, 6];
//Assign the first and second items from numbers to variables and put the rest in an array
const [firstNum, secondNum, ...rest] = numbers;
console.log(firstNum);
console.log(secondNum);
console.log(rest);

//Spread operator with objects
const myMustang = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};
const updateMustang = {
  brand: "Ford",
  model: "Mustang",
  color: "black",
};

const updatedMustang = { ...myMustang, ...updateMustang };
console.log(updatedMustang);
//Here both objects have one property in common. That is color. It will be overwritten by object that comes last(updateMustang).
