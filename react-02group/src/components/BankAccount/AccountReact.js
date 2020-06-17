import React, { Component } from "react"
import AccountCard from "./AccountCard.js"
import accounts from './account.js'


let x = new accounts.AccountController();
// x.createAccount('Savings', 100)
// x.createAccount('Cheqing', 150)
// console.log(x);

function get(id) {
    return document.getElementById(id).value;
}
class AccountCTRL extends Component {

    constructor(props) {
        super(props)

        this.state = {
            x : x,
            // accountsHolder = [],
            // accountCards = []
            // counter = 1;
           

        }
        // console.log("Hello from state: ", this.state.accountCards)
    }
    
    mySave() {
        // console.log("In My Save");
        const acName = get("idaccountN");
        const acBalance = get("idstartingB");
        // console.log("Account name and balance: ", acName, acBalance);
        // console.log("This is x before setState: ", x);
        // const theAC=new accounts.Account(acName, acBalance);
        const theAC = x.createAccount(acName, acBalance);
        // const ACCard = theAC.createAccountCard(theAC.key, theAC._accountName, theAC.StartingBalance);
        // x.accountsHolder.push(theAC);
        // console.log(theAC)
        this.CreateReactComponents();
        // console.log(ACCard)

                // if (!acName) {
                //     setMsg('You must enter an account name');
                //     return;
        //  }
    }

    CreateReactComponents=()=>{
       let cards= this.state.x.accountCards;
        console.log(cards); 
        // const listCards= cards.map(card) =>
        // <AccountCard key={cards.key} accountName={cards.accountNam} {balance=}cards.balance>
        // return {listCards}
        // <

            let array1 = []
            let size = x.accountCards.length;
            // console.log("Checking length of accountCards: ", size, this.state.accountCards);
            for (let i=0;i<size;i++){
            array1.push(
                <AccountCard

                    key = {x.accountCards[i].key}
                    key1 = {x.accountCards[i].key}
                    //key is a reserved word, so use key1 if access is required.
                    name = {x.accountCards[i].accountName}
                    balance = {x.accountCards[i].balance}
                    deposit ={this.deposit}
                />
            )}
            this.setState({ accountCards: array1 })
            // console.log("This is x after setState: ", x);
    }
        
        clickMe = (e) => {
            const todo = e.target.getAttribute("todo")
            if (todo === "register") {
                this.mySave();
            }
            

        }

        deposit =(amt,key1)=>{
            const changingAccount = this.state.x.accountsHolder.find(x => x.key === key1);
            const changingAccountCards = this.state.x.accountCards.find(x => x.key === key1);
            // (this.state.x.accountCards.find(x => x.key === key1)).balance=changingAccount.balance
            changingAccount.accountDeposite(amt)
            // changingAccountCards.balance=changingAccount.balance
            console.log(`deposited ${amt} to`);
            console.log(changingAccount);
            this.CreateReactComponents();
            
            
        }

        render() {
           
            return (

                <div className="account-details" onClick={this.clickMe}>
                    
                    <h3>Account Registration</h3>
                    <div><label>Account Name: </label><input type="text" id="idaccountN" required /></div>
                    <div><label>Starting Balance: </label><input type="number" id="idstartingB" required /></div>
                    <button todo="register">Register My Account </button>
                    {this.state.accountCards}
                </div>
            )

        }
    }

    export default AccountCTRL;
     