const prompt=require("prompt-sync")();

console.log("Welcome!!");

let playerName=undefined;
let firstCharacterOfName=undefined;
let otherCharacterOfName=undefined;
let finalName=undefined;
let confirm=undefined;

const QnAs=[
    {Questoion: "What is the capital of France?",Answer: "Paris"},
    {Questoion: "Who wrote 'Romeo and Juliet'?", Answer: "William Shakespeare"},
    {Questoion: "What is the largest planet in our solar system?",Answer: "Jupiter"},
    {Questoion: "In which year did the India get freedom from EIC", Answer:"1947"},
    {Questoion: "Who painted the Mona Lisa?",Answer: "Leonardo da Vinci"},
    {Questoion: "What is the currency of India?",Answer: "Rupee"},
    {Questoion: "Who is known as the 'Father of Computer Science'?",Answer: "Alan Turing"},
    {Questoion: "What is the main component of Earth's atmosphere?",Answer: "Nitrogen"},
    {Questoion: "Which element has the chemical symbol 'H'?", Answer:"Hydrogen"},
    {Questoion: "What is the longest river in the world?",Answer: "Amazon"}
];

const welcomeScreen=()=>{
    playerName=prompt("Enter your name:");
    console.log(playerName);
    finalName=editEnteredName(playerName)
    confirmName(finalName);
}

function editEnteredName(playerName){
    firstCharacterOfName=playerName.toUpperCase().slice(0,1);
    otherCharacterOfName=playerName.toLowerCase().slice(1,playerName.length);
    let finalName=firstCharacterOfName+otherCharacterOfName;
    return finalName;
}

function confirmName(){
    console.log(`Your name is ${finalName}`);
    confirm=parseInt(prompt("Confirm Name(1, 0)"));
    if(confirm){
        mainMenu();
    }
    else{
        welcomeScreen();
    }
}

function quizStart(){
    let i=0;
    let score=0;
    let correctAnswers=0;
    let totalIncorrectAnswers=0;
    let incorrectAnswerCount=0;
    let cA=[]; //to store the question of correct answers

    while(i < QnAs.length)
    {
        let ans;
        const currentQuestion=QnAs[i];
        ans=prompt(`${currentQuestion.Questoion}`);
        if(ans===currentQuestion.Answer){
            console.log("Correct!");
            score+=10;
            correctAnswers++;
            cA[i]=QnAs[i].Questoion;
            console.log(`Index: ${i} value: ${cA[i]}`);
        }
        else{
            console.log("Incorrect :(");
            if(incorrectAnswerCount===2)
            {
                score-=5;
                incorrectAnswerCount=0;
            }
            cA[i]=0;
            console.log(`index ${i} value ${cA[i]}`);
            incorrectAnswerCount++;
            totalIncorrectAnswers++;
        }
        i++;
        if(i===QnAs.length)
        {
            console.log("Quiz Ended.")
            scoreScreen(score,cA,totalIncorrectAnswers,correctAnswers);
            console.log(`--------------------------------------`);
            console.log(`             Quiz Ended`);
            console.log(`--------------------------------------`);
            exitScreen();
        }
    }
    
}

function scoreScreen(score,cA,totalIncorrectAnswers,correctAnswers){
    console.log(`                   --------------------------------------`);
    console.log(`                     |      Your Score :--> ${score}      |`);
    console.log(`                   --------------------------------------`);
    console.log(`****************************************************************************`);
    console.log(`Incorrect Answers: ${totalIncorrectAnswers}`);
    console.log(`Correct Answers: ${correctAnswers}`);

    if(correctAnswers>0)
    {
        console.log(` --------------------------------------`);
        console.log(`Your Correct Answer Questions:`);
        console.log(`--------------------------------------`);
        for(let i=0;i<QnAs.length;i++)
        {
            if(cA[i])
            {
                console.log(`${cA[i]}`);
            }
        }
    }
    if(totalIncorrectAnswers>0)
    {
        let i=0;
        console.log(`--------------------------------------`);
        console.log(`Your Incorrect Answer Questions:`);
        console.log(`--------------------------------------`);
        while(i<QnAs.length)
        {
            if(cA[i]===0)
            {
                console.log(`${QnAs[i].Questoion}`);
            }
            i++;
        }
    }
}

function howToPlay(){
    console.log(`--------------------------------------`);
    console.log(`This is a simple Quiz game built that where-->`);
    console.log(`1) You can type the answers to the questions and move to the next question.`);
    console.log(`2) After the the quiz ends a Total Score,Total Correct Answers & Questions are displayed.`);
    console.log(`3) Your correct and incorrect answers are also displayed.`);
    console.log(`###-- Each correct answer gets 10 points and a -5 for evey two incorrect questions --###`);
    console.log(`--------------------------------------`);
}

function mainMenu()
{
    console.log(`1) Start Quiz`);
    console.log(`2) How To Play`);
    console.log(`3) Exit`);
    let ch=parseInt(prompt(`Enter your choice:`));
    switch(ch)
    {
        case 1:
            quizStart();
            break;
        case 2:
            howToPlay();
            mainMenu();;
            break;
        case 3:
            exitScreen();
            break;
        default:
            console.log(`Enter a valid choice.`);
            mainMenu();
    }
}

function exitScreen(){
    let confirm=parseInt(prompt(`Do you want to exit(1, 0)`));    
    if(confirm){
        return;
    }
    else{
        mainMenu();
    }
}

welcomeScreen();




