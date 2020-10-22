var arr=[2,1,3,4];
var sarr= arr.sort((num1,num2)=>num1-num2)
console.log(sarr);
low=0;
upp=sarr.length()-1;
var number=6;
while(low<upp){
    var res=sarr[low]+sarr[upp];
    if(res==number)
    {
        console.log("pairs"+arr[low]+","+arr[upp]);
        
    }
}