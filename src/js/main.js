import { isPalindrome } from "./isPalindrome"
import { sortPeopleByNameAsc, sortPeopleByAgeDesc, getPeopleAges } from "./formatPeople"

//Task 1
console.log("Is kayak a palindrome? ", isPalindrome("kayak"));

//Task 4
var people = [
  {
    name: "Bob",
    age: 29
  },
  {
    name: "Alice",
    age: 42,
  },
  {
    name: "Greg",
    age: 23
  },
  {
    name: "Jean",
    age: 50
  }
];

console.log("People sort by Name asc", sortPeopleByNameAsc(people));
console.log("People sort by Age desc", sortPeopleByAgeDesc(people));
console.log("Map Peple Age", getPeopleAges(people));