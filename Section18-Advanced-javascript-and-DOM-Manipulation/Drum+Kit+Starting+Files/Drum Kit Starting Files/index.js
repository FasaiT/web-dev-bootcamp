//to add fuction to ever buttons when click

//Detecting Button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click" , function () {
    //   this.style.color = 'white';
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    
    });
}

//Detecting Keyboard press
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            var tom2 = new Audio('sounds/tom-3.mp3');
            tom2.play();
        break;

        case "d":
            var tom2 = new Audio('sounds/tom-4.mp3');
            tom2.play();
        break;

        case "j":
            var tom2 = new Audio('sounds/snare.mp3');
            tom2.play();
        break;

        case "k":
            var tom2 = new Audio('sounds/crash.mp3');
            tom2.play();
        break;

        case "l":
            var tom2 = new Audio('sounds/kick-bass.mp3');
            tom2.play();
        break;

        //defalut like else in if-else statement ไม่จำเป็นต้องใส่ลงไปเลยก็ได้ แต่ควรใส่ลงไปด้วยกันเหนียว
        default: console.log(buttonInnerHTML);
                                                                                                                                                                                                                                                                        
    }
}