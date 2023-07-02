/*
Task 1: Print numbers from 1 to 5 using a while loop.
Task 2: Print even numbers from 2 to 10 using a for loop.
Task 3: Calculate the sum of numbers from 1 to 10 using a while loop.
Task 4: Calculate the product of numbers from 1 to 5 using a for loop.
Task 5: Print numbers in reverse order from 10 to 1 using a while loop.
Task 6: Print odd numbers from 1 to 9 using a for loop.
Task 7: Calculate the factorial of a number using a while loop.
*/ 
// Task 1
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Task 2
for (let j = 2; j <= 10; j += 2) {
  console.log(j);
}

// Task 3
let sum = 0;
let k = 1;
while (k <= 10) {
  sum += k;
  k++;
}
console.log(sum);

// Task 4
let product = 1;
for (let l = 1; l <= 5; l++) {
  product *= l;
}
console.log(product);

// Task 5
let m = 10;
while (m >= 1) {
  console.log(m);
  m--;
}

// Task 6
for (let n = 1; n <= 9; n += 2) {
  console.log(n);
}

// Task 7
let number = 5;
let factorial = 1;
let p = 1;
while (p <= number) {
  factorial *= p;
  p++;
}
console.log(factorial);
