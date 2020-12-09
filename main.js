// Your Code Here!

// Create a function that "rolls a die" and give you a number 1-6.

// Then roll two dice and add them together.

// Do that 1000 times and create an array of how frequently each result occurrs.

// Then render the output to the HTML page.

function rollDie(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollPairOfDice() {
  rollDie(1, 6);
  let sum = rollDie(1, 6) + rollDie(1, 6);
  return sum;
}

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (i = 0; i < 1000; i++) {
  let rollTotal = rollPairOfDice();
  ++count[rollTotal];
}

rollPairOfDice();
console.log(count);

for (i = 0; i < count.length; i++) {
  div = document.createElement("div");

  div.innerHTML = count[i];
  div.style.width = count[i] / 10 + "%";
  div.style.backgroundColor = "orange";
  div.className = i + "bar";

  document.body.append(div);
}
