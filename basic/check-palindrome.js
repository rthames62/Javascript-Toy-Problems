//  Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

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
