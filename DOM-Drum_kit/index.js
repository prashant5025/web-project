let buttonArray = document.querySelectorAll('.drum');

buttonArray.forEach(function(element) {
    element.addEventListener("click", function() {
        console.log(this.innerHTML);
    })
})

