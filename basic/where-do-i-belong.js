// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted

function getIndexToIns(arr, num) {

  var numPosition = 0;

  arr.push(num);

  arr.sort(function(a, b) {
  	return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }



}


getIndexToIns([40, 60, 24, 1, 5], 50);
