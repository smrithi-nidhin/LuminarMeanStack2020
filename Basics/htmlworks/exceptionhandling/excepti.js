//exception is an abnormal code


//try catch finall throw
var num1=10;
var num2=0;

try{
    if(num2==0) throw "division by zero"
    var res=num1/num2;
console.log(res);  //NAn
}
catch(ex){
    console.log(ex)
}
finally{
    console.log("inside finally block")
}


// try(){
    //doubtful code
// }

//catch
// {
//     //handling code
// }
