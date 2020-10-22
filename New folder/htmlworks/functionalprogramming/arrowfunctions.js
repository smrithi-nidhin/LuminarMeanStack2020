//arrow functions/lambda functions/anonymous functions

//anonymous==nameless

 f=(num1,num2)=>num1+num2;
 console.log(f(10,20));


 s=(num1,num2)=>num1-num2;
 console.log(s(20,20));


 d=(num1,num2)=>num1/num2;
 console.log(d(10,10));


 m=(num1,num2)=>num1*num2;
 console.log(m(20,20));


 mo=(num1,num2)=>num1%num2;
 console.log(mo(20,10));


 cube=(num1)=>num1**3;
 console.log(cube(3));


 var ar=[1,2,3,4,5];
//  var sq=[];
//  for(item of ar)
//  {
//      sq.push(item**2);
//  }
//  console.log(sq);

 
var squares=ar.map(num=>num**2)
console.log(squares);

var evens=ar.filter(num=>num%2==0)
console.log(evens);

var names=["abi","anu","anju","binu","bini","biji"];

var upp=names.map(name=>name.toUpperCase());
console.log(upp);


var s=names.filter(name=>name.charAt(0)=='a');
console.log(s);


var arr=[1,2,3,4,5,6];
var tot=arr.reduce((num1,num2)=>num1+num2);
console.log(tot);

var highest=arr.reduce((num1,num2)=>num1>num2?num1:num2); //terinary operator
console.log(highest);