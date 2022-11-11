let buttonArray = document.querySelectorAll('.drum');

document.addEventListener('keypress',(event) => {
    let key = event.key;
    playSound(key);
})

buttonArray.forEach((button) => {
    button.addEventListener('click', (event) => {
        let key = event.target.innerHTML;
        playSound(key);
    })
})


function playSound(key) {
    switch(key){
        case 'w':
            
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}



// buttonArray.forEach(function(element) {
//     element.addEventListener("click", function() {
//         let buttonInnerHTML = this.innerHTML;
        
//     })
// })

