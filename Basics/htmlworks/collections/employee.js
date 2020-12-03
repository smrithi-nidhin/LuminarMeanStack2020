var emp={eid:1001,ename:"gayu",desig:"developer"};
console.log(emp);

//printing
console.log(emp.ename);


//check for salary


console.log("salary" in emp);


//salary 250000

emp["salary"]=25000;
console.log(emp);

//increment 5000

emp["salary"]+=5000;
console.log(emp);


for(key in emp)
{
    console.log(key+","+emp[key]);
}
