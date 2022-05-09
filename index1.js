let uVal;
let userSpace = document.getElementById('u-space');
let cSpace = document.getElementById('c-space');
let ch = ['Rock','Paper','Scissor'];
let cVal;
let res = document.getElementById('result-disp');
let result;
let winner = document.getElementById('res-show');

//user playing

function Human(value){
    uVal = value;
    userSpace.textContent = uVal;
    userSpace.style.textAlign = 'center';
    userSpace.style.marginTop = '5vh';
    userSpace.style.fontSize = '21px';

    Computer();
    Result();
    
}

//computer playing
function Computer(){
    let randNum = Math.floor(Math.random()*3)+1;
    console.log(randNum);
    
    if(randNum === 1){
        cVal = ch[0];
    }
    else if(randNum === 2){
        cVal = ch[1];
    }
    else{
        cVal = ch[2];
    }
    cSpace.textContent = cVal;
    cSpace.style.textAlign = 'center';
    cSpace.style.marginTop = '5vh';
    cSpace.style.fontSize = '21px';
}

   function Result(){
    if(uVal === cVal){
        console.log('Tie');
        result = "It's a Tie";
    }
    else if(uVal === 'Rock'&&cVal === ch[1] || uVal ==='Paper'&& cVal === ch[2] || uVal ==='Scissor' && cVal === ch[0]){
        result = "Oops! You Lost";
    }
    else{
        result = "Hurray!! You Won";
    }
    winner.textContent = result;
    winner.style.width = '65vw';
    winner.style.marginTop = '20vh';
    winner.style.textAlign = 'center';
    winner.style.fontFamily = 'comic sans Ms';
   }


   
