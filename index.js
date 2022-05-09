let hSpace = document.getElementById("h-space");
let iVal= document.querySelectorAll(".hicon"); 
let hDisp = document.getElementById("hhand-display");
let chDisp = document.getElementById("ch-display");
let hshow = document.getElementById("disp");
let messageEl = document.getElementById("message-el");
let hScore = document.getElementById("hscore");
let cScore = document.getElementById("cscore");
let ch = ["Rock","Paper","Scissor"];
let hVal = " ";
let cVal = " ";
let message = " ";
let currentPlayer = " ";
if(currentPlayer == "Player1"){
   player1();
}

//If Computer Wins - it will run
function cWin(){
   cScore.textContent +=1;
      hScore.textContent +=0;
      message = "Computer Wins";
      messageEl.textContent = message;
}
function hWin(){
   cScore.textContent +=0;
      hScore.textContent +=1;
      message ="You Won";
      messageEl.textContent = message;
}
function result(){
  
  
   if(hVal ==="Rock"&& cVal===ch[0] || hVal ==="Paper"&& cVal ===ch[1] || hVal ==="Scissor" && cVal ===ch[2]){
      message = "Tie";
      console.log(message);
      messageEl.textContent = message;
      hScore.textContent +=" "+ 0;
      cScore.textContent +=" "+ 0;

   }else if(hVal ==="Rock"&& cVal ===ch[1]){
      
      cWin();
   }else if(hVal ==="Rock"&& cVal === ch[2]){
     hWin();
   }else if(hVal ==="Paper" && cVal === ch[0]){
      hWin();
   }
   else if(hVal ==="Paper"&& cVal === ch[2]){
      cWin();
}else if(hVal ==="Scissor" && cVal ===ch[0]){
   cWin();
}
else{
   hWin();
}

   
}
function player1(){
for(item of iVal){
   item.addEventListener("click",(e)=>{
     hDisp = e.currentTarget;
     //console.log(iVal[0]);
     hDisp.style.backgroundColor="blue";
     hDisp.style.cursor ="pointer";
     hDisp.style.fontSize ="50px";
      //console.log(hDisp);
      if(hDisp === iVal[0]){
         //console.log("Rock");
         hVal ="Rock";
         hshow.textContent = hVal;
      }else if(hDisp === iVal[1]){
         hVal = "Paper"
         hshow.textContent = hVal;
      }
      else{
         hVal = "Scissor";
         hshow.textContent = hVal;
      }
     hshow.style.textAlign="center";
   })
}
}
function player2(){

   randNum = Math.floor(Math.random()*3);
   for(let i=0;i<ch.length;i++){
      if(randNum === 0){
         cVal = ch[0];
         chDisp.textContent = cVal;
      }else if(randNum === 1){
         cVal = ch[1];
         chDisp.textContent = cVal;
      }else{
         cVal = ch[2];
         chDisp.textContent = cVal;
      }
   }
   chDisp.style.textAlign ="center";

}
