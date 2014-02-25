// Runner for the exercises

function check(num, answer) {
  if(answer) {
    $("body").append("<p>Question " + num + ": Correct!</p>");
  } else {
    $("body").append("<p style=\"color:red;\">Question " + num + ": Try Again.</p>");
  }
  $("body").append("<p>- - - - - - - - - - - - - - - - - - - - - -</p>")
}

function is_empty(obj) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (obj.length && obj.length > 0)    return false;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key))    return false;
  }
  return true;
}


check(1, q1 && q1.length == 4 && q1[0] == 2 && q1[1] == 3 && q1[2] == 4 && q1[3] == 5);
check(2, q2 && q2.length == 3 && q2[0]=="Will" && q2[1]=="Nevan" && q2[2]=="Jessica" && $(".class-list").children().length==3);
check(3, q3 && q3 == 3.5);

$("body").append("<h3>Checking Complete!</h3>")