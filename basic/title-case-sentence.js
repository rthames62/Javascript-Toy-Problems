function titleCase(str) {

  var strSplit = str.toLowerCase().split(" ");

  for (var i = 0; i < strSplit.length; i++) {
    strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1);
  }

  strSplit = strSplit.join(" ");

  return strSplit;
}

titleCase("I'm a little tea pot");
