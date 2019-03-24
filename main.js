const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener("click", determineConverter);
    document.getElementById('clearBtn').addEventListener("click", clear);
    document.getElementById('wholeThang').addEventListener('keyup', keypress);
}

const determineConverter = (e) => {
    let domString ='';
    let tempInput = document.getElementById("tempInput").value;
    let tempType = document.querySelector('input[name="temp"]:checked').value;
    console.log(tempType);
        let newTemp = 0;
        if (tempType === "F") {
            newTemp = ((tempInput * 9/5) + 32);
        } else if (tempType === "C") {
            newTemp = ((tempInput - 32) * 5/9);
        };
        newTemp = Math.round(newTemp);    
        domString += `<h3>${newTemp}</h3>`;
        domString +=`deg ${tempType} `;
    
    
    console.log(tempInput);
    printToDom("tempOutput", domString);
};

const clear = (e) => {
    document.getElementById("tempInput").value = '';
    document.getElementById("tempOutput").textContent = '';
};

const keypress = (e) => {
    if (event.keyCode === 13) {
        determineConverter();
    };
};

const init = () => {
    buttonEvents();
};

init();