var numberOfButtons = document.querySelectorAll("button").length;
console.log(numberOfButtons)
for(var i =0;i<numberOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInner = this.innerText;
        
        console.log(buttonInner);
        playSound(buttonInner); 
        buttonAnimation(buttonInner );
    })

}
// keydown playing sound
document.addEventListener("keydown",function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})
 
// adding button animation function
function buttonAnimation(currentKey){

    const activeButton = document.querySelector("."+currentKey);
    if(activeButton){
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed"),100
        })
    }else{
        console.error("Error playing animation " + currentKey)
    }
   
}

// button click function
function playSound(key){
    //var keyDown = this.key;
    switch(key){
        case "w":
            var audio1 = new Audio ("./sounds/tom-1.mp3");
            audio1.onerror = function() {
                console.log("Error loading audio file: " + audio1.src);
            };
            audio1.play()
            break;
        case "a":
            var audio2 = new Audio("./sounds/tom-2.mp3");
            //handling error with onerror event of Audio or Video object
            audio2.onerror = function(){
                console.log("Error loading audio file: " + audio2.src)
            }
            audio2.play();
            break;
        case "s":
            const audio3 = new Audio("./sounds/tom-3.mp3");
            //handling error with EventListener
            audio3.addEventListener("error",function(e){
                   console.log(e)
            })
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("./sounds/tom-4.mp3");
            audio4.onerror = function(e){
                console.log(e);
            }
            audio4.play();
            break;
        case "j":
             var audio5= new Audio("./sounds/crash.mp3");
             audio5.play();
            break;
        case "k":
            var audio6 = new Audio("./sounds/kick-bass.mp3");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("./sounds/snare.mp3");
            audio7.play();
            break;
        default:
            console.log(buttonInner);
            break;
    }
    
}