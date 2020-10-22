//class----collection of objects----design pattern,blueprint,template
//object---real world entitiy
//reference--remote


class Person
{
    setPerson(age,name){
        this.age=age;
        this.name=name;

    }
    printPerson(){
        console.log("name="+this.name);
        console.log("age="+this.age);
    }
}

var obj= new Person();
obj.setPerson(25,"ajay");
obj.printPerson();

var obj1= new Person();
obj1.setPerson(27,"vijay");
obj1.printPerson();


