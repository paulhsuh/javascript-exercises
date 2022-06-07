const palindromes = function (input) {
  let str = input.toLowerCase();
  let i = 0;
  let j = str.length - 1; 
  while( i <= j) {
    let startChar = str.charAt(i);
    let endChar = str.charAt(j);
    if (startChar === '!' || startChar === '.' || startChar === ',' || startChar === ' ') {
      i += 1;
    }
    else if (endChar === '!' || endChar === '.' || endChar === ',' || endChar === ' ') {
      j -= 1;
    }
    else if (startChar != endChar) {
      return false;
    }
    else {
      i += 1;
      j -= 1;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
