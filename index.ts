
import inquirer from "inquirer";

const quiz : {
    question_1 : string;
    question_2 : string;
    question_3 : string;
    question_4 : string;
    question_5 : string;
} = await inquirer.prompt([
    {
        name: "question-1",
        type: "list",
        message: "Q1.what is the correct way  to check if two values are not equal in typescript?",
        choices:["a == b","a === b","a = b","a !== b"]
    },
    {
        name: "question-2",
        type: "list",
        message: "Q2.Which of the following charaters is commonly allowed in variable names in Typesscript?",
        choices:  ["$","@","#","&"]
    },
    {
        name: "question-3",
        type: "list",
        message: "Q3.which operater is commonly used for string concatenation in Typescript?",
        choices:  ["+","-","*","/"]
    },
    {
        name: "question-4",
        type: "list",
        message: "Q4.Intypescript, which symbol is commonly used to terminate a statement?",
        choices:  [".",":",";",","]
    },
    {
        name: "question-5",
        type: "list",
        message: "Q5.Which method of inquirer.js is used to start the prompt interface and receive user input?",
        choices:  ["start()","prompt()","init()","run()"]
    },
]);

let score : number = 0;
 switch(quiz.question_1){
    case "a !== b":
        console.log("1. correct!");
        ++score;
        break;
        default:
            console.log("1.incorrect");    
 }
 switch(quiz.question_2){
    case "$":
        console.log("2. correct!");
        ++score;
        break;
        default:
            console.log("2.incorrect");
 }           

switch(quiz.question_3){
   case "+":
       console.log("3. correct!");
       ++score;
       break;
       default:
           console.log("3.incorrect");
}

switch(quiz.question_4){
   case ";":
       console.log("4. correct!");
       ++score;
       break;
       default:
           console.log("4.incorrect");
}

switch(quiz.question_5){
   case "prompt()":
       console.log("5. correct!");
       ++score;
       break;
       default:
           console.log("5.incorrect");
}
console.log(`score:${score}`);