function pivotIndex(numbers) {
  let totalSum = 0;
  let leftSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }

  for (let i = 0; i < numbers.length; i++) {
    if (leftSum === totalSum - leftSum - numbers[i]) {
      return i;
    }
    leftSum += numbers[i];
  }

  return -1;
}

// Test case
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // Output: 3
