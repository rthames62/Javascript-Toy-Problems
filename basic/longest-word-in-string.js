// Return the length of the longest word in the provided sentence.

//Your response should be a number.

function findLongestWord(str) {

  var splitString = str.split(" ");

  var longestWord = 0;

  for (var i = 0; i < splitString.length; i++) {
  	if (splitString[i].length > longestWord) {
  		longestWord = splitString[i].length;
  	}
  }

  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
