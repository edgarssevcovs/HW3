
console.log('Script started');

function innit () {
    console.log('Adding listeners')
    addListeners();
    document.getElementById('elements');
    
    var clearButton = document.getElementById('clear');
    clearButton.addEventListener("click", onClickClear);
    var submitCustom = document.getElementById('generate2');
    submitCustom.addEventListener("click", onClickCustom);
}

function onClick() {
    console.log('Button hit');
        for(let i = 1; i<101; i++){
            const element = document.createElement('div');
            element.className="element" + i;
            elements.appendChild(element);
                if (i % 3 ===0 && i % 5 === 0){
                    element.style.display="grid";
                    element.style.width="90px";
                    element.style.height="90px";
                    element.style.margin="10px";
                    element.style.backgroundColor="#62ff32";
                    element.style.color="white";
                    element.style.borderRadius="8px";
                    element.innerText="FizzBuzz " + element.className;
                    element.style.textAlign="center";
                }
                else if (i % 3 === 0 && i % 5 !== 0) {
                    element.style.width="90px";
                    element.style.height="90px";
                    element.style.margin="10px";
                    element.style.backgroundColor="#ff3262";
                    element.style.color="white";
                    element.style.borderRadius="8px";
                    element.innerText="Fizz " + element.className;
                    element.style.textAlign="center";
                }

                else if (i % 5 === 0 && i % 3 !== 0){
                    element.style.width="90px";
                    element.style.height="90px";
                    element.style.margin="10px";
                    element.style.backgroundColor="#ff8132";
                    element.style.color="white";
                    element.style.borderRadius="8px";
                    element.innerText="Buzz " + element.className;
                    element.style.textAlign="center";
                }

                else if (i % 3 !== 0 && i % 5 !== 0){
                    element.style.width="90px";
                    element.style.height="90px";
                    element.style.margin="10px";
                    element.style.backgroundColor="#3292ff";
                    element.style.color="white";
                    element.style.borderRadius="8px";
                    element.innerText=element.className;
                    element.style.textAlign="center";
                }
        }
}

function onClickClear () {
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
    console.log('Divs cleared');
}

function onClickCustom (){
    onClickClear();
    console.log('Divs cleared');
    console.log('Generate custom divs');
    var startValue = document.getElementById('startValue').value;
    var endValue = document.getElementById('endValue').value;
    var fizzValue = document.getElementById('fizzValue').value;
    var buzzValue = document.getElementById('buzzValue').value;
    var fizzColor = document.getElementById('fizzColor').value;
    var buzzColor = document.getElementById('buzzColor').value;
    var fizzBuzzColor = document.getElementById('fizzBuzzColor').value;
    var noneColor = document.getElementById('noneColor').value;
    console.log('start value - ' + startValue);
    console.log('end value - ' + endValue);
    console.log('fizz value - ' + fizzValue);
    console.log('buzz value - ' + buzzValue);
    console.log('fizz color - ' + fizzColor);
    console.log('buzz color - ' + buzzColor);
    console.log('fizzbuzz color - ' + fizzBuzzColor);
    console.log('none color - ' + noneColor);
        for (startValue; startValue<=endValue; startValue++){
            const element = document.createElement('div');
            element.className="element" + startValue;
            elements.appendChild(element);
                if (startValue % fizzValue === 0 && startValue % buzzValue === 0){
                    element.style.display="grid";
                    element.style.width="90px";
                    element.style.height="90px";
                    element.style.margin="10px";
                    element.style.backgroundColor=fizzBuzzColor;
                    element.style.color="white";
                    element.style.borderRadius="8px";
                    element.innerText="FizzBuzz " + element.className;
                    element.style.textAlign="center";
                }
                else if (startValue % fizzValue === 0 && startValue % buzzValue !== 0) {
                    element.style.width="90px";
                    element.style.height="90px";
                    element.style.margin="10px";
                    element.style.backgroundColor=fizzColor;
                    element.style.color="white";
                    element.style.borderRadius="8px";
                    element.innerText="Fizz " + element.className;
                    element.style.textAlign="center";
                }

                else if (startValue % buzzValue === 0 && startValue % fizzValue !== 0){
                    element.style.width="90px";
                    element.style.height="90px";
                    element.style.margin="10px";
                    element.style.backgroundColor=buzzColor;
                    element.style.color="white";
                    element.style.borderRadius="8px";
                    element.innerText="Buzz " + element.className;
                    element.style.textAlign="center";
                }

                else if (startValue % fizzValue !== 0 && startValue % buzzValue !== 0){
                    element.style.width="90px";
                    element.style.height="90px";
                    element.style.margin="10px";
                    element.style.backgroundColor=noneColor;
                    element.style.color="white";
                    element.style.borderRadius="8px";
                    element.innerText=element.className;
                    element.style.textAlign="center";
                }
        }
}

 function addListeners() {
    const submit = document.getElementById('generate');
    submit.onclick = onClick;
}


innit();