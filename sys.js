let count = 1;
let countOne = 1;
let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");
let heartImg = document.getElementById("heart");
let container = document.getElementById("container");

function no(){
    // negate effects on "yes"
    countOne = 1;
    yesBtn.innerHTML = "yes..";
    document.getElementById("head").innerHTML = "Will you be my valentine?...";

    if (count == 1){
        noBtn.innerHTML = "You sure?";
        document.body.style.backgroundColor = "rgb(213, 213, 213)";
        container.style.borderColor = "rgb(180, 39, 39)";
        container.style.boxShadow = "4px 4px 10px rgb(180, 39, 39)";
        heartImg.style.filter = "grayscale(16%)";
    } else if (count == 2){
        noBtn.innerHTML = "really sure?";
        document.body.style.backgroundColor = "rgb(173, 171, 171)";
        container.style.borderColor = "rgb(182, 78, 78)";
        container.style.boxShadow = "4px 4px 10px rgb(182, 78, 78)";
        heartImg.style.filter = "grayscale(32%)";
    } else if (count == 3){
        noBtn.innerHTML = "final?";
        document.body.style.backgroundColor = "rgb(129, 129, 129)";
        container.style.borderColor = "rgb(147, 87, 87)";
        container.style.boxShadow= "4px 4px 10px rgb(147, 87, 87)";
        heartImg.style.filter = "grayscale(48%)";
    } else if (count == 4){
        noBtn.innerHTML = "pretty pls? 🙁";
        document.body.style.backgroundColor = "rgb(87, 87, 87)";
        container.style.borderColor = "rgb(136, 92, 92)";
        container.style.boxShadow= "4px 4px 10px rgb(136, 92, 92)";
        heartImg.style.filter = "grayscale(64%)";
    } else if (count == 5){
        noBtn.innerHTML = "pls pls🥺";
        document.body.style.backgroundColor = "rgb(45, 45, 45)";
        container.style.borderColor = "rgb(139, 127, 127)";
        container.style.boxShadow= "4px 4px 10px rgb(139, 127, 127)";
        heartImg.style.filter = "grayscale(80%)";
    } else {
        // CANCEL DESIGN
        document.body.style.backgroundColor = "rgb(0, 0, 0)";
        document.querySelector("div").remove();
        document.getElementById("grat").classList.add("show");
        document.getElementById("grat").style.visibility = "visible";
    }
    count++;
    console.log(count);
}

function yes(){
    // negate effects on "no"
    count = 1;
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("no").innerHTML = "No";
    document.getElementById("heart").style.filter = "grayscale(0%)"
    document.getElementById("head").innerHTML = "Will you be my valentine?"
    container.style.borderColor = "rgb(255, 0, 0)";
    container.style.boxShadow = "4px 4px 10px rgb(255, 0, 0)";
    
    if (countOne == 1){
        yesBtn.innerHTML = "really??";    
    } else if (countOne == 2){
        yesBtn.innerHTML = "wait really??";
    } else if (countOne == 3){
        document.getElementById("head").innerHTML = "WAIT, FOR REAL?";
        yesBtn.innerHTML = "REALLY?";
    } else {
        document.getElementById("head").innerHTML = "THANK YOU, MY VALENTINE!"
        document.getElementById("no").remove();
        yesBtn.remove();
    }
    countOne++;
    console.log(count);
}


