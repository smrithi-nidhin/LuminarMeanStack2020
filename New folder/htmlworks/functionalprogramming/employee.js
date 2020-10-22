class Employee
{
    constructor(eid,ename,desig,sal)
    {
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.sal=sal;
    }
    getEmp=()=>{
        console.log(this.ename);
        console.log(this.desig);
        console.log(this.sal);
    }
}

var ob=new Employee(1001,"ajay","develper",25000);


var ob1=new Employee(1002,"vijay","php develper",15000);


var ob2=new Employee(1003,"dev","python develper",35000);

var emp=[];
emp.push(ob);
emp.push(ob1);
emp.push(ob2);

//print all employees who have salary>22000

for(e of emp)
{
    if(e.sal>22000)
    {
        console.log(e.ename+e.sal)
    }
}


for(e of emp)
{
    if(e.desig=="develper")
    {
        console.log(e.ename+e.desig)
    }
}

