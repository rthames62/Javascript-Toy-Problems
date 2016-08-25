//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

function rot13(str) { // LBH QVQ VG!

  var newCharCode = 0;

  var newCharCodeArr = [];

  var conversion = 0;

  var finalArr = [];

  var result = 0;

  var splitStr = str.toUpperCase().split("");


  for (var i = 0; i < splitStr.length; i++) {

  	splitStr[i].charCodeAt();


  	newCharCode = splitStr[i].charCodeAt() - 13;


  	newCharCodeArr.push(newCharCode);

  }

  for (var n = 0; n < newCharCodeArr.length; n++) {

  	console.log(newCharCodeArr[n]);

  	if (newCharCodeArr[n] <= 51) {
  		conversion = String.fromCharCode(newCharCodeArr[n] + 13);
  	} else if (newCharCodeArr[n] <= 64) {
  		conversion = String.fromCharCode(newCharCodeArr[n] + 26);
	}
  	 else {
  		conversion = String.fromCharCode(newCharCodeArr[n]);
  	}


  	finalArr.push(conversion);

  }

  finalArr = finalArr.join("");

  return finalArr;
}
