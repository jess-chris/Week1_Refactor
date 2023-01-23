/***********************************************************************
Write a function goodbye(name) that takes in a string name and returns a string 
saying bye to that name. 

See the examples below:

console.log(goodbye("Daniel")); // => "Bye Daniel."
console.log(goodbye("Mark")); // => "Bye Mark."
console.log(goodbye("Beyonce")); // => "Bye Beyonce."
***********************************************************************/

function goodbye(name) {
  // your code here...
  //!!START
  return "Bye " + name + ".";
  //!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = goodbye;
} catch (e) {
  module.exports = null;
}