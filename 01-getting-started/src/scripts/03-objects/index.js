import Account from './account.js'

document.body.addEventListener("click", (e) => {
    const acct1 = new Account(idNew.value,Number(idOpenBal.value));
    const cmd = e.target.textContent;
    console.log
    if (cmd === 'Create') {
        console.log(acct1.getSummary());
        console.log(acct1.name,acct1.balance)
    } else if (cmd === 'Deposit') {
        acct1.deposit(Number(idDeposit.value));
    } else if (cmd === 'Withdrawl') {
        acct1.withdraw(Number(idWithdraw.value));
    }else if (cmd === 'Lookup') {
        console.log(acct1.getBalance());
        document.getElementById("idDisplayOutput").innerHTML=acct1.getBalance();
    // idMessage.textContent = arrayAdd.lookupName(idStateInput.value);
    }
})