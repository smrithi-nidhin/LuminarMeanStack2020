class Employee
{
    constructor(eid,name,desig,join,resign)
    {
        this.eid=eid;
        this.name=name;
        this.desig=desig;
        this.join=join;
        this.resign=resign;
    }
    getEmployee=()=>
    {
        console.log(this.eid);
        console.log(this.name);
        console.log(this.desig);
        console.log(this.join);
        console.log(this.resign);
    }
}
var obj1=new Employee(100,"ajay","devop",1981,2003);
var obj2=new Employee(101,"vijay","devop",1992,2008);
var obj3=new Employee(102,"binu","ba",1999,2007);
var obj4=new Employee(103,"john","ba",1989,2010);
var obj5=new Employee(104,"danie","qa",2009,2014);
var obj6=new Employee(105,"lari","qa",1987,2010);

var emp=[];
emp.push(obj1);
emp.push(obj2);
emp.push(obj3);
emp.push(obj4);
emp.push(obj5);
emp.push(obj6);

console.log("All employees name and designation");
var employ=emp.map((obj)=>obj.name+"  "+obj.desig)
console.log(employ);

console.log("employee details whose desig is develop");
var design=emp.filter(obj=>obj.desig=="devop");
console.log(design);

console.log("employee who are working in 80s");
var work=emp.filter(obj=>obj.join>1980 & obj.join<1990)
console.log(work)

console.log("employees those who have 9 years experience")
var exp=emp.filter(obj=>(obj.resign-obj.join)>9);
console.log(exp)

console.log("sort all employees based on joining year")
var semp=emp.sort((obj1,obj2)=>obj1.join-obj2.join);
console.log(semp);

