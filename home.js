let countsa=setInterval(updateda);
let uptoa=153;
function updateda(){
    var counta= document.getElementById("num-event");
    counta.innerHTML=++uptoa;
    if(uptoa===757){
        clearInterval(countsa);
    }
}

let countsb=setInterval(updatedb);
let uptob=11504;
function updatedb(){
    var countb= document.getElementById("num-visitor");
    countb.innerHTML=++uptob;
    if(uptob===12608){
        clearInterval(countsb);
    }
}

let countsc=setInterval(updatedc);
let uptoc=6098;
function updatedc(){
    var countc= document.getElementById("num-sponsor");
    countc.innerHTML=++uptoc;
    if(uptoc===6802){
        clearInterval(countsc);
    }
}