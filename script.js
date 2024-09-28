let userScore=0;
let compScore=0;
let btn1= document.querySelector(".btn1")
let users=document.querySelector("#users")
let comps=document.querySelector("#comps")

const choices=document.querySelectorAll(".box");


genCompChoice = () =>{
    const options=["rock", "paper", "sci"];
    ch=Math.floor(Math.random()*3);
    return options[ch];
}

const playGame = (userChoice) =>{
   const compChoice= genCompChoice();
   console.log(`User has clicked ${userChoice}`);
   console.log(`Comp has clicked ${compChoice}`);
   if(userChoice==compChoice){
    btn1.innerText="Draw";
    btn1.style.backgroundColor="Indigo";
}

   else if (userChoice=='sci' && compChoice=='paper'){
    btn1.innerText="You Win!!  your scissors beat paper";
    btn1.style.backgroundColor="Green";
    userScore+=1;
    users.innerText=userScore;
    comps.innerText=compScore;
   }

   else if (userChoice=='sci' && compChoice=='rock'){
    btn1.innerText="You Lose!!  your Scissors lost to rock";
    btn1.style.backgroundColor="Red";
    compScore+=1;
    users.innerText=userScore;
    comps.innerText=compScore;
   }

   else if (userChoice=='rock' && compChoice=='sci'){
    btn1.innerText="You Win!!  your rock beat scissors";
    btn1.style.backgroundColor="Green";
    userScore+=1;
    users.innerText=userScore;
    comps.innerText=compScore;
   }

   else if (userChoice=='rock' && compChoice=='paper'){
    btn1.innerText="You Lose!! your rock lost to paper";
    btn1.style.backgroundColor="red";
    compScore+=1;
    users.innerText=userScore;
    comps.innerText=compScore;
   }

   else if (userChoice=='paper' && compChoice=='rock'){
    btn1.innerText="You Win!! your paper beat rock";
    btn1.style.backgroundColor="Green";
    userScore+=1;
    users.innerText=userScore;
    comps.innerText=compScore;
   }

   else if (userChoice=='paper' && compChoice=='sci'){
    btn1.innerText="You Lose!! your paper lost to scissors";
    btn1.style.backgroundColor="Red";
    compScore+=1;
    users.innerText=userScore;
    comps.innerText=compScore;
   }

   


};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

        
    });
});
