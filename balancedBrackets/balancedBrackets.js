//Given a string, return true if its arrangement of parenthesis (),
//curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).
//Examples:
//Input:"(x + y) - (4)"
//output:true
//input:"(((10 ) ()) ((?)(:)))"
//output:true
//input:"[{()}]"
//output:true
//input:"(50)("
//output:false
//input:"[{]}"
//output:false

function isBalanced(str) {
  // Write your code here, and
  // return your final answer.
  var arr = [];
  var brackets = { "{": "}", "[": "]", "(": ")" };
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
      arr.push(str[i]);
    } else if (str[i] === "}" || str[i] === "]" || str[i] === ")") {
      if (str[i] !== brackets[arr.pop()]) {
        return false;
      }
    }
  }
  if (arr.length > 0) {
    return false;
  }
  return true;
}
