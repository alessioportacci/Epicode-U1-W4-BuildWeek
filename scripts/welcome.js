const button = document.getElementById("proceed")
// Abbiamo creato le variabili, creiamo le funzioni
button.addEventListener("click", function (e) {
// Preveniamo il comportamento di default del form
  e.preventDefault()
  //Controllo la validità del form prima di procedere
  if (document.forms["form-proceed"].reportValidity())
  //Carichiamo la pagina successiva al click del button 
    window.location.href = "/difficulty.html"
})
