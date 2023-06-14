// Recuperiamo l'array answerRecap dallo script precedente, compilato ccon la sessione odierna
// Ne impostiamo uno di default per contuare la progettazione
const answersRecap = sessionStorage.getItem('answersRecap') === null? [2, 4] : sessionStorage.getItem('answersRecap').split(",");  
answersRecap[0] = parseInt(answersRecap[0])
answersRecap[1] = parseInt(answersRecap[1])
// Formuliamo una variabile che indica il totale delle domande, ottenuto dalla
// somma delle risposte giuste e quelle sbagliate
const totalAnswer = answersRecap[0] + answersRecap [1]
// Calcoliamo la percentuale delle risposte corrette
const correctPercentage = ((answersRecap[0]*100) / totalAnswer).toFixed(1)
// Calcoliamo la percentuale delle risposte sbagliate
const wrongPercentage = ((answersRecap[1]*100) / totalAnswer).toFixed(1)
// Inseriamo le percentuali calcolate rispettivamente nelle righe 7 e 9 all'interno dell'HTML e
// inseriamo anche i valori delle risposte corrette/errate sul totale delle domande
document.getElementById('correct-percentage').innerHTML = correctPercentage + '% '
document.getElementById('correct-number').innerHTML = answersRecap[0] + '/' + totalAnswer

document.getElementById('wrong-percentage').innerHTML = wrongPercentage + '% '
document.getElementById('wrong-number').innerHTML = answersRecap[1] + '/' + totalAnswer
// Aggiungiamo un event listener al button "rate us" per farlo reagire al click e trasportarci alla pagina successiva
let button = document.getElementById('button-rate-us')
button.addEventListener('click', function(e){
    e.preventDefault()
    window.location.href = '/review.html'
})

/*#########
  # CHART #
  #########*/
// Inizializziamo le variabili per il testo che dovrà apparire all'interno del grafico
let chartTopText
let chartMiddleText 
let chartBottomText 

if (correctPercentage > 60)
{
  // Testo che dovrà apparire se si supera il test
    chartTopText = 'Bravoohh'
    chartMiddleText = 'Ti meriti una caramella!'
    chartBottomText = 'Bravoohh Bravoohh Bravoohh Bravissimooo!' 
} 
else 
{
  // Testo che dovrà apparire se non si supera il test
    chartTopText = 'cattivo'
    chartMiddleText = 'Non ti meriti nulla!'
    chartBottomText = 'Bravoohh Bravoohh Bravoohh proprio per niente!'
}

      //Scritta di sopra
      const doughnutLabelTop = {
        id: "doughnutLabel",
        beforeDatasetsDraw(chart, args, pluginOptions) {
          const { ctx, data } = chart
          ctx.save()
          const xCoor = chart.getDatasetMeta(0).data[0].x
          const yCoor = chart.getDatasetMeta(0).data[0].y - 30
          ctx.font = "bold 1em sans-serif"
          ctx.fillStyle = "white"
          ctx.textAlign = "center"
          ctx.fillText("PUNTEGGIO", xCoor, yCoor)
        },
      }

      //Scritta in mezzo
      const doughnutLabelMiddle = {
        id: "doughnutLabel",
        beforeDatasetsDraw(chart, args, pluginOptions) {
          const { ctx, data } = chart
          ctx.save()
          const xCoor = chart.getDatasetMeta(0).data[0].x
          const yCoor = chart.getDatasetMeta(0).data[0].y
          ctx.fillText(correctPercentage + "%", xCoor, yCoor)
        },
      }

      //Scritta sotto
      const doughnutLabelBottom = {
        id: "doughnutLabel",
        beforeDatasetsDraw(chart, args, pluginOptions) {
          const { ctx, data } = chart
          ctx.save()
          const xCoor = chart.getDatasetMeta(0).data[0].x
          const yCoor = chart.getDatasetMeta(0).data[0].y + 30
          ctx.fillText(answersRecap[0] + '/' + totalAnswer + " domande", xCoor, yCoor)
        },
      }

const ctx = document.getElementById("myChart")

      new Chart(ctx, {
        type: "doughnut",
        plugins: [doughnutLabelTop, doughnutLabelMiddle, doughnutLabelBottom],
        options: {
          cutout: "70%",
          responsive: true,
        },
        style: {
          weight: 10,
        },
        data: {
          labels: ["Risposte errate", "Risposte corrette"],
          datasets: [
            {
              label: "Risultati finali",
              data: [answersRecap[1], answersRecap[0]],
              backgroundColor: ["#D20094", "#00FFFF"],
            },
          ],
        },
      })


