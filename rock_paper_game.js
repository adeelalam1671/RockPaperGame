let userchoice = 0;
let compchoice = 0;
let userScore = 0;
let compScore = 0;
let userPara = document.querySelector(".userScore");
let compPara = document.querySelector(".compScore")
const choices  = document.querySelectorAll(".choice");
let play_msg = document.querySelector(".play_msg")

const getCompChoice = ()=>
{
    let getchoice = ["rock","paper","scisser"];
    let ranIndx = Math.floor(Math.random()*3);
    return getchoice[ranIndx];
}
const showWin = (userWin,userchoice,compchoice) =>{
     if(userWin)
     {
        userScore++;
        userPara.innerText = userScore;
       play_msg.innerText = `You Win: ${userchoice} beats ${compchoice}`;
       play_msg.style.background = "green";
       
      
       
     }else 
     {
        compScore++;
         compPara.innerText = compScore;
      play_msg.innerText =  `You Lose: ${compchoice} beats ${userchoice}`;
      play_msg.style.background = "red";
      

      
     }
    
     
     
}
 const drawGame = () =>
 {
    play_msg.innerText = "Draw Match,Play Again";
     play_msg.style.background = "blue";
 }
const playGame = (userchoice) =>
    {
       console.log("user choice :" ,  userchoice);
      const compchoice  = getCompChoice();
        console.log("comp choice :" , compchoice);
        if(userchoice === compchoice)
        {
          drawGame();

        }
        else{
            let userWin = true;
            if(userchoice === "rock")
            {
              userWin =   compchoice === "paper"?false:true;
            }
            else if(userchoice === "paper")
            {
                userWin = compchoice === "scisser"?false:true;
            }
            else{
                userWin = compchoice ==="rock"?false:true;
            }
            showWin(userWin,userchoice,compchoice);
        }
    }
     

choices.forEach((choice) => {
    choice.addEventListener("click",() =>
    {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);

    })
})