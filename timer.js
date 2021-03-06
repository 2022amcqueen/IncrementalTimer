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
    pause = !pause
    pauseElement.value = pause ? "Unpause" : "Pause"
}

//Format Text (x to 0x)
function format(str){
	return str <= 9 ? "0" + str : str  
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
    if(!pause){
        
        min = ((min + (1/60)) % 60)
        sec = ((sec + 1) % 60)
        hr = ((hr + (1/3600)) % 60)
        
        
        var time = (format(Math.floor(hr)) + " : " + format(Math.floor(min)) + " : " + format(sec))
        
        element.innerHTML = time
        
    }
}, 1000)
