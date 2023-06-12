const form = document.getElementById ("form-proceed")
const button = document.getElementById ("proceed")
const check = document.getElementById ("check")

button.addEventListener("click", function(e){
    e.preventDefault()
    if (check.checked) {
        window.location.href = "/test.html" 
    } else {

    }
}
)
console.log(check)