document.getElementById("button").onclick = function () {
    let email = document.getElementById("email").value;
    if (email == ""){
        alert("Email should not be empty!");
        return false;
    }
    else if (email.split("@").length > 2 || email.split("@").length == 1){
        alert("Email should contain '@'!");
        return false;
    }
    else if (!email.split("@")[1].includes(".com")){
        alert("Email should contain '.com' after '@'!");
        return false;
    }
};

document.getElementById("week1").onclick = function(){
    location.href = "events1.html";
}

document.getElementById("week2").onclick = function(){
    location.href = "events2.html";
}

document.getElementById("week3").onclick = function(){
    location.href = "events3.html";
}

document.getElementById("week4").onclick = function(){
    location.href = "events4.html";
}

function showText(){
    document.getElementById("changeDisplay").style.display="flex";
}

function hideText(){
    document.getElementById("changeDisplay").style.display="none";
}