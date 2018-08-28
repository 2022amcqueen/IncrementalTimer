//Variables
var hr = 0
var min = 0
var sec = 0
var pause = false
var element = document.getElementById("Time")
var pauseElement = document.getElementById("timerState_b")

//* Global Functions

//Change Timer State 
function timerState(){
    if(pause == false){
        pause = true
        pauseElement.value = "Unpause"
    }else if(pause == true){
        pause = false
        pauseElement.value = "Pause"
    }
}

//Format Text (x to 0x)
function format(str){
    if(str <= 9){
        return "0" + str
    } else {
        return str   
    }
}

//Reset Timer
function reset(){
    hr = 0
    min = 0
    sec = 0
    
    element.innerHTML = (format(hr) + " : " + format(min) + " : " + format(sec))
}

//Add Time Function
setInterval(function(){
    if(pause == false){
        
        min = ((min + (1/60)) % 60)
        sec = ((sec + 1) % 60)
        hr = ((hr + (1/600)) % 60)
        
        
        var time = (format(Math.floor(hr)) + " : " + format(Math.floor(min)) + " : " + format(sec))
        
        element.innerHTML = time
        
    }
}, 1000)
