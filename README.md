# TypeScript: Printing Array of Objects
This repository demonstrates a common issue when working with arrays of objects in TypeScript and provides a solution.

**Problem:** When using `console.log` to print an array containing objects, the output shows '[object Object]' for each object instead of the object's properties.

**Solution:** Utilize `JSON.stringify` to convert the objects into a string representation before printing them to the console. This allows you to see the object's contents clearly.

See `bug.ts` for the problem and `bugSolution.ts` for the solution.