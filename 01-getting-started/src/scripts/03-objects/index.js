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

    } else if (cmd === 'Delete') {
        acct1.deleteAccount(idName.value);
        console.log("You have deleted account ", idName.value);

    } else if (cmd === 'Lookup') {
        acct1.balanceAccount(idName2.value);
        document.getElementById("idDisplayOutput").value = acct1.balanceAccount(idName2.value);
        console.log(acct1.balanceAccount(idName2.value));
    } else if (cmd === 'Lookup') {
        acct1.balanceAccount(idName2.value);
        document.getElementById("idDisplayOutput").value = acct1.balanceAccount(idName2.value);
        console.log(acct1.balanceAccount(idName2.value));


    }
});