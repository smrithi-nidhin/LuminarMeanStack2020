var express = require('express');
const bank = require('../services/bank');
var router = express.Router();
var Bank = require('../services/bank');



function authMiddleware(req,res,next){
  console.log("authmiddleware");
  if(Bank.getCurrentUser()){
    next();
  }
  else{
    res.send({message:"User not authenticated"});
  }
}

/* GET users listing. */

router.get('/',authMiddleware, function(req, res) {
  var result=Bank.getUsers();
  res.send(result);
});


router.post('/register',function(req, res) {
  let usname=req.body.username;
  let pwd=req.body.password;
  let acno=req.body.acno;
  let confirmpassword=req.body.confirmpassword;
  let data=Bank.getUsers();
  if(usname in data){
    res.status(400).send({message:"user already exist.Please login"});
  }
  else if(pwd!=confirmpassword){
    res.status(400).send({message:"password and confirm password doesnot match"});
  }
  else{
    Bank.addUser(usname,pwd,acno);
    res.send({message:"User registered successfully"});
  }

});

router.post('/login',function(req, res) {
  let usname=req.body.username;
       let pwd=req.body.password;
       let data=Bank.getUsers();
       if(usname in data)
        {

            let password=data[usname]["password"];
            if(pwd==password)
            {
              req.session.currentUser=usname;
                Bank.setCurrentUser(usname);
                res.send({message:"Login success"});
            }
            else
            {
              res.status(400).send({message:"you provide invalid message"});
            }
        }
        else{
            res.status(400).send({message:"invalid user"});
        }

});

router.post('/deposit',authMiddleware, function(req, res) {
  let uname = req.body.username;
  let amt = Number(req.body.amount);
  let data = Bank.getUsers();
    if (uname in data) {

      data[uname]["balance"] += amt;
      let bal = data[uname]["balance"];
     
      data[uname]["history"].push({
          typeOfTransaction:"Credit",
          amount:amt
      })
     
      res.send({balance:bal,message:"Deposit succcessful"});
  }
  else {
    res.status(400).send({message:"invalid user"});
  }

});

router.post('/withdraw',authMiddleware,function(req,res) {
  let uname = req.body.username;
  let amt = Number(req.body.amount);
  let data = Bank.getUsers();
  if (uname in data) {
      if(uname!=req.session.currentUser)
      {
        return res.status(400).send({message:"Invalid user"});
      }
      if(amt>data[uname]["balance"]){
        return res.status(400).send({message:"Insufficient balance"})
      }
      
          data[uname]["balance"] -= amt;
          let bal = data[uname]["balance"];
          data[uname]["history"].push({
              typeOfTransaction:"Debit",
              amount:amt
          })
         
          res.send({balance:bal,message:"withdraw successful"});
      }
  
  else {
      res.status(400).send({message:"invalid user"});
  }
}

)

router.get('/transactionhistory',authMiddleware,function(req,res){
  let data=Bank.getUsers();
  let uname=req.session.currentUser;
  if(uname in data){
    return res.send({history:data[uname].history});

  }
  else{
    res.status(400).send({message:"invalid user"})
  }
})
module.exports = router;

