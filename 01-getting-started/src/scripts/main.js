import functions from './functions.js';

// **********
//
// Add the event listeners
// 

plus.addEventListener('click', ((e) => {
    console.log(e);
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    console.log(num1);
    console.log(num2);
    document.getElementById("output").value = functions.add(num1,num2);

}))

minus.addEventListener('click', () => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    console.log(num1);
    console.log(num2);
    document.getElementById("output").value = functions.subtract(num1,num2);

})

times.addEventListener('click', () => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    console.log(num1);
    console.log(num2);
    document.getElementById("output").value = functions.multiply(num1,num2);
})

divide.addEventListener('click', () => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    console.log(num1);
    console.log(num2);
    document.getElementById("output").value = functions.divide(num1,num2);
})