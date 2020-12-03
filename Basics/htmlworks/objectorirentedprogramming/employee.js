class Employee{

    constructor(eid,ename){
        this.eid=eid;
        this.ename=ename;
    }
    getEmployee()
    {
      console.log("eid="+this.eid);
      console.log("name="+this.ename);

    }
}

var emp =new Employee(100,"ajay");
//emp.setEmployee();
emp.getEmployee();


//constructor
//classname
//duty of constructor ios to initialize instance variables

//constructor name is always a constructor
//constructor will invoked at the time of object creation 

