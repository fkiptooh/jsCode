// Splice Method
// splice -> its a build in method that allows you to modify an array by adding removing, or replacing elements.
// splice syntax => array.splice(start, deleteCount, item1, item2, ...)
// start - index at which to start modifying the array.
// deleteCount - numbe of elements to remove from the array, starting at the start `start` index. if you set delete count to 0 no element will be removed
// `item1`, `item2` the elements to add to the array, starting at the `start` index

// Removing elements from an array using splice.
console.log(`THE SPLICE METHOD IN AN ARRAY`)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
numbers.splice(2, 5); 

console.log(numbers)

// Adding an element to the array.
const fruits = [`apple`, `mango`, `banana`];
fruits.splice(1, 0, `orange`, `pineapple`) // apple, orange, pineapple, mango, banana

console.log(fruits)

// Replace elements in an array.
const letters = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(`USING SPLICE TO REPLACE`)
console.log(`Before replacement -> ${letters}`)

letters.splice(2, 2, 'X', 'Y')

console.log(`After replacing -> ${letters}`)

// indexOf method an array.
console.log(`THE INDEXOF METHOD IN AN ARRAY`)
// This method is used to find the index of the first occurrence of a specified value in an array. The syntax is as follows array.indexOf(searchElement[, fromIndex]). Here what each parameter means:
//  `searchElement`: The value to search for in the array
// `fromIndex` -optional: The index at which to start the search if not specified, `indexOf` starts the search from the beggining of the array.
// The `indeOf` method returns the index of the first occurrence of `searchElement` in the arraay, or -1 if `searchElement` is not found.

// code example.
const numbers_ = [1,2,3,4,5];
const index1 = numbers_.indexOf(3, 1) // returns 2
const index2 =numbers_.indexOf(6) // returns -1
console.log(index1)
console.log(index2)

const index3 =  numbers_.lastIndexOf(5); // Does the opposite. returns the index of the given element and if not found starting from the end of the array, it returns -1
console.log(index3)

// forEach
// Used to iterate over the elements of an array and perform a specified action for each element.
console.log(`THE FOREACH METHOD IN AN ARRAY`)

const digits = [1,2,3,4,5];
digits.forEach(digit=> {
    console.log(digit);
})

// Map method an array.
const digitMap = digits.map(digit=> {
    return digit * 2
})

console.log(`Using map to manipulate an array {multiply by 2 each elemt}, ${digitMap}`)

// Filter method in an array.
const oddNumbers =  digits.filter( digit => {
    return digit % 2 === 1;
})

console.log(`Odd numbers -> ${oddNumbers}`);

// Join method
console.log(`JOIN METHOD`)
const fruitsJoin = [`Mango`, `Pineapple`, `Banana`, `Orange`];

const fruitsString = fruitsJoin.join( ', ')
console.log(fruitsString)

// Sort
console.log(`SORT METHOD -> Performed on fruitJoin`)
console.log(fruitsJoin.sort());

// Shift - pulls out the firt element in an array
console.log(`SHIFT METHOD`)
const items = [`Bread`, `Wheat`, `Milk`, `Butter`]
console.log(`Array before shift`)
console.log(`-----------------------------------------`)
console.log(items)
console.log(`-----------------------------------------`)
console.log(`Item that is being shifted ------> ${items.shift()}`)
console.log(`Array after shift`, items)


// Unshift : Used to add an single element or elements to an array. The append of the new items begin at the beggining of that particular array.
console.log(`UNSHIFT IN AN ARRAY`)
const grocery = [`Kales`, `Brocolli`, `Spinach`, `Cabbage`, `Onions`]
console.log(`Before unshift---->`, grocery)
const newGroceryItems = grocery.unshift(`Ginger`, `Garlic`)
console.log(`New items---->`, grocery.slice(0,2)) // We use slice to selected items in the array, with the starting index being inclusive and the ending index being excluded.
console.log(`After unshift---->`, grocery);

// Pop Method: Take out the last items in an array.
console.log(`POP IN AN ARRAY`)
const students = [`Mark`, `James`,`Dan`, 'Mike', `Jack`]
console.log(`Before pop--->`, students)
const afterPop = students.pop()
console.log(`Item removed with pop ---->`, afterPop)
console.log(`Array after pop ---->`, students)

// Push method: Apppends an item to the end of an array.
console.log(`PUSH IN AN ARRAY`);
const marks = [78, 34, 56, 78, 90];
console.log(`Before push---->`, marks)
const pushElements = marks.push(56, 79)
console.log(`After push ----->`, marks)
console.log(`Reverse method: returning elements from the end of the array--->`, marks.reverse())

// This keyword
// Defining a person object
console.log(`this Keyword`)
const person = {
    firstName: "Mike",
    lastName: "Deen",
    fullName: function() {
      return this.firstName + " " + this.lastName; // Here, 'this' refers to the person object
    }
}
  
console.log(person.fullName()); // Output: "Mike Deen"

console.log(`CONSTRUCTOR`)
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
    this.greet = function() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
    }
  }
  
  // Creating instances of the Person object
  const person1 = new Person("Mike", "Deen", 30);
  const person2 = new Person("Jack", "Kean", 25);
  
  // Calling the greet method on each person object
  person1.greet(); // Output: "Hello, my name is Mike Deen and I am 30 years old."
  person2.greet(); // Output: "Hello, my name is Jack Kean and I am 25 years old."
//   In the example above, we define a constructor function for a "Person" object with three properties: "firstName", "lastName", and "age". The constructor function also adds a "greet" method to the object, which logs a greeting message using the object's properties.
  
//   We then create two instances of the "Person" object using the "new" keyword and passing in the necessary arguments. Finally, we call the "greet" method on each person object to log a greeting message with their name and age.
  
  
  
  
  
  