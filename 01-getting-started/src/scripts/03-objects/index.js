import {Account, AccountControl} from './account.js'

let acct1 = new AccountControl();
// let acct1 = new Account();
let i = 0;

idCreateAcct.addEventListener("click", (() => {
    acct1.addAccount(idNew.value,idOpenBal.value);
    console.log(acct1.acctArr);
    return acct1;
}));



document.body.addEventListener("click", (e) => {
    const cmd = e.target.textContent;
    console.log
    if (cmd === 'Deposit') {
        acct1.deposit(Number(idDeposit.value));
    } else if (cmd === 'Withdrawl') {
        acct1.withdraw(Number(idWithdraw.value));
    }else if (cmd === 'Lookup') {
        console.log(acct1.getBalance());
        document.getElementById("idDisplayOutput").innerHTML=acct1.getBalance();
    // idMessage.textContent = arrayAdd.lookupName(idStateInput.value);
    }
})