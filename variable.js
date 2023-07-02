/* while constants cannot be reassigned, the contents of objects or arrays declared as
 constants can still be modified. The immutability of a constant applies to 
 the binding of the variable itself, not the value it holds.
 The immutability of constants in JavaScript means that you cannot 
 reassign the person or numbers variables to a completely new object or array, 
 but you can still modify the existing object's properties or add/remove elements in an array.
 */

 const person = {
    name: 'John',
    age: 30
  };
  
  person.age = 31; // Modifying a property of the object
  
  console.log(person); // Output: { name: 'John', age: 31 }
  
  const numbers = [1, 2, 3, 4];
  
  numbers.push(5); // Modifying the array by adding an element
  
  console.log(numbers); // Output: [1, 2, 3, 4, 5]
  

 const MAX_VALUE = 100;
const PI = 3.14;
const MY_NAME = 'John Doe';