const vehicles = ["Land Cruiser", "Urus", "Defender"];

//old way of assigning array items to a variable
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

console.log(car);
console.log(truck);
console.log(suv);

//With destructuring
const food = ["Sandwich", "Croissant", "Tiramisu"];
const [breakfast, snack, dessert] = food; //Destructuring
console.log(breakfast);
console.log(snack);
console.log(dessert);

//Destructuring used when a function returns an array
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;
  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(6, 3);
console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);

//Old way of using an object inside a function
const myVehicle = {
  brand: "Toyota",
  model: "Land Cruiser",
  color: "White",
};

vehicle(myVehicle);

function vehicle(car) {
  const message =
    "Color of " + car.brand + " " + car.model + " is " + car.color;
  console.log(message);
}

//With destructuring
const myBike = {
  brand: "Kawasaki",
  model: "Z900",
  color: "Black",
};

bike(myBike);

function bike({ brand, model }) {
  const message = "Power and Torque of " + brand + " " + model + " is amazing ";
  console.log(message);
}
