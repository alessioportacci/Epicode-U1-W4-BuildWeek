// Carichiamo l'array contenente le domande
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
//Variabili utilizzate nella pagina
const questionIndex = []
// Creiamo un'array vuoto che conterrà l'indice delle risposte
const questionAnswers = []
const ctx = document.getElementById("myChart")
const timerHTML = document.getElementById("timer-seconds")
let answersRecap = [0, 0]
let index


const pushAnswers = function (question) {
  // Targettiamo gli ID dei box contenenti le risposte che dovranno sparire quando il tipo di domanda sarà booleana
  const multiplebox2 = document.getElementById("ans2")
  const multiplebox3 = document.getElementById("ans3")

  //Se è a risposta multipla
  if (question.type === "multiple") {
    // Generiamo un index random per posizionare randomicamente la risposta giusta
    const trueIndex = Math.floor(Math.random() * 4)
    console.log(trueIndex)
    let i = 0
    // Generiamo una variabile per identificare se la domanda giusta è stata inserita (diventerà successivamente 1)
    // oppure se non è ancora stata inserita (sarà uguale a 0)
    let truePassed = 0
    // Rimuoviamo la classe ".none" quando ci sarà una domanda a risposta multipla
    multiplebox2.classList.remove("none")
    multiplebox3.classList.remove("none")
    while (i < 4) {
      const answerBox = document.getElementById("ans" + i)
      // Quando i coinciderà con la posizione della risposta giusta attribuirà il valore true al box contenente la risposta
      if (i === trueIndex) {
        answerBox.innerHTML = question.correct_answer
        answerBox.setAttribute("value", "true")
        // la variabile truePassed diventerà 1 una volta posizionata la risposta giusta
        truePassed = 1
      } else {
        // Nel caso i non coincidesse con trueIndex, attribuiremo un valore false ai box contenenti le risposte sbagliate
        answerBox.setAttribute("value", "false")
        answerBox.innerHTML = question.incorrect_answers[i - truePassed]
      }
      i++
    }
  }
  //Se è a risposta booleana
  else {
    // Generiamo randomicamente la posizione in cui inserire la risposta corretta
    const trueIndex = Math.floor(Math.random() * 2)
    console.log(trueIndex)
    let trueBox = document.getElementById("ans0")
    let falseBox = document.getElementById("ans1")
    // Aggiungiamo a due box di risposte la classe ".none" per farle sparire quando il test sarà di tipo booleano
    multiplebox2.classList.add('none')
    multiplebox3.classList.add('none')

    if (trueIndex == 1) {
      // Se l'indice della risposta corretta è pari a 2, la risposta errata sarà necessariamente nell'altro box
      trueBox = document.getElementById("ans1")
      falseBox = document.getElementById("ans0")
    }

    trueBox.innerHTML = question.correct_answer
    trueBox.setAttribute("value", "true")
    falseBox.innerHTML = question.incorrect_answers[0]
    trueBox.setAttribute("value", "false")

  }
}


// Creiamo una funzione che peschi una domanda randomica dall'array fornito
const pushQuestion = function () {
  //Prendo un index randomico
  index = Math.floor(Math.random() * 10)
  //Se sono finite le domande
  if (questionIndex.length === questions.length) {
    sessionStorage.setItem("answersRecap", answersRecap)
    window.location.href = "results.html"
  }
  //Se il numero è già uscito, vai di ricorsività
  else if (questionIndex.includes(index)) pushQuestion()
  //Se possiamo prenderci un'altra domanda
  else 
  {
    //Aggiorno il timer
    timer = timerDefault
    intervallo(timerDefault)
    //Pusho l'index e carico la domanda
    questionIndex.push(index)
    const question = questions[index]
    document.getElementById("questions").innerHTML = question.question
    //Pusho le domande
    pushAnswers(question)
    intervallo(1000)
  }
}

//Mi prendo tutti i box delle risposte
const answerBoxes = document.querySelectorAll(".answer")
//Ad ogni box aggiungo un evento di click
answerBoxes.forEach(function (box) {
  box.addEventListener("click", function () {
    //Resetto l'intervallo alla risposta
    clearInterval(interval)

    //Mi prendo il valore della risposta
    questionAnswers.push(box.getAttribute("value"))
    //Aggiorno il box
    document.getElementById("question-number").innerHTML =
      questionAnswers.length + 1 + "/" + questions.length
    console.log("Answers recap" + answersRecap)
    //Se la risposta è giusta
    if (box.getAttribute("value") == "true") {
      // Apparirà un alert per avvertirti che la risposta è giusta
      alert("Bravissimo")
      // L'array answerRecap[] aumenterà il suo primo valore di uno per ogni risposta giusta
      answersRecap[0]++
    }
    //Se la risposta è sbagliata
    else {
      // Apparirà un alert se la risposta è sbagliata
      alert("Hai toppato Chicco!!")
    // L'array answerRecap[] aumenterà il suo secondo valore di uno per ogni risposta sbagliata
      answersRecap[1]++
    }
    pushQuestion()
  })
})

document.getElementById("question-number").innerHTML =
  1 + "/" + questions.length
pushQuestion()
