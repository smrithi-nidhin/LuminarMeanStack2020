import React from 'react';
import swal from 'sweetalert';
import Bank from './Bank';
import { withRouter } from 'react-router';
class Register extends React.Component{
    state={
        username:"",
        password:"",
        acno:"",
        confirmpassword:""
    }
    onUsernameChange = (event)=>{
        this.setState({username:event.target.value});
    }

    onPasswordChange=(event)=>{
        this.setState({password:event.target.value});
    }
    onAcnoChange=(event)=>{
        this.setState({acno:event.target.value});
    }
    onConfirmPasswordChange=(event)=>{
        this.setState({confirmpassword:event.target.value});
    }
    
    onSubmit =(event)=>{
        event.preventDefault();
       let usname=this.state.username;
       let pwd=this.state.password;
       let cpass=this.state.confirmpassword;
       let acno=this.state.acno;

       Bank.registration(usname,pwd,cpass,acno)
       .then(response=>{
      
         swal("Registration successful",response.data.message,"success");
              this.props.history.push("/");
       })
       .catch(err=>{
           swal("Registration failed",err.response.data.message,"error")
       });






    //    let data=Bank.getAccountDetails();
    //    if(usname in data)
    //     {
    //        swal("Registration failed","User already exists please login","error"); 
    //     }
    //     else if(pwd!=cpass)
    //     {
    //         swal("registration failed","password and confirm password doesnot match","error");
    //     }
    //     else{
    //         Bank.addUser(usname,pwd,acno);
    //         swal("Registration successful","You have registered successfully","success");
    //         this.props.history.push("/");
    //     }
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label for="">UserName</label>
                                    <input type="text" value={this.state.username} onChange={this.onUsernameChange}  className="form-control"  
                                        placeholder="Enter Username" /><br />
                                </div>
                                <div className="form-group">
                                    <label for="">Account Number</label>
                                    <input type="text" value={this.state.acno} onChange={this.onAcnoChange} className="form-control"
                                        placeholder="Enter Password" /><br />
                                </div>
                                <div className="form-group">
                                    <label for="">Password</label>
                                    <input type="password" value={this.state.password} onChange={this.onPasswordChange} className="form-control" 
                                        placeholder="Enter Password" /><br />
                                </div>
                                <div className="form-group">
                                    <label for="">Confirm Password</label>
                                    <input type="password" value={this.state.confirmpassword} onChange={this.onConfirmPasswordChange} className="form-control" name="passw" id="pwd"
                                        placeholder="Enter Confirm Password" /><br />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success"> Register</button>
                                </div></form>

            </div>
        )
    }
}

export default withRouter(Register);