
//Selezioniamo tutte le stelline
const stars = document.querySelectorAll(".star-off")
//Per ogni stellina aggiungiamo un event listener
stars.forEach( star => 
{
    star.addEventListener("click", function()
    {
        //Rimuoviamo la classe che accende le stelline
        stars.forEach(s => s.classList.remove('star-on'))
        /* Contiamo quale stellina abbiamo cliccato ed illuminiamo
           lei e tutte quelle precedenti */
        let id = star.id.substring(5)
        for(let i=0; i < parseInt(id); i++)
            stars[i].classList.add('star-on')
    })
}) 

//Mi prendo il pulsante finale
const finish = document.getElementById('button-finish')
//Se lo clicchi vieni Rick Rollato (te l'abbiamo fatta)
finish.addEventListener('click', function(e)
{
    e.preventDefault()
    window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
})