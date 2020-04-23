import { Account, AccountControl } from './account.js'

let acct1 = new AccountControl();
// let acct1 = new Account();
let i = 0;

idCreateAcct.addEventListener("click", (() => {
    acct1.addAccount(idNew.value, Number(idOpenBal.value));
    console.log(acct1.acctArr);
    return acct1;
}));

document.body.addEventListener("click", (e) => {
    const cmd = e.target.textContent;
    console.log
    if (cmd === 'Deposit') {
        acct1.depositAccount(idName.value, Number(idNewAmount.value));
        console.log(Number(idNewAmount.value));

    } else if (cmd === 'Withdrawl') {
        acct1.withdrawAccount(idName.value, Number(idNewAmount.value));

    } else if (cmd === 'Delete Account') {
        acct1.deleteAccount(idName.value);
        console.log("You have deleted account ", idName.value);

    } else if (cmd === 'Lookup') {
        acct1.balanceAccount(idName2.value);
        document.getElementById("idDisplayOutput").value = acct1.balanceAccount(idName2.value);
        console.log(acct1.balanceAccount(idName2.value));
    } else if (cmd === 'Listing') {
        console.log(acct1.acctArr);
        // next step.  nice display needed using the array elements.
        
    } else if (cmd === 'Total') {
        outputField.innerText = `Your current balance is $${acct1.totalAccount()}`;
    } else if (cmd === 'Highest') {
        outputField.innerText = `Your current balance is $${acct1.maximumAccount()}`;
    } else if (cmd === 'Lowest') {
        outputField.innerText = `Your current balance is $${acct1.minimumAccount()}`;
    }
});