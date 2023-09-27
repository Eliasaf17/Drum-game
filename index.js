var numberOfDrumButtons = document.getElementsByClassName("drum");

for(var i = 0; i < numberOfDrumButtons.length; i++){
    numberOfDrumButtons[i].addEventListener("click", function(){
        makeSounds(this.innerHTML); /* This is the element which we target actually by clicking (numberOfDrumButtons[i])*/
        buttonAnimation(this.innerHTML);
    });

}

document.addEventListener("keydown", function(event){   /* event show all the information about the keyboard event (keydown in this case)*/
    makeSounds(event.key)
    buttonAnimation(event.key);
});

function makeSounds(key){

    switch (key) {  
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log(key);
            break;
    }
}

function buttonAnimation(currentKey){

    var button = document.querySelector("."+currentKey);
    button.classList.toggle("pressed");
    setTimeout(function (){
        button.classList.toggle("pressed");
    }, 150);
}

