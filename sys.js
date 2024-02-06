let count = 1;
let countOne = 1;
let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");
let heartImg = document.getElementById("heart");
let container = document.getElementById("container");
let decorOne = document.getElementById("dec1");
let decorOneOne = document.getElementById("dec1-1");
let decorTwo = document.getElementById("dec4");
let decorTwoThree = document.getElementById("dec4-1");


function no(){
    // negate effects on "yes"
    countOne = 1;
    yesBtn.innerHTML = "yes..";
    document.getElementById("head").innerHTML = "Will you be my valentine?...";
    decorOne.classList.remove("animatetoR");
    decorOne.style.opacity = "0";
    decorOneOne.classList.remove("animatetoL");
    decorOneOne.style.opacity = "0";
    decorTwo.classList.remove("animatetoR");
    decorTwo.style.opacity = "0";
    decorTwoThree.classList.remove("animatetoL");
    decorTwoThree.style.opacity = "0";

    // decorOne.classList.add("animatetoR");
    // decorOne.style.opacity = "1";
    // decorTwo.classList.add("animatetoR");
    // decorTwo.style.opacity = "1";
    // decorTwoThree.classList.add("animatetoL");
    // decorTwoThree.style.opacity = "1";

    if (count == 1){
        noBtn.innerHTML = "You sure?";
        document.body.style.background = "fixed no-repeat radial-gradient(rgb(255, 195, 195) 50%, rgb(199, 115, 115))";
        container.style.borderColor = "rgb(180, 39, 39)";
        container.style.boxShadow = "4px 4px 10px rgb(180, 39, 39)";
        heartImg.style.filter = "grayscale(16%)";
    } else if (count == 2){
        noBtn.innerHTML = "really sure?";
        document.body.style.background = "fixed no-repeat radial-gradient(rgb(225, 190, 190) 50%, rgb(160, 95, 95))";
        // document.body.style.backgroundColor = "rgb(173, 171, 171)";
        container.style.borderColor = "rgb(182, 78, 78)";
        container.style.boxShadow = "4px 4px 10px rgb(182, 78, 78)";
        heartImg.style.filter = "grayscale(32%)";
    } else if (count == 3){
        noBtn.innerHTML = "final?";
        document.body.style.background = "fixed no-repeat radial-gradient(rgb(231, 199, 199) 50%, rgb(140, 80, 80))";
        // document.body.style.backgroundColor = "rgb(129, 129, 129)";
        container.style.borderColor = "rgb(147, 87, 87)";
        container.style.boxShadow= "4px 4px 10px rgb(147, 87, 87)";
        heartImg.style.filter = "grayscale(48%)";
    } else if (count == 4){
        noBtn.innerHTML = "pretty pls? 🙁";
        document.body.style.background = "fixed no-repeat radial-gradient(rgb(205, 188, 188) 40%, rgb(120, 50, 50))";
        // document.body.style.backgroundColor = "rgb(87, 87, 87)";
        container.style.borderColor = "rgb(136, 92, 92)";
        container.style.boxShadow= "4px 4px 10px rgb(136, 92, 92)";
        heartImg.style.filter = "grayscale(64%)";
    } else if (count == 5){
        noBtn.innerHTML = "pls pls🥺";
        document.body.style.background = "fixed no-repeat radial-gradient(rgb(195, 177, 177) 30%, rgb(90, 30, 30))";
        // document.body.style.backgroundColor = "rgb(45, 45, 45)";
        container.style.borderColor = "rgb(139, 127, 127)";
        container.style.boxShadow= "4px 4px 10px rgb(139, 127, 127)";
        heartImg.style.filter = "grayscale(80%)";
    } else {
        // CANCEL DESIGN
        document.body.style.background = "rgb(0, 0, 0)";
        document.getElementById("container").remove();
        document.getElementById("grat").classList.add("show");
        document.getElementById("grat").style.visibility = "visible";
    }
    count++;
    console.log(count);
}

function yes(){
    // negate effects on "no"
    count = 1;
    document.body.style.background = "fixed no-repeat radial-gradient(rgb(255, 215, 215) 50%, rgb(249, 135, 135))";
    document.getElementById("no").innerHTML = "No";
    document.getElementById("heart").style.filter = "grayscale(0%)"
    document.getElementById("head").innerHTML = "Will you be my valentine?"
    container.style.borderColor = "rgb(255, 0, 0)";
    container.style.boxShadow = "4px 4px 10px rgb(255, 0, 0)";
    
    if (countOne == 1){
        yesBtn.innerHTML = "really??"; 
    } else if (countOne == 2){
        yesBtn.innerHTML = "wait really??";
        decorOne.classList.add("animatetoR");
        decorOne.style.opacity = "1";
        decorOneOne.classList.add("animatetoL");
        decorOneOne.style.opacity = "1";
    } else if (countOne == 3){
        document.getElementById("head").innerHTML = "WAIT, FOR REAL?";
        yesBtn.innerHTML = "REALLY?";
        decorTwo.classList.add("animatetoR");
        decorTwo.style.opacity = "1";
        decorTwoThree.classList.add("animatetoL");
        decorTwoThree.style.opacity = "1";
    } else {
        document.getElementById("head").innerHTML = "THANK YOU, MY VALENTINE!"
        document.getElementById("no").remove();
        document.getElementById("hug").style.opacity = "1";
        document.getElementById("fw-1").style.opacity = "1";
        document.getElementById("fw-2").style.opacity = "1";
        
        yesBtn.remove();

    }
    countOne++;
    console.log(count);
}


