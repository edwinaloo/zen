function isPalindrome(s) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Compare the string with its reverse
    return s === s.split('').reverse().join('');
  }
  
  const s = "A man, a plan, a canal, Panama!";
  const result = isPalindrome(s);
  console.log(result); // Output: true
  