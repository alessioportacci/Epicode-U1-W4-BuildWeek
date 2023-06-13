
const stars = document.querySelectorAll(".star-off")
stars.forEach( star => {
    
    star.addEventListener("click", function(){
        stars.forEach(s => s.classList.remove('star-on'))
        let id = star.id.substring(5)
        for(let i=0; i < parseInt(id); i++)
            stars[i].classList.add('star-on')

    })
}) 

const finish = document.getElementById('button-finish')
finish.addEventListener('click', function(e){
    e.preventDefault()
    window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
})