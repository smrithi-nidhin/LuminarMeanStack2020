import React from 'react';
import swal from 'sweetalert';
import Bank from './Bank';
import { withRouter } from 'react-router';
import { Formik, Form, Field } from 'formik';
import * as Yup  from 'yup';
const loginValidations = Yup.object().shape({
    usernme:Yup.string().min(2,'Username should be greater than 2 characters')
    .max(10,'username should not be more than 10 characters'),
    password:Yup.string().min(2,'Username should be greater than 2 characters')
    .max(10,'username should not be more than 10 characters')

})
class Login extends React.Component {
    state={
        username:"",
        password:""
    }
    onUsernameChange = (event)=>{
        this.setState({username:event.target.value});
    }
    onPasswordchange=(event)=>{
        this.setState({password:event.target.value});
    }
    onSubmit =(values)=>{
    //     event.preventDefault();
    //    let usname=this.state.username;
    //    let pwd=this.state.password;


    //     Bank.login(usname,pwd)
    //     .then(response=>{
    //        swal("login success",response.data.message,"success")
    //         this.props.history.push("/home");
    //     })
    //     .catch(error=>{
    //         swal("login failed","u provided invalid message","error")
    //     })




         //let data=Bank.getAccountDetails();
         //if(usname in data)
        //{
        //  let password=data[usname]["password"];
           // if(pwd==password)
           // {
           //     Bank.setCurrentUser(usname);
           //     swal("Login success", "You provided valid data!", "success");
           //    this.props.history.push("\home");
            //}
            //else
            //{
              //  swal("Login failed", "You provided invalid data!!", "error");
            //}
        //}
        //else{
        //    swal("invalid user", "You clicked the button!", "error");
       // }

    }
    render() {
        return (
            <div className="container">

                <div className="row">

                    <div className="col-4"> </div>
                    <div className="col-4">
                        <h2>
                            WELCOME TO SIB</h2><img src="D:\Luminarmeanstack\bankapplication\bg-01.jpg" alt="" />
                    </div>
                    <div className="col-4"></div>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                       
                            <div className="jumbotron" >
                            <Formik
                                initialValues={{
                                    username:"",
                                    password:""
                                }}
                                validationSchema={loginValidations}
                                onSubmit={this.onSubmit}
                            >
                                {({errors,touched})=>(<Form>
                                <div className="form-group">
                                    <label for="">UserName</label>
                                    <Field name="username" /><br />
                                </div>
                                <div className="form-group">
                                    <label for="">Password</label>
                                    <Field name="password" type="password" /><br />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success"> Login</button>
                                </div>
                                </Form>

                                )}
                            
                                </Formik>
                            </div>
                        
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);