const timerHTML = document.getElementById("timer-seconds")
const intervallo = function(timer)
{
    //SetInterval ripete delle istruzione ogni tot secondi va dichiarato come variabile per fare clearInterval
    const interval = setInterval(function() 
    {
        console.log(timer)
        //Diminuisco il timer ogni secondo
        timer -= 1
        timerHTML.innerHTML = timer
        //Se il timer finisce, pulisco l'intervallo 
        if (timer < 0) 
        {
            clearInterval(interval)
            timerHTML.innerHTML = "TEMPO SCADUTO";
        }
    }, 1000);   
}

intervallo(9)