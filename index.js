function playSound(key) {
    let sound;
    switch (key) {
        case "w":
            sound = new Audio("sounds/crash.mp3");
            break;
        case "a":
            sound = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            sound = new Audio("sounds/snare.mp3");
            break;
        case "d":
            sound = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            sound = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            sound = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            sound = new Audio("sounds/tom-4.mp3");
            break;
        default:
            return;
    }
    sound.play();
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector(`#${currentKey}`);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
        let key = this.id;
        playSound(key);
        buttonAnimation(key);
    });
});

document.addEventListener("keydown", function (event) {
    let key = event.key;
    playSound(key);
    buttonAnimation(key);
});
