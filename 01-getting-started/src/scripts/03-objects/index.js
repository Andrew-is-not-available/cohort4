import Account from './account.js'

let acct1 = new Account();

//"objects need to be instantiated outside of the listeners".....SteveB

idCreateAcct.addEventListener("click", function() {
    acct1 = new Account(idNew.value,Number(idOpenBal.value));
    console.log(acct1.getSummary());
    console.log(acct1.name,acct1.balance)
    return acct1;
});



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