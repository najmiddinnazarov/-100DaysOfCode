// Profile Lookup
/* const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let res = null;
  contacts.map((obj) => {
    Object.entries(obj).filter((value) => {
      if (value[0] === prop && value[1] === name) res = obj[prop];
      else if (value[0] !== name) res = "No such contact";
      else res = "No such property";
    });
  });
  return res;
}

console.log(lookUpProfile("Kristian", "lastName"));
 */

// Generate Random Fractions with JavaScript
/* function randomFraction() {
  return Math.random();
}
randomFraction(); */

// Generate Random Whole Numbers with JavaScript
/* function randomWholeNum() {
  return Math.floor(Math.random() * 10);
} */

// Generate Random Whole Numbers within a Range
/* function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
} */

// Use the parseInt Function
/* function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56"); */

// Use the parseInt Function with a Radix
/* function convertToInteger(str) {
  return parseInt(str, 2)
}

convertToInteger("10011"); */

// Use the Conditional (Ternary) Operator
/* function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
 */

// Use Multiple Conditional (Ternary) Operators
/* function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(0)); */

// Use Recursion to Create a Countdown
/* function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(5)); */
