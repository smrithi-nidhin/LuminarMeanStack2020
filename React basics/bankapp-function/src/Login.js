import React from 'react';
function Login(){
    return (
        <div className="container">

            <div className="row">

                <div className="col-4"> </div>
                <div className="col-4">
                    <h2>
                        WELCOME TO SIB</h2><img src="D:\Luminarmeanstack\bankapplication\bg-01.jpg" alt=""/>
        </div>
                    <div className="col-4"></div>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">

                        <div className="jumbotron" >
                            <div className="form-group">
                                <label for="">UserName</label>
                                <input type="text" className="form-control" name="uname" id="uname"
                                    placeholder="Enter Username" /><br />
                </div>
                                    <div className="form-group">
                                        <label for="">Password</label>
                                        <input type="password" className="form-control" name="passw" id="pwd"
                                            placeholder="Enter Password" /><br />
                </div>
                                            <div className="form-group">
                                                <button type="button" id="log" className="btn btn-success" onclick="Bank.login()"> Login</button>
                                            </div>
            </div>
                                        <div className="col-4"></div>
                                    </div>
    </div>
                            </div>
);
}

export default Login;