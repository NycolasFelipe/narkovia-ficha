// Function to find the difference of two arrays
const arrayDiff = (array1: Array<string>, array2: Array<string>) => {
  // Temporary array to store the differences
  let temp = [];

  // Convert array1 to an array of numbers
  array1 = array1.toString().split(',').map(String);
  
  // Convert array2 to an array of numbers
  array2 = array2.toString().split(',').map(String);

  // Iterate through each element in array1
  for (let i of array1) {
    // If the element is not found in array2, add it to the temp array
    if (array2.indexOf(i) === -1)
      temp.push(i);
  }

  // Iterate through each element in array2
  for (let i of array2) {
    // If the element is not found in array1, add it to the temp array
    if (array1.indexOf(i) === -1)
      temp.push(i);
  }

  // Return the temp array sorted in ascending order
  return temp;
};

export default arrayDiff;