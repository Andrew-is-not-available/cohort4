import arrayAdd from './arrayAdd.js';

const workingArray = [];

document.body.addEventListener("click", (e) => {

    const cmd = e.target.textContent;
    console.log
    if (cmd === 'Add') {
        arrayAdd.addToArray(workingArray, idNumber.value);
        idNumber.value='';
    } else if (cmd === 'Show') {
        idMessage.textContent = arrayAdd.showArray(workingArray);
    } else if (cmd === 'Total') {
        idMessage.textContent = arrayAdd.totalArray(workingArray);
    } else if (cmd === 'Clear') {
        idMessage.textContent = arrayAdd.clearArray(workingArray);
    } else if (cmd === 'Submit') {
        arrayAdd.addStateName(idCodeInput.value, idNameInput.value);
        console.log(idCodeInput.value,idNameInput.value);
        console.log(JSON.stringify(arrayAdd.stateNames,null,4));
        idCodeInput.value='';
        idNameInput.value='';
    } else if (cmd === 'Lookup') {
        document.getElementById("idNameOutput").value=arrayAdd.lookupName(idStateInput.value);
        // idMessage.textContent = arrayAdd.lookupName(idStateInput.value);
    } else if (cmd === 'Display') {
        let myStr = JSON.stringify(arrayAdd.stateNames)
        let myStr2 = myStr.replace(/["{}]/g, '');
        let myStr3 = myStr2.replace(/,/g, '\n');
        console.log(myStr3);
        document.getElementById("objectOutput").value=myStr3;
    }


})

// add.addEventListener('click', () =>{
//     let arrayElement = parseInt(document.getElementById("arrayElement").value);
//     console.log(arrayElement);
//     console.log(functions.addToArray(arrayElement));

// })

// arrayPush.addEventListener('click', () => {
//     let arrayElement = parseInt(document.getElementById('arrayElement')).value;
//     console.log(arrayElement);

