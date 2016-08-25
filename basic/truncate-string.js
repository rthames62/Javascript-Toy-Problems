function truncateString(str, num) {

  var actualNum = 0;

  if (num <= 3 || str.length - num <= 3) {
  	actualNum = num;
  } else {
  	actualNum = num - 3;
  }

   if (num <= 3) {
   	str = str.slice(0, actualNum) + "...";
   } else if (str.length - num <= 3) {
  	str = str.slice(0, actualNum);
  } else {
  	str = str.slice(0, actualNum) + "...";
  }

  return str;
}
