class Account {
    constructor(name,balance) {
        this.name = name;
        this.balance = balance;
    }

    getSummary() {
        return `${this.name}'s initial balance is ${this.balance} $CAN`;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount
        console.log(`Deposit: ${this.name}'s new balance is ${this.balance} $CAN`);
    }
    withdraw(amount) {
        this.balance -= amount
        console.log(`Withdraw: ${this.name}'s new balance is ${this.balance} $CAN`)
    }
};

// 130 C

class AccountControl {
    constructor() {
        this.acctArr = [];
    }
    
    addAccount(name,balance) {
        let newRecord = new Account(name,balance);
        this.acctArr.push(newRecord);
        return this.acctArr;
    }

    removeAccount(name) {
        let index = this.acctArr.findIndex(x => x.name===name);
        this.acctArr.splice(index,1);
    }

    totalAccount() {
        let total = 0;
        let i=1;
        for(i=0; i < this.acctArr.length; i++) {
            total+=Number(this.acctArr[i].balance);
        }
        return total;
    }

    maximumAccount() {
        let string = "";
        string += `${Object.values(this.acctArr.reduce((a, b) => b.balance > a.balance ? b: a))}`;
        let separatedArray = string.split(',');
        return Number(separatedArray[1]);
    }

    minimumAccount() {
        let string = "";
        string += `${Object.values(this.acctArr.reduce((a, b) => b.balance < a.balance ? b: a))}`;
        let separatedArray = string.split(',');
        return Number(separatedArray[1]);
        
    }

}

export {Account, AccountControl};