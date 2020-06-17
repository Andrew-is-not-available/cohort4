import React, { Component }  from "react"

class AccountCard extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            depValue: 0,
          }
    }

    depositValue=(e)=>{
        // console.log(e.target.value)
        this.setState({depValue: e.target.value})
    }


    depositInAcctCard=()=>{
        // console.log(this.state.depValue)
        this.props.deposit(this.state.depValue,this.props.key1)
        this.setState({depValue: 0})
    }

    render() {
        
        // console.log(this.props)
        return (
        
        <div className="leftCard">
            <h2> {this.props.name}</h2>
            <h3> ${this.props.balance}</h3>
            <input value={this.state.depValue} onChange={this.depositValue} type="number"></input><button onClick={this.depositInAcctCard}>Deposit</button><br/>
            <input></input><button onClick={this.withdraw}>Withdraw</button><br/>
            <button>Delete</button>

            
        </div>
        )
    }
}
export default AccountCard;