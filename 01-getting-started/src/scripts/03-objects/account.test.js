import Account from './account.js'

test('Does the class work?', () => {
    const acct1 = new Account('John Doe',25);
    expect(acct1).toBeInstanceOf(Account);
});
test('Does the constructor work?', () => {
    const acct1 = new Account('John Doe',25);
    expect(acct1.name).toBe('John Doe');
    expect(acct1.balance).toBe(25);
});
test('Does the deposit work?', () => {
    const acct1 = new Account('John Doe',25);
    acct1.deposit(5);
    expect(acct1.getBalance()).toBe(30);
    acct1.deposit(10);
    expect(acct1.getBalance()).toBe(40);
});
test('Does the withdrawl work?', () => {
    const acct1 = new Account('John Doe',25);
    acct1.withdraw(5);
    expect(acct1.getBalance()).toBe(20);
    acct1.withdraw(10);
    expect(acct1.getBalance()).toBe(10);
});

test('Does the account summary work?', () => {
    const acct1 = new Account('John Doe',25);
    console.log(acct1.getBalance());
    expect(acct1.getBalance()).toBe(25);
});