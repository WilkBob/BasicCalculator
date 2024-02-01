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

// Function to handle button click event. 
// the switch statement will handle the different button clicks
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
    clearDisplay();
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
    case'M+':
        writeToMemory();
        break;
    case'MRC':
    if(mem){
        writeToDisplay(mem);
        break;
    } break;
    case'M-':
        mem=undefined;
        break;
    case'+/-':
        if(displayBox.innerText[0] === '-'){
            displayBox.innerText = displayBox.innerText.slice(1);
        } else {
            displayBox.innerText = `-${displayBox.innerText}`;
        }
        break;

}
    }

// this function will write the display to the memory
function writeToMemory(){
    mem=displayBox.innerText;
    displayBox.innerText=``;
}

// this function will write the button to the display
function writeToDisplay(button){
    formerText = displayBox.innerText;
    displayBox.innerText = `${formerText}${button}`
    
    operator=false;
}

// this function will clear the display
function clearDisplay(){
    displayBox.innerText=``;
    decimal=false;
    operator=false;
}

// this function will handle the operator buttons
function operate(button){
    ram=displayBox.innerText;
displayBox.innerText = `${ram}${button}`
decimal=false;
operator=true;
}

// this function will evaluate the expression
function evaluate(){
    ram = displayBox.innerText;
    displayBox.innerText = Math.round(eval(ram) * 10) / 10
    decimal=false;
    operator=false;
}