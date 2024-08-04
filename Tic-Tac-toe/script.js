console.log("hey this is my tic tag")
let music = new Audio("music.mp3")
let addaudio = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "x"

function changeTurn() {
    turn = turn === "x" ? "o" : "x"; 
    return turn;
}

let borad = ["","","","","","","","",""]

function checkWinner(borad){
     
    const wincondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i < wincondition.length; i++) {
        const [a,b,c] = wincondition[i]
        if (borad[a]&&borad[a] === borad[b]&&borad[b] === borad[c] &&borad[c] ) {
            music.play()
            return borad[a]
        }
    }
    if (!borad.includes("")) {
        gameover.play()
        return "draw"
    }
    return null
}   

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element,index)  => {
    let boxtext= element.querySelector(".boxtext");
    element.addEventListener( "click", () => {
      if (boxtext.innerText === "" && !checkWinner(borad) ) {
          boxtext.innerHTML = turn;
          borad[index] = turn  // update borad value
          addaudio.play();
          document.getElementsByClassName("info")[0].innerHTML = "Turn for"+ turn
      
           let result = checkWinner(borad)
          if (result==="draw") {
          document.getElementsByClassName("info")[0].innerHTML = "Match is draw" ;
          gameover.play()
          }else if (result === "x" || result === "o") {
            document.getElementsByClassName("info")[0].innerHTML = ` ${result} won The Match `
            music.play();
            document.querySelector(".imgbox").innerHTML =
            '<img src="excited.gif" alt="Winner">';
          } else {
            changeTurn(); 
            document.getElementsByClassName("info")[0].innerHTML = `Turn for ${turn}`;
        }
            
      }
    })
    
});

function myFunction() {
    
}
myFunction()