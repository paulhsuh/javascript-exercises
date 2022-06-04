const removeFromArray = function(array, ...numbers) {
  for (let i = 0; i < array.length; i ++) {
    for (num of numbers){
      if (array[i] === num){
        array.splice(i, 1);
        i--;
      }
    }
  }
  console.log(array);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
