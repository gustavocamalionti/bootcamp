var currentNumberWrapper = document.getElementById('counter__currentNumber');
var currentNumber = 0;
var buttonSomar = document.getElementById('somar');
var buttonSubtrair = document.getElementById('subtrair');

buttonSomar.addEventListener('click',increment);
buttonSubtrair.addEventListener('click',decrement);


function increment() {
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber;
    verificationCurrentNumber()
}

function decrement() {
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber;
    verificationCurrentNumber()
}

function verificationCurrentNumber() {
    if (currentNumber == 0) {
        buttonSubtrair.style.display = 'none';
    } else if (currentNumber == 10) {
        buttonSomar.style.display = 'none';
    } else {
        buttonSubtrair.style.display = 'inline';
        buttonSomar.style.display = 'inline';
    }
}