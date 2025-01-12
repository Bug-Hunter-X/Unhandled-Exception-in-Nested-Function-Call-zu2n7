# Unhandled Exception in Nested Function Call

This repository demonstrates a common JavaScript error: an unhandled exception in a nested function call.  The `foo` function may throw an error, but the calling function (`bar`) doesn't include any error handling, resulting in a program crash.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides a corrected version with proper error handling using a `try...catch` block.

This example highlights the importance of robust error handling in JavaScript applications to prevent unexpected crashes and improve application stability.