var num=9;
var flag=0;
for(var i=2;i<num;i++)
{
    if(num%i==0)
    {
        flag+=1;
        break;
    }
    else
    {
       flag=0;
    }
}
if(flag>0)
{
    console.log(num+" not prime");
}
else
{
    console.log(num+" prime");
}