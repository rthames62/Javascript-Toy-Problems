//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
	var newArr = [];
	for(var i = 0; i < arr.length; i += size) {
		newArr.push(arr.slice(i, i + size));
	}

	return newArr;
}


chunkArrayInGroups(['1','2','3','4','5','6','7','8','9','0'], 4);
