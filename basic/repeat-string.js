function repeatStringNumTimes(str, num) {

  var repeatedString = "";

  if (num >= 0) {
  	for (var i = 0; i < num; i++) {
  		repeatedString = repeatedString + str;
  	}
  } else {
  	repeatedString = "";
  }

  return repeatedString;
}

repeatStringNumTimes("abc", 3);
