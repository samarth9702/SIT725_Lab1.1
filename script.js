function changeText(){
    var textsArray = ["Cat","Bat","Hat","Ant","Mat"];
    var number = getRandomNumber(0,textsArray.length-1);
    document.getElementById("changeHeading").innerHTML = textsArray[number];
    document.getElementById("heading").innerHTML = "Magic";
}

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}