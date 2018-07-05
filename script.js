$(document).ready(function(){

var winningMoves = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

var counter = 0;
var playerOneScore = [];
var playerTwoScore = [];
var firstPlayer = true;
var $resetButton = $("#reset");

  $("td").click(function(){

    if($(this).text() === '') {
      if(firstPlayer == true){
        $(this).addClass("X").html("X");
        firstPlayer = false;
        $(".playerTurn").html("It is O's turn");
        playerOneScore.push($(this).data().num);
        checkingForWin(playerOneScore, 'O');

      } else if(firstPlayer == false) {
        $(this).addClass("0").html("O");

        firstPlayer = true;
        $(".playerTurn").html("It is X's turn");
        playerOneScore.push($(this).data().num);
        checkingForWin(playerOneScore, 'O');
      }
    }
  });

  function checkingForWin(currentPlayer, name){
    for (var i = 0; i < winningMoves.length; i++) {
      counter = 0;
        for (var j = 0; j < winningMoves.length; j++) {
          if (currentPlayer.indexOf(winningMoves[i][j])
          !== -1) {
            counter++;
        }
      }
      if (counter === 3) {
        alert("player " + name + " wins");
        reset();
      }
    }

  }

  function reset(){
    $("td").html('');
    $("td").removeClass('X');
    $("td").removeClass('0');
    firstPlayer = true;
    counter = 0;
    playerOneScore = [];
    playerTwoScore = [];

  }
});
