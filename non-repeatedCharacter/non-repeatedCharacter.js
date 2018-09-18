/*
Given an arbitrary input string, return the first non-repeating character. 
For strings with all repeats, return 'sorry'.

Examples
-------------------------------------------------
Input                                	Output
-------------------------------------------------
string:
"ABCDBIRDUP"	                         "A"

string:
"XXXXXXX"	                           "sorry"

string:
"ALAMABA"	                             "L"

string:
"BABA"	                               "sorry"
-------------------------------------------------
*/

function firstNonRepeatedCharacter(string) {
  // write your code here
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 0;
    }
    obj[string[i]] += 1;
  }
  for (var key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
  return "sorry";
}
