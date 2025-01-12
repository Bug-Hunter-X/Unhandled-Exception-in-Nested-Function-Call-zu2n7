function foo(a) {
  return a + 10;
}

function bar(a) {
  return foo(a) * 2;
}

console.log(bar(5)); // Output: 30

//However, if foo throws an error:

function foo(a) {
  if (a < 0) {
    throw new Error('a must be non-negative');
  }
  return a + 10;
}

function bar(a) {
  return foo(a) * 2;
}

console.log(bar(-5)); //Uncaught Error: a must be non-negative