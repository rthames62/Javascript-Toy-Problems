// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

function destroyer(arr, arg1, arg2, arg3) {

  return arr.filter(function(x) {
    if (x !== arg1 && x !== arg2 && x !== arg3) {
    	return x;
    }
  });


}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
