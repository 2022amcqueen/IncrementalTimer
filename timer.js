var hr = 0
var min = 0
var sec = 0
var ms = 0
var element = document.getElementById("Time")
var pause = false

function timerState(){
    
    if(pause == false){
        pause = true
    }else if(pause == true){
        pause = false
    }
}

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
        
        element.innerHTML = hr + " : " + min + " : " + sec
        
    }
}, 1000)




