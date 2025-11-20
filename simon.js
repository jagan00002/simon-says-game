let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

// /step 1
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText =`Level ${level}`;

let randIdx=Math.floor(Math.random()*4);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);

gameseq.push(randColor);
console.log(gameseq);
gameFlash(randBtn);

}

function checkAns(idx){
    console.log("curr level :",level);

    // let idx=level-1;

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerText =`game over ,your score is ${level}  you can start by clicking any key. `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

 let allBtns=document.querySelectorAll(".btn");
 for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
 }
  
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}