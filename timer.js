//Variables
var hr = 0
var min = 0
var sec = 0
var pause = false
var element = document.getElementById("Time")
var pauseElement = document.getElementById("timerState_b1")
var localStorage = window.localStorage

//* Global Functions

//Change Timer State 
function timerState(){
    if(pause == false){
        pause = true
        pauseElement.value = "Unpause"
    }else if(pause == true){
        pauseElement.value = "Pause"
        pause = false
    }
}

//Reset Timer
function reset(){
    hr = 0
    min = 0
    sec = 0
    
    element.innerHTML = hr + " : " + min + " : " + sec
}

//Add Time Function
setInterval(function(){
    if(pause == false){
        
        min = ((min + (1/60)) % 60)
        sec = ((sec + 1) % 60)
        hr = ((hr + (1/600)) % 60)
        
        
        var time = (hr + " : " + min + " : " + sec)
        
        element.innerHTML = time
        
    }
}, 1000)




