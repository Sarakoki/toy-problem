/* Given a string, return true if it contains balanced parenthesis ().

Examples
----------------------------------
Input	                 | Output |
----------------------------------
string:
"(x + y) - (4)"	         | true   |
----------------------------------
string:
"(((10 ) ()) ((?)(:)))"	 | true   |
----------------------------------
string:
"(50)("	                 | false  |
----------------------------------
string:    
""	                     | true   |
----------------------------------
*/

function isBalanced(string) {
  // write your code here
  var arr = [];
  var arr1 = [];
  if (string === "") {
    return true;
  } else var string1 = string.split("");
  for (var i = 0; i < string1.length; i++) {
    if (string[0] !== "(") {
      return false;
    } else if (string1[i] === "(") {
      arr.push(string1[i]);
    } else if (string1[i] === ")") {
      arr1.push(string1[i]);
    }
  }
  if (arr.length === arr1.length) {
    return true;
  } else {
    return false;
  }
}
