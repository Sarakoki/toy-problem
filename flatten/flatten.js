/*
Given an array of arrays, return all elements in a single array. 
You must use recursion.

Hint: Use Array.isArray(elem) to see if something is an array.

Examples
------------------------------------------------------------------
Input	                                             Output
arrays:
[ [ 10 ], [ 20, 30 ], [ 40 ] ]             	   [ 10, 20, 30, 40 ]

arrays:
[ 1, 2, [ 3 ], 4, [ 5, [ 6 ], 7 ] ]	        [ 1, 2, 3, 4, 5, 6, 7 ]

*/

function flatten(arrays) {
  // write your code here
  var result = [];
  var elem = arrays;
  function recurse(elem) {
    for (var i = 0; i < elem.length; i++) {
      if (Array.isArray(elem[i])) {
        recurse(elem[i]);
      } else {
        result.push(elem[i]);
      }
    }
  }
  recurse(arrays);
  return result;
}
