var boxes=document.querySelectorAll('.btn')
var restartbtn=document.querySelector('.restart')
var turnO=true
var newGamebtn= document.querySelector("#new-btn")
var msgContainer = document.querySelector('.msg-container');
var msg = document.querySelector('#msg');
var scoreX=document.querySelector("#score-x")
var scoreO=document.querySelector("#score-o")

 var winWays = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click",function(){
        if(turnO){
            box.innerText = "O";
             box.style.fontSize = "60px";
            box.style.color= "black"

            turnO= false;
            box.disabled=true;
            checkWinner();
        }else {
            box.innerText = "X"
            box.style.fontSize = "60px";
            box.style.color= "black"
            turnO=true;
            box.disabled= true;
            checkWinner();
        }
      });
    });
    var enableBoxes= function(){
        for (var box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
    };
    var checkWinner = function(){
        var hasWin = false;
        for(var way of winWays){
            console.log(way)
            var pos1val = boxes[way[0]].innerText;
            console.log(pos1val)
            var pos2val = boxes[way[1]].innerText;
            console.log(pos2val)
            var pos3val = boxes[way[2]].innerText;
            console.log(pos3val)
            if(pos1val !== "" && pos2val !== "" && pos3val !== "" 
                && pos1val === pos2val && pos2val === pos3val)
            {
                showWinner(pos1val);
                scorexo(pos1val)
                hasWin= true;
                return;
            }
        }
        if(!hasWin){
            var allBoxes = [...boxes].every((box)=>box.innerText !== "");
            if(allBoxes){
                msgContainer.classList.remove("hide");
                msg.innerText = "Match Drawn"
            }
        }
    };
      var scorexo = function(winner){
        if(winner === "X"){
            scoreX.innerText = (parseInt(scoreX.innerText)) + 1;
        }else if(winner === "O") {
        scoreO.innerText = (parseInt(scoreO.innerText)) + 1;
    }
    }
    var showWinner = function(winner){
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    scorexo(winner)
    disableBoxes();
    };
  

var enablescore= function(){
        scoreO.innerText=0
        scoreX.innerText=0
    };
    var restartGame=function(){
        turnO=true;
        enableBoxes();
        msgContainer.classList.add("hide");
        enablescore()

    };
     var newGame=function(){
        turnO=true;
        enableBoxes();
        msgContainer.classList.add("hide");
    };
    newGamebtn.addEventListener("click",newGame);
    restartbtn.addEventListener("click",restartGame)





























// function computerIsGoing() {
//     // Look at all the squares, find all the ones not yet filled in, pick a random one (e.g. 5)
//     let n = 5; // Assume
//     this.handleClick( n, true );
// }