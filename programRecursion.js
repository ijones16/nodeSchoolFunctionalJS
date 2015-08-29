function reduce(arr, fn, initial) {
  return (function reduceIt(index, value){
    if (index > arr.length - 1) return value;
    return reduceIt(index + 1, fn(value, arr[index], index, arr))
  })(0,initial); 
 }

module.exports = reduce
