function productOfNumbers(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
      product *= numbers[i];
    }
    return product;
  }
  
  const numbers = [5, 6, 7, 8, 3];
  const result = productOfNumbers(numbers);
  console.log(result); // Output: 5040
  