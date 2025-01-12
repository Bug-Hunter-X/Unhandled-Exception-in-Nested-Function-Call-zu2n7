function foo(a) {
  if (a < 0) {
    throw new Error('a must be non-negative');
  }
  return a + 10;
}

function bar(a) {
  try {
    return foo(a) * 2;
  } catch (error) {
    console.error('Error in bar function:', error.message);
    return 0; // Or handle the error appropriately
  }
}

console.log(bar(5)); // Output: 30
console.log(bar(-5)); // Output: Error in bar function: a must be non-negative, 0