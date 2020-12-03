class Bank{
   static getAccountDetails(){
        let data={
            test1:{username:"test1",password:"dija123",acno:1001,balance:60000},
            test2:{username:" test2",password:"priya123",acno:1002,balance:40000},
            test3:{username:"test3",password:"kavya123",acno:1003,balance:30000},
            test4:{username:"test4",password:"nidi123",acno:1004,balance:90000},
        }
        return data;
    }

    static login(){
        let usname=document.querySelector("#uname").value ;
        let pwd=document.querySelector("#pwd").value;
        //alert(usname+pw);
        let data=Bank.getAccountDetails();   //check username is present inside data
        if(usname in data)
        {
            let password=data[usname]["password"];
            if(pwd==password)
            {
                swal("Login success", "You provided valid data!", "success");
                setTimeout(()=>window.location.href="userhome.html",5000);
            }
            else
            {
                swal("Login failed", "You provided invalid data!!", "error");
            }
        }
        else{
            swal("invalid user", "You clicked the button!", "error");
        }
    }

    static deposit()
    {
        let uname=document.querySelector("#uname").value;
        let amt=Number(document.querySelector("#amount").value);
        let data=Bank.getAccountDetails();
        let deposit_id=document.querySelector("#deposit_id");
        
        if(uname in data)
        {
          
            data[uname]["balance"]+=amt;
            let bal=data[uname]["balance"];
            deposit_id.textContent="your available balance"+bal;
            //alert("available balance="+data[uname]["balance"]);

        }
        else{
            alert("invalid user")
        }
    }

    static withdraw()
    {
        let uname=document.querySelector("#usname").value;
        let amt=Number(document.querySelector("#amount1").value);
        let data=Bank.getAccountDetails();
        let withdraw_id=document.querySelector("#withdraw_id");
        if(uname in data)
        {
           let avlbal= data[uname]["balance"];
           if(amt>avlbal)
           {
               withdraw_id.textContent="insufficient balance"
               //alert("insufficient balance")
           }
           else{
            data[uname]["balance"]-=amt;
            let bal=data[uname]["balance"];
            withdraw_id.textContent="your available balance="+bal;
           }
        }
        else
        {
            alert("invalid user")
        }
    }
}