function palindrome(str) {
  // Good luck!

  var re = /[^A-Za-z0-9]/g;

  var lowerCaseString = str.toLowerCase().replace(re, '');

  var reverseString = lowerCaseString.split("").reverse().join("");

  console.log(lowerCaseString);
  console.log(reverseString);

  return lowerCaseString === reverseString;
}



palindrome("eye");
