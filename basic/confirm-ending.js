// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {

  	var reversedStr = str.split("").reverse().join("");
  	var endStr = reversedStr.substr(0, target.length).split("").reverse().join("");
  	return endStr === target;


}

confirmEnding("He has to give me a new name", "me");
