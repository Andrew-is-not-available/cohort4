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
}

// const acct1 = new Account('John Doe',25);


// console.log(acct1.getSummary());
// acct1.deposit(10);
// acct1.withdraw(30);

export default Account;