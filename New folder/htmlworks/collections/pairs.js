var arr = [1,2,3,4];
var data = 6;
for(num1 of arr){
    for(num2 of arr){
        var sum=num1+num2;
        if(sum==data){
            console.log(num1,num2);
        }
    }
}