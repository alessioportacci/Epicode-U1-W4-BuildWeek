const button = document.getElementById ("proceed")
const check = document.getElementById ("check")
// Abbiamo creato le variabili, creiamo le funzioni
button.addEventListener("click", function(e){
    e.preventDefault()
    //Controllo la validità del form prima di procedere
    if (document.forms["form-proceed"].reportValidity())
        window.location.href = "/test.html" 
}
)
