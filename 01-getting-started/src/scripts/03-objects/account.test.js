import {Account,AccountControl} from './account.js'


test('Does the new controller, and the  add accounts function work?', () => {
    let acct1 = new AccountControl();
    expect(acct1).toBeInstanceOf(AccountControl);
    expect(acct1.acctArr.length).toBe(0);
    acct1.addAccount("car fund",25);
    expect(acct1.acctArr.length).toBe(1);
    expect(acct1.acctArr).toEqual([{ name: 'car fund', balance: 25 }]);
    acct1.addAccount("cookie fund",42);
    expect(acct1.acctArr).toEqual([{ name: 'car fund', balance: 25 }, { name: 'cookie fund', balance: 42 }]);
});

test('Does the account remover work?', () => {
    let acct1 = new AccountControl();
    acct1.addAccount("car fund",10);
    acct1.addAccount("cookie fund",20);
    expect(acct1.acctArr.length).toBe(2);
    acct1.removeAccount("car fund");
    expect(acct1.acctArr.length).toBe(1);
    acct1.removeAccount("cookie fund");
    expect(acct1.acctArr.length).toBe(0);
});

test('Does the account totaller work?', () => {
    let acct1 = new AccountControl();
    acct1.addAccount("car fund",1010);
    acct1.addAccount("cookie fund",2020);
    expect(acct1.totalAccount()).toBe(3030);
});

test('Does the account maximizer work?', () => {
    let acct1 = new AccountControl();
    acct1.addAccount("car fund",3010);
    acct1.addAccount("cookie fund",2020);
    expect(acct1.maximumAccount()).toBe(3010);
    acct1.addAccount("cake fund",5010);
    expect(acct1.maximumAccount()).toBe(5010);
});

test('Does the account minimizer work?', () => {
    let acct1 = new AccountControl();
    acct1.addAccount("car fund",3010);
    acct1.addAccount("cookie fund",2020);
    expect(acct1.minimumAccount()).toBe(2020);
    acct1.addAccount("paperclip fund",10);
    expect(acct1.minimumAccount()).toBe(10);
});


test('Does the class work?', () => {
    let acct1 = new Account('John Doe',25);
    expect(acct1).toBeInstanceOf(Account);
});

test('Does the constructor work?', () => {
    let acct1 = new Account('John Doe',25);
    expect(acct1.name).toBe('John Doe');
    expect(acct1.balance).toBe(25);
});

test('Does the deposit work?', () => {
    let acct1 = new Account('John Doe',25);
    acct1.deposit(5);
    expect(acct1.getBalance()).toBe(30);
    acct1.deposit(10);
    expect(acct1.getBalance()).toBe(40);
});

test('Does the withdrawl work?', () => {
    let acct1 = new Account('John Doe',25);
    acct1.withdraw(5);
    expect(acct1.getBalance()).toBe(20);
    acct1.withdraw(10);
    expect(acct1.getBalance()).toBe(10);
});

test('Does the account summary work?', () => {
    let acct1 = new Account('John Doe',25);
    acct1.withdraw(5);
    expect(acct1.getBalance()).toBe(20);
    acct1.withdraw(10);
    expect(acct1.getBalance()).toBe(10);
});
