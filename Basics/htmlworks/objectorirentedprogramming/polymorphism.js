//polymorphism-->many forms

//method overloading
//method overriding


class Maths
{
    add()
    {
        console.log(10+20);

    }
    add(num1)
    {
        console.log(10+num1);
    }
    add(num,num1)
    {
        console.log(num+num1);
    }
}
var calc=new Maths();
calc.add(10,20);
calc.add();

//same method name but different types of argumrents but in javascript recently implemted methods
