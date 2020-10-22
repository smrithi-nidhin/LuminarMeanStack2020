
//try----doubtful code
//catch--handling code
//finally---cleanup code



var data="10+2$5*8+4-8";
try{
var res=eval(data);
console.log(res);
}
catch(err){
console.log("exception")
}
finally{
    console.log("inside finally block")
}




// var age=12;
// try{
//     if(age<=18) throw "not able to create an account"
// }
// catch(err){
//     console.log(err);
// }

