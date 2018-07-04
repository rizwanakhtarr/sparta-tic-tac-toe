$(document).ready(function(){

  var winningMoves = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];
console.log(winningMoves);

  var firstPlayer = true;
  // var secondPlayer = true;


  $("td").click(function(){

      if(firstPlayer == true){
        $(this).addClass("X").html("X");
        firstPlayer = false;
      } else if(firstPlayer == false) {
        $(this).addClass("0").html("O");
        firstPlayer = true;
      }
  });

  // function winnerCheck() {
  //   if ($(this).addClass("X").html("X"){
  //
  //   } else {
  //
  //   }
  // }

});

// need to have click event listener so x or o shows
// another click shows another option


//need a function to reognize a winner

//different options to win
