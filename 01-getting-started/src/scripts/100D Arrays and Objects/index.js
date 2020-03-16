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

