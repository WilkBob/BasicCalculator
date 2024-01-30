let ram;
let mem;
let decimal = false;
let operator = false;
var buttons = document.querySelectorAll('.button');
const displayBox = document.getElementById('display');

    // Add click listener to each button
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {

            console.log('Button clicked:', button.textContent);
clicked(button.textContent);
        });
    });


    function clicked(button){
        
switch(button){
    case '.':
    if(decimal){break;}
    decimal=true;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    
        writeToDisplay(button);
        break;
    case'C':
    case'CE':
        clearDisplay();
        break;
    case'+':
    case'-':
    case'*':
    case'/':
    if(operator){break;}
        operate(button);
        break;
    case'=':
        evaluate();
        break;
    case'':


}
    }



function writeToDisplay(button){
    formerText = displayBox.innerText;
    displayBox.innerText = `${formerText}${button}`
    
    operator=false;
}

function clearDisplay(){
    displayBox.innerText=``;
    decimal=false;
    operator=false;
}

function operate(button){
    ram=displayBox.innerText;
displayBox.innerText = `${ram}${button}`
decimal=false;
operator=true;
}

function evaluate(){
    ram = displayBox.innerText;
    displayBox.innerText = Math.round(eval(ram) * 10) / 10
    decimal=false;
    operator=false;
}