// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, arg1, arg2, arg3) {

  return arr.filter(function(x) {
    if (x !== arg1 && x !== arg2 && x !== arg3) {
    	return x;
    }
  });


}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
