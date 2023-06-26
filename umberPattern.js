
// Write code to print the number patterns on the console
// 12345
// 12345
// 12345
// 12345
// 12345
// 1
// 22
// 333
// 4444
// 55555
// 55555
// 4444
// 333
// 22
// 1

//Each pattern is achieved using nested for loops.
// Pattern 1: 12345
for (let i = 1; i <= 5; i++) {
    let pattern1 = "";
    for (letj = 1; j <= 5; j++) {
      pattern1 += j;
    }
    console.log(pattern1);
  }
  
  // Pattern 2: 1 to 5 on separate lines
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  
  // Pattern 3: Number triangle (1, 22, 333, 4444, 55555)
  for (let i = 1; i <= 5; i++) {
    let pattern3 = "";
    for (let j = 1; j <= i; j++) {
      pattern3 += i;
    }
    console.log(pattern3);
  }
  
  // Pattern 4: Inverted number triangle (55555, 4444, 333, 22, 1)
  for (let i = 5; i >= 1; i--) {
    let pattern4 = "";
    for (let j = 1; j <= i; j++) {
      pattern4 += i;
    }
    console.log(pattern4);
  }
  