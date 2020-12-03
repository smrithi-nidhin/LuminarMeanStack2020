var sum=0;
var cube,rem;
var num=123;
while(num>0)
{
    rem=num%10;
    cube=rem*rem*rem;    
    sum =sum+cube;
    num=Math.floor(num/10);
}
console.log(sum);