const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
]

const pushAnswers = function (question) 
{
  //Se è a risposta multipla
  if (question.type === "multiple") 
  {
    const trueIndex = Math.floor(Math.random() * 4 + 1)
    let i = 0
    let truePassed = false
    while (i < 4) 
    {
      if (i === trueIndex) 
      {
            const answerBox = document.getElementById("ans" + i)
            answerBox.innerHTML = question.correct_answer
            answerBox.setAttribute("value", "true")
            truePassed = true
      }
      else 
      {
            const answerBox = document.getElementById("ans" + i)
            answerBox.setAttribute("value", "false")
            if (truePassed) 
                answerBox.innerHTML = question.incorrect_answers[i - 1]
            else 
                answerBox.innerHTML = question.incorrect_answers[i]
      }
      i++
    }
  }
  //Se è a risposta booleana
  else 
  {
        const trueIndex = Math.floor(Math.random() * 2 + 1)

        let trueBox = document.getElementById("ans0")
        let falseBox = document.getElementById("ans1")

        if (trueIndex == 2)
        {
            trueBox = document.getElementById("ans1")
            falseBox = document.getElementById("ans0")
        }

        trueBox.innerHTML = question.correct_answer
        falseBox.innerHTML = question.incorrect_answers[0]
  }
}

const questionIndex = []
const questionAnswers = []
let index 

const pushQuestion = function () 
{
  //Prendo un index randomico
  index = Math.floor(Math.random() * 10)
  if (questionIndex.includes(index))
    //Se è già uscito, vai di ricorsività
    pushQuestion()
  else 
  {
    //Pusho l'index e carico la domanda
    questionIndex.push(index)
    const question = questions[index]
    document.getElementById("questions").innerHTML = question.question
    //Pusho le domande
    pushAnswers(question)
    intervallo(10)
  }
}

const timerHTML = document.getElementById("timer-seconds")
function intervallo(timer) 
{
  //SetInterval ripete delle istruzione ogni tot secondi va dichiarato come variabile per fare clearInterval
  const interval = setInterval(function () 
  {
    //Diminuisco il timer ogni secondo
    timerHTML.innerHTML = timer
    timer -= 1
    //Se il timer finisce, pulisco l'intervallo
    if (timer < 0) 
    {
      clearInterval(interval)
      timerHTML.innerHTML = "TEMPO SCADUTO"
      pushQuestion()
    }
  }, 1000)
}

//Mi prendo tutti i box delle risposte 
const answerBoxes = document.querySelectorAll(".answer")
//Ad ogni box aggiungo un evento di click
answerBoxes.forEach(function(box)
{
    box.addEventListener("click", function()
    {
        //Mi prendo 
        questionAnswers.push(box.getAttribute("value"))
        console.log(questionAnswers)
        if(box.getAttribute("value") == "true")
            alert("Bravissimo")
        else
            alert("Sei una merdaccia")
        pushQuestion()
    })
})

pushQuestion()