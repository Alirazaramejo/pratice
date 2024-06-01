// A closure is a function that remembers its outer variables and can access them. Closures are created every time a function is created. They allow for function-level encapsulation and maintaining state.

// example of closure
function makeCounter() {
    let count = 0;
    return function() {
      return count++;
    };
  }
  
  const counter = makeCounter();
  console.log(counter()); // 0
  console.log(counter()); // 1