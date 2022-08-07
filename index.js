const readlineSync = require("readline-sync")
const chalk = require("chalk")

let score = 0;

const highScore = {
  name: "Suman",
  score: "14",
}

console.log(chalk.red("Welcome To" + chalk.bold("'FESTIVALS OF INDIA'") + "Quiz\n"))
var userName = readlineSync.question(chalk.blue("What Is Your Name? \n-> "))


console.log(`\nHi, ${userName} Let's Read The Rules Of The Quiz.\n`)
console.log(chalk.bold.blue("The Rules:-\n") + "1. It Will Have 10 MCQ Questions.\n2. Each questions will have 4 options.\n3. You Have To Write The Serial Number Of The Right Answer.\n4. Each Question has 2 Marks\n")


let userPermission = readlineSync.question("Type" + chalk.blue(" Y") + " if You Are Ready, or Type" + chalk.red(" N") + " if you are not ready.\n-> ")
var permission = "Y"

if (userPermission.toLowerCase() === permission.toLowerCase()) {
  console.log("\nGreat, Let's Start The Quiz.")
  console.log("---------------")


  let quizQuestions = [

    {
      options: ["Punjab", "Maharashtra", "West-Bengal", "Gujrat"],
      question: "In which state of India the festival of Ganesh Chaturthi is prominently celebrated?",
      answer: "Maharashtra"
    },
    {
      options: ["Hindus", "Sikhs", "Christians", "Jains"],
      question: "People of which religion celebrate Good Friday?",
      answer: "Christians"
    },
    {
      options: ["Ganesh", "Krishna", "Shiva", "Visnu"],
      question: "The birth of which lord is celebrated every year all across India on Janmashtami festival?",
      answer: "Krishna"
    },
    {
      options: ["Karnataka", "Tamilnadu", "Telengana", "Kerala"],
      question: "Onam, the harvest festival, is celebrated in which state of India?",
      answer: "Kerala"
    },
    {
      options: ["Hindus", "Sikhs", "Jains", "Christians"],
      question: "Gurpurab, the festival of the guru, is celebrated by people of which religion?",
      answer: "Sikhs"
    },
    {
      options: ["Rajasthan-Gangaur", "Uttarakhand-Harela", "Telangana-Durga Puja", "Maharashtra-Ganesh Chaturthi"],
      question: "Which of the following pair is ‘incorrect’ with reference to state and their main festivals?",
      answer: "Telangana-Durga Puja"
    },
    {
      options: ["Ram", "Shiva", "Visnu", "Jagannath"],
      question: "The Rath Yatra at Puri is celebrated in honour of which Hindu deity?",
      answer: "Jagannath"
    },
    {
      options: ["Makar Sankranti", "Bihu", "Diwali", "Vasanta Panchami"],
      question: "Which festival is the harvest festival?",
      answer: "Makar Sankranti"
    },
    {
      options: ["Row of Color", "Row Of Lights", "Victory Of Lights", "Colorful Lights"],
      question: "The name Diwali is derived from the Sanskrit term dipavali. What is dipavali’s English translation?",
      answer: "Row Of Lights"
    },
    {
      options: ["Goverdhan Puja", "Naraka Chaturdashi", "Lakshmi Puja", "Dhanteras"],
      question: "Which is the first day of Diwali, dedicated to cleaning homes and purchasing small items of gold?",
      answer: "Dhanteras"
    },
  ];

  const play = ((currentQues, index) => {
    console.log(chalk.blue(`q${index + 1}: ${currentQues.question}`))
    let userAnswer = readlineSync.keyInSelect(currentQues.options, 'Choose one from options', { cancel: false })
    console.log('\n')

    if (currentQues.options[userAnswer] === currentQues.answer) {
      console.log('You are Right.');
      score = score + 2;
      console.log("\n>> " + chalk.bold.bgGreen(" Your Score Is " + score + " ") + " <<\n")
      console.log('---------------')
    } else {
      console.log('You are Wrong.');
      console.log('The Correct Answer is: ' + chalk.red(currentQues.answer));
      console.log("\n>> " + chalk.bgRed.black.bold(" Your Score Is " + score + " ") + " <<\n")
      console.log('---------------')
    }
  })


  quizQuestions.map(play)


  console.log("\nCongratulations, " + chalk.blue(userName) + " !! You Have Successfully Completed The Quiz.\n")

  console.log("=> " + chalk.bgBlue.black.bold(" Your Total Score Is " + score + " ") + " <=\n")

  if (score > highScore.score) {
    console.log(chalk.blue.bold(">>> Congratulations!!! " + userName + " you have the highest score now. <<<\n"))
    console.log("Please send a Screenshot of this to me!")
  } else {
    console.log("Highest Scorer is\nName:- " + highScore.name + "\nScore:- " + highScore.score)
  }

  console.log(chalk.bold("\nThank You") + " For Taking The Quiz. Have A Great Day Ahead.")
} else {
  console.log(chalk.blue("\nNo Problem " + userName + ", Start The Quiz Whenever You Are Ready!!"))
}




