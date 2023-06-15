const timerDefault = 40
let timer = timerDefault
let interval
let chart = new Chart()
    

//Plug in per il testo
const timerText = {
    id: "doughnutLabel",
    beforeDatasetsDraw(chart) {
      const { ctx, data } = chart
      ctx.save()
      const xCoor = chart.getDatasetMeta(0).data[0].x
      const yCoor = chart.getDatasetMeta(0).data[0].y
      ctx.font = "bold 3em sans-serif"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.fillText(timer, xCoor, yCoor)
    },
  }
  //Grafica del timer
  const timerGraphic = function(timer){
    chart.destroy()
    chart = new Chart(ctx, 
    {
      type: "doughnut",
      plugins: [timerText],
      options: {
        cutout: "90%",
        responsive: true,
        animation: {
          duration: 0
      }
      },
      style: 
      {
        weight: 14000,
      },
      data: 
      {
        datasets: 
        [
          {
            data: [ timerDefault-timer, timer],
            backgroundColor: ["black", "rgb(54, 162, 235)"],
            borderWidth: 1,
            hoverOffset: 4,
          },
        ],
      },
    })
  }
  
  function intervallo() {
    //SetInterval ripete delle istruzione ogni tot secondi va dichiarato come variabile per fare clearInterval
    interval = setInterval(function () 
    {
      //Aggiorno il timer ogni secondo
      timerGraphic(timer)
      //Diminuisco di 1 i secondi ad ogni ciclo
      timer -= 1
      //Se il timer finisce, pulisco l'intervallo
      if (timer < 0) 
      {
        timer = timerDefault
        clearInterval(interval)
        answersRecap[1]++
        questionAnswers.push("false")
        document.getElementById("question-number").innerHTML =
        questionAnswers.length + 1 + "/" + questions.length
        pushQuestion()
      }  
  
  
    }, 1000)
  }
