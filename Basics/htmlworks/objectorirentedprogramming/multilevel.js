class Parent{
    m1()
    {
        console.log("inside parent");
    }
}
class Child extends Parent
{
    m2(){
        console.log("inside first child");
    }
}
class SubChild extends Child
{
    m3(){
        console.log("inside sub child");
    }
}
var obj=new SubChild();
obj.m3();
obj.m2();
obj.m1();