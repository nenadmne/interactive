const btn = document.getElementsByClassName('button');

function myFunction1(){
    document.getElementById("btn1").style.backgroundColor="black";
    document.getElementById("btn2").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn3").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn4").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn5").style.backgroundColor="rgb(43, 54, 65)";
}

function myFunction2(){
    document.getElementById("btn2").style.backgroundColor="black";
    document.getElementById("btn1").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn3").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn4").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn5").style.backgroundColor="rgb(43, 54, 65)";
}

function myFunction3(){
    document.getElementById("btn3").style.backgroundColor="black";
    document.getElementById("btn2").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn1").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn4").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn5").style.backgroundColor="rgb(43, 54, 65)";
}

function myFunction4(){
    document.getElementById("btn4").style.backgroundColor="black";
    document.getElementById("btn2").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn3").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn1").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn5").style.backgroundColor="rgb(43, 54, 65)";
}

function myFunction5(){
    document.getElementById("btn5").style.backgroundColor="black";
    document.getElementById("btn2").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn3").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn4").style.backgroundColor="rgb(43, 54, 65)";
    document.getElementById("btn1").style.backgroundColor="rgb(43, 54, 65)";
}

function submitFunction(){

    const submit=document.getElementById("submit");

    if (document.getElementById("btn1").style.backgroundColor === "black") {

        document.getElementById("next-div").style.visibility="visible";
        document.getElementById("button-text").textContent= 'You selected 1 out of 5'

        let parent1 = document.getElementById('main-div');
        parent1.parentNode.removeChild(parent1)}

    else if (document.getElementById("btn2").style.backgroundColor === "black") {

        document.getElementById("next-div").style.visibility="visible";
        document.getElementById("button-text").textContent= 'You selected 2 out of 5'
    
        let parent1 = document.getElementById('main-div');
        parent1.parentNode.removeChild(parent1)}

    else if (document.getElementById("btn3").style.backgroundColor === "black") {

        document.getElementById("next-div").style.visibility="visible";
        document.getElementById("button-text").textContent= 'You selected 3 out of 5'
        
        let parent1 = document.getElementById('main-div');
        parent1.parentNode.removeChild(parent1)}

    else if (document.getElementById("btn4").style.backgroundColor === "black") {

        document.getElementById("next-div").style.visibility="visible";
        document.getElementById("button-text").textContent= 'You selected 4 out of 5'
            
        let parent1 = document.getElementById('main-div');
        parent1.parentNode.removeChild(parent1)}

    else if (document.getElementById("btn3").style.backgroundColor === "black") {

        document.getElementById("next-div").style.visibility="visible";
        document.getElementById("button-text").textContent= 'You selected 3 out of 5'
            
        let parent1 = document.getElementById('main-div');
        parent1.parentNode.removeChild(parent1)}
}