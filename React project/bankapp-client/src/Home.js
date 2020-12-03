import React from 'react';
import swal from 'sweetalert';
import Bank from './Bank';
import { Link } from 'react-router-dom';
class Home extends React.Component {
    state = {
        dpusername: "",
        dpamount: "",
        wdusername: "",
        wdamount: "",
        balance: ""
    }

    dpUsernameChange = (event) => {
        this.setState({ dpusername: event.target.value });
    }
    dpAmountChange = (event) => {
        this.setState({ dpamount: event.target.value });
    }
    wdUsernameChange = (event) => {
        this.setState({ wdusername: event.target.value });
    }
    wdAmountChange = (event) => {
        this.setState({ wdamount: event.target.value });
    }
    onDeposit = (event) => {
        event.preventDefault();
        let uname = this.state.dpusername;
        let amt = Number(this.state.dpamount);
       Bank.deposit(uname,amt)
       .then(response=>{
           this.setState({balance:response.data.balance})
           swal("success","deposit successfull","success")
       }).catch(err=>{
           swal("deposit failed","U provide invalid data","error")
       })
        // let deposit_id = document.querySelector("#deposit_id");
        // if (uname in data) {

        //     data[uname]["balance"] += amt;
        //     let bal = data[uname]["balance"];
        //     //deposit_id.textContent = "your available balance" + bal;
        //     //alert("available balance="+data[uname]["balance"]);
        //     data[uname]["history"].push({
        //         typeOfTransaction:"Credit",
        //         amount:amt
        //     })
        //     Bank.saveData();
        //     this.setState({ balance: bal });
        //     swal("Deposit succcessful");
        // }
        // else {
        //     alert("invalid user")
        // }

    }
    onWithdraw = (event) => {
        event.preventDefault();
        let uname = this.state.wdusername;
        let amt = Number(this.state.wdamount);
        Bank.withdraw(uname,amt)
        .then(response=>{
            this.setState({balance:response.data.balance})
            swal("success","withdraw successfull","success")
        }).catch(err=>{
            swal("withdraw failed","U provide invalid data","error")
        })


        // let data = Bank.getAccountDetails();
        // //let withdraw_id = document.querySelector("#withdraw_id");
        // if (uname in data) {
        //     let avlbal = data[uname]["balance"];
        //     if (amt > avlbal) {
        //         //withdraw_id.textContent = "insufficient balance"
        //         swal("Withdraw successfull")
        //     }
        //     else {
        //         data[uname]["balance"] -= amt;
        //         let bal = data[uname]["balance"];
        //         this.setState({ balance: bal });
        //         data[uname]["history"].push({
        //             typeOfTransaction:"Debit",
        //             amount:amt
        //         })
        //         Bank.saveData();
        //         swal("withdraw successful")
        //     }
        // }
        // else {
        //     swal("invalid user")
        // }
    }

    render() {
        return (
            <div className="container">
                <h1> Balance:{this.state.balance}</h1>
                <Link to="/history">History</Link>
                <div className="row">
                    <div className="col-6" >
                        {/* <button type="button">Logout</button> */}
                        <div className="jumbotron" >
                            <h3 >DEPOSIT</h3>
                            <form onSubmit={this.onDeposit}>
                                <div className="form-group">
                                    <label for="">UserName</label>
                                    <input type="text" value={this.state.dpusername} onChange={this.dpUsernameChange} className="form-control" name="uname" id="uname"
                                        placeholder="Enter Username" /><br />
                                </div>
                                <div className="form-group">
                                    <label for="">Amount</label>
                                    <input type="text" value={this.state.dpamount} onChange={this.dpAmountChange} className="form-control" name="" id="amount" placeholder="Enter amount" /><br />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success">
                                        Deposit</button>
                                </div>
                                <h4 id="deposit_id"></h4>
                            </form>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="jumbotron" >
                            <h3 >WITHDRAW</h3>
                            <form onSubmit={this.onWithdraw}>
                                <div className="form-group">
                                    <label for="">UserName</label>
                                    <input type="text" className="form-control" value={this.state.wdusername} onChange={this.wdUsernameChange} name="uname" id="usname"
                                        placeholder="Enter Username" /><br />
                                </div>
                                <div className="form-group">
                                    <label for="">Amount</label>
                                    <input type="text" className="form-control" value={this.state.wdamount} onChange={this.wdAmountChange} name="" id="amount1" placeholder="Enter amount" /><br />
                                </div>
                                <div className="form-group">
                                    <button type="submit" id="log" className="btn btn-success" >
                                        Withdraw</button>
                                </div>
                                <h4 id="withdraw_id"></h4>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;