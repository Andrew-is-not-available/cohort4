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

    balanceAccount(name) {
        let index = this.acctArr.findIndex(x => x.name===name);
        return this.acctArr[index].balance;
    }

    depositAccount(name,amount) {
        let index = this.acctArr.findIndex(x => x.name===name);
        this.acctArr[index].deposit(amount);
        return this.acctArr[index].amount;
    }

    withdrawAccount(name,amount) {
        let index = this.acctArr.findIndex(x => x.name===name);
        this.acctArr[index].withdraw(amount);
        return this.acctArr[index].amount;
    }

    deleteAccount(name) {
        let index = this.acctArr.findIndex(x => x.name===name);
        //at position index, remove one item
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
        // Object.values
        // returns an array of the object's own enumerable property values, in the same order as
        // a for...in loop.
        // console.log(Object.values(this.acctArr));      
        // array.reduce subtracts the numbers in the array, starting from the left
        // if b > a reorder the pair and return the object as a string in highest to lowest numerical order
        string += `${Object.values(this.acctArr.reduce((a, b) => b.balance > a.balance ? b: a))}`;
        // convert the string to an array using the comma delimiter in the string.
        let separatedArray = string.split(',');
        // return the numerical value of position[1] of the array.
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