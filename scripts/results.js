const answersRecap = sessionStorage.getItem('answersRecap') === null? [2, 4] : sessionStorage.getItem('answersRecap').split(",");  

const totalAnswer = answersRecap[0] + answersRecap [1]
const correctPercentage = ((answersRecap[0]*100) / totalAnswer).toFixed(1)
const wrongPercentage = ((answersRecap[1]*100) / totalAnswer).toFixed(1)
document.getElementById('correct-percentage').innerHTML = correctPercentage + '% '
document.getElementById('correct-number').innerHTML = answersRecap[0] + '/' + totalAnswer

document.getElementById('wrong-percentage').innerHTML = wrongPercentage + '% '
document.getElementById('wrong-number').innerHTML = answersRecap[1] + '/' + totalAnswer

let button = document.getElementById('button-rate-us')
button.addEventListener('click', function(e){
    e.preventDefault()
    window.location.href = '/review.html'
})

/*#########
  # CHART #
  #########*/

let chartTopText
let chartMiddleText 
let chartBottomText 

if (correctPercentage > 60)
{
    chartTopText = 'Bravoohh'
    chartMiddleText = 'Ti meriti una caramella!'
    chartBottomText = 'Bravoohh Bravoohh Bravoohh Bravissimooo!' 
} 
else 
{
    chartTopText = 'cattivo'
    chartMiddleText = 'Non ti meriti nulla!'
    chartBottomText = 'Bravoohh Bravoohh Bravoohh proprio per niente!'
}

const fistText = "Punteggio"


      //Scritta di sopra
      const doughnutLabelTop = 
      {
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


