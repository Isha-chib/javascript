//object is a collection of key-value pairs. It is used to store data in a structured way.
let user = {
  name: "isha_chib",//string
  age: 18,//number
  grade: "A+",//string
  isPassed: true,//boolean
  subjects: ["Math", "Science", "English"],//array
};//accessing object properties
console.log(user.name); // Output: isha_chib
console.log(user.age); // Output: 18
console.log(user.grade); // Output: A+
console.log(user.isPassed); // Output: true
console.log(user.subjects); // Output: ["Math", "Science", "English"]
//adding new property to the object
user.school ="indira university";
console.log(user.school); // Output: indira university
//updating existing property
user.age = 19;
console.log(user.age); // Output: 19
//deleting a property from the object
delete user.grade ;
console.log(user.grade); // Output: undefined
console.log(user.age);//output 19