//Variables
var hr = 0
var min = 0
var sec = 0
var pause = false
var element = document.getElementById("Time")
var localStorage = window.localStorage

//* Global Functions

//Change Timer State 
function timerState(){
    if(pause == false){
        pause = true
    }else if(pause == true){
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
        if(min >= 59){
            hr++
            min = 0
        }else if(sec >= 59){
            min++
            sec = 0
        }else if(sec < 60){
            sec++
        }
        
        
        var time = (hr + " : " + min + " : " + sec)
        
        element.innerHTML = time
        save(time)
        
    }
}, 1000)




