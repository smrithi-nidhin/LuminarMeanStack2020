var arr=[1,3,4,5,7,8,9];
var res=[];
for(num of arr)
{
    if (num > 5)
    {
        num=num+1;
    }
    else{
        num=num-1;
    }
    res.push(num);
}
console.log(res);