document.getElementById("button").onclick = function () {
    let name = document.getElementById("name").value;
    if (name == ""){
        alert("Name should not be empty!");
        return false;
    }
    else if (name.length < 4){
        alert("Name must be more than 4 characters!");
    }
    else if (!(isNaN(name))){
        alert("Name should only consist of letters!");
        return false;
    }

    let email = document.getElementById("email").value;
    if (email == ""){
        alert("Email should not be empty!");
        return false;
    }
    else if (email.split("@").length > 2 || email.split("@").length == 1) {
        alert("Email should contain '@'!");
        return false;
    }
    else if (!email.split("@")[1].includes(".com")) {
        alert("Email should contain '.com' after '@'!");
        return false;
    }

    let phone = document.getElementById("phone").value;
    if (phone == ""){
        alert("Phone number should not be empty!");
        return false;
    }
    else if (phone.length < 6){
        alert("Phone number must be more than 6 numbers!");
        return false;
    }
    else if (isNaN(phone)){
        alert("Phone number should only consist of numbers!");
        return false;
    }

    let message = document.getElementById("message").value;
    if (message == ""){
        alert("Message should not be empty!");
        return false;
    }
};

function showText(){
    document.getElementById("changeDisplay").style.display="flex";
}

function hideText(){
    document.getElementById("changeDisplay").style.display="none";
}