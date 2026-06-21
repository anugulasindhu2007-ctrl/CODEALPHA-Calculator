window.onload = function () {
    let display = document.getElementById("display");

    window.appendValue = function(value){
        display.value += value;
    }

    window.clearDisplay = function(){
        display.value = "";
    }

    window.calculate = function(){
        try{
            display.value = eval(display.value);
        }
        catch{
            display.value = "Error";
        }
    }
}

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}