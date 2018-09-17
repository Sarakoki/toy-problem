/* Given a string, remove any characters that are not unique from the string.

Examples
------------------------------------
Input                 |	Output
------------------------------------
str:                  |
"abccdefe"            | "abdf"
------------------------------------                      
str:                  | 
"hello there"         | "o tr"
------------------------------------                      
str:                  |
"xyz"	              | "xyz"
------------------------------------                      
str:                  |
"iiii"                |	""
------------------------------------
*/
function onlyUnique(str) {
  var string = "";
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 0;
    } else {
      obj[str[i]] += 1;
    }
  }
  for (var key in obj) {
    if (obj[key] === 0) {
      string += key;
    }
  }
  return string;
}
