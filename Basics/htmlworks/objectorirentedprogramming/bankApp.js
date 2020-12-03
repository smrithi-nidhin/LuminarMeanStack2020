class Bank{

    static bankname="SIB";
    static getBankname()
    {
        return static 
    }
    createAccount(pname,accno,balance,b_name)
    {
        this.person_name=pname;
        this.accno=accno;
        this.balance=balance;
        this.bank_name=b_name;
    }

    deposit(amount)
    {
        this.balance+=amount;
        console.log("Your "+this.bank_name+"account credited with"+amount+"avl bal"+this.balance);
    }
    withdraw(amount)
    {
        if(amount>this.balance)
        {
            console.log("insufficient balance in your account");
        }
        else
        {
            this.balance-=amount;
            console.log("Your "+this.bank_name+" account debited with "+amount+" avl bal "+this.balance);
        }
    }

    balanceEnq()
    {
        console.log("Your current account balance  "+this.balance);
    }
}

var obj= new Bank();
obj.createAccount("ajay",1001,2000,"SIB");


obj.deposit(10000);
obj.withdraw(5000);

//obj.balanceEnq();