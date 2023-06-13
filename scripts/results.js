// answersRecap = sessionStorage.getItem('answersRecap');
const answersRecap = [2,4]
console.log(answersRecap)

const totalAnswer = answersRecap[0] + answersRecap [1]
const correctPercentage = (answersRecap[0]*100) / totalAnswer
const wrongPercentage = (answersRecap[1]*100) / totalAnswer
document.getElementById('correct-percentage').innerHTML = correctPercentage.toFixed(1) + '% '
document.getElementById('correct-number').innerHTML = answersRecap[0] + '/' + totalAnswer

document.getElementById('wrong-percentage').innerHTML = wrongPercentage.toFixed(1) + '% '
document.getElementById('wrong-number').innerHTML = answersRecap[1] + '/' + totalAnswer

let messageResultExam = document.getElementById('final-results')
let messageResultExam2 = document.getElementById('final-results-2')
let messageResultExam3 = document.getElementById('results-message')
if (correctPercentage > 60){
    messageResultExam.innerText = 'Bravoohh'
    messageResultExam2.innerText = 'Ti meriti una caramella!'
    messageResultExam3.innerText = 'Bravoohh Bravoohh Bravoohh Bravissimooo!' 
} else {
    messageResultExam.innerText = 'cattivo'
    messageResultExam2.innerText = 'Non ti meriti nulla!'
    messageResultExam3.innerText = 'Bravoohh Bravoohh Bravoohh proprio per niente!'
}

let button = document.getElementById('button-rate-us')
button.addEventListener('click', function(e){
    e.preventDefault()
    window.location.href = '/review.html'
})




