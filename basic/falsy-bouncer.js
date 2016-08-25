// Remove all falsy values from an array.

function bouncer(arr) {

    return arr.filter(function(x) {
      return !!x;
    });


}
bouncer([7, "ate", "", false, 9]);
