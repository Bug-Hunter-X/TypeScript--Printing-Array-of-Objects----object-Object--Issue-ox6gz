function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray = [1, 2, 3, 4, 5];
printArray(myArray); // Works fine

const myStringArray = ['a', 'b', 'c', 'd', 'e'];
printArray(myStringArray); // Works fine

const myMixedArray = [1, 'a', 2, 'b', 3];
printArray(myMixedArray); // Works fine

const myObjectArray = [{id:1, name: "Test"}, {id:2, name: "Test2"}]
printArray(myObjectArray); // This will print [object Object] for each object

//If we want to print the content of the objects we should use the following code
function printObjectArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(JSON.stringify(arr[i]));
  }
}
printObjectArray(myObjectArray); 