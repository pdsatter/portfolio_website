let highScore = 0;
let score = 0;
let xpos = 500;
let ypos = 300;
let count = 0;
let default_sec = 30;

var buttonMainID = document.getElementById('buttonMain');

document.getElementById('buttonMain').addEventListener('click', moveBtn);

function getxpos(){
    xpos = Math.floor((Math.random() * (1000-40)));
    xpos = xpos.toString() + 'px';
    return xpos;
}
function getypos(){
    ypos = Math.floor((Math.random() * (600 -40)));
    ypos = ypos.toString() + 'px';
    return ypos;
}

function getScore(){
    return score;
}
function timer(){
    var sec = default_sec;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML=sec + ' seconds';
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            if (score > highScore){
                highScore = score;
                document.getElementById('highScore').innerHTML ='High Score: ' + highScore.toString();
            }
            score = 0;
            count = 0;

        }
    }, 1000);
}
function moveBtn(){
    xpos = getxpos();
    ypos = getypos();
    buttonMainID.style.marginLeft = xpos;
    buttonMainID.style.marginTop = ypos;
    score += 1;
    document.getElementById("scoreLabel").innerHTML = 'Score: ' + getScore()
    console.log(xpos,ypos);
    if (count == 0){timer(); count++;}
}
