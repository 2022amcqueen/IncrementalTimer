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
    
    /*
    pause = !pause
    if(pause){
        pauseElement.value = "Unpause"
    } else {
        pauseElement.value = "Pause"
    }
    */
    //pauseElement.value = (pause && "Unpause") || "Pause"
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
    
    element.innerHTML = ("00 : 00 : 00")//`${format(hr)} : ${format(min)} : ${format(sec)}`//(hr + " : " + min + " : " + sec)
}

//Add Time Function
setInterval(function(){
    if(!pause){
        
        min = ((min + (1/60)) % 60)
        sec = ((sec + 1) % 60)
        hr = ((hr + (1/600)) % 60)
        
        
        var time = (format(Math.floor(hr)) + " : " + format(Math.floor(min)) + " : " + format(sec)))
        
        element.innerHTML = time
        
    }
}, 1000)




