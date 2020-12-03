//create student class(rol,name,total,course)
////print all students name and id those who have total>135
//print all students name those who have course=>bca
//find sum of students total those who course bca

class Student
{
   constructor(rol,name,total,course)
   {
       this.rol=rol;
       this.name=name;
       this.total=total;
       this.course=course;
   } 
   getStudent=()=>{
       console.log(this.rol);
       console.log(this.name);
       console.log(this.total);
       console.log(this.course);
   }

}
var obj1=new Student(101,"anu",225,"bca");
var obj2=new Student(102,"sonu",105,"bba");
var obj3=new Student(103,"priya",325,"bca");

var stud=[];
stud.push(obj1);
stud.push(obj2);
stud.push(obj3);

console.log("student score more than 135 marks ")
for(s of stud)
{
    if(s.total>135)
    {
        console.log(s.rol+"  "+s.name);
    }
}
console.log("Students in BCA course ")
for(s of stud)
{
    if(s.course=="bca")
    {
        console.log(s.name+" "+s.course);
    }
}
var t=0;
for(s of stud)
{
    if(s.course=="bca")
    {
        t+=s.total;    
    }
}
console.log(t)



var stud1=stud.filter(obj=>obj.total>135);
console.log(stud1)


var cfilter=stud.filter(obj=>obj.course=="bca");
console.log(cfilter);

// //total max /numbers

var total=cfilter.map(obj=>obj.total).reduce((obj1,obj2)=>obj1+obj2);
console.log(total);


//maximum total
var maxtotal=stud.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2);
console.log(maxtotal);


//minimum total
var mintotal=stud.map(obj=>obj.total).reduce((obj1,obj2)=>obj2>obj1?obj1:obj2);
console.log(mintotal);

var topstud=stud.filter(obj=>obj.total==maxtotal);

console.log(topstud)
// for(stud of topstud)
// {
//     stud.getStudent()
// }

var strstud=stud.map(obj=>obj.total).sort((obj1,obj2)=>obj1-obj2);
console.log(strstud);



//question

//create class Employee eid ename,desig salary
//priunt highest salary
//print lowest salary
//print emp salary in sorted order

