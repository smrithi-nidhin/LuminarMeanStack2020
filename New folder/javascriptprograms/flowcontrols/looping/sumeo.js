var sum=50;
var i=1;
var evensum=0;
var oddsum=0;
while(i<=sum){
 if(i%2==0)
 {
     evensum+=i;
 }
 else{
     oddsum+=i;
 }
 i++;
}
console.log("evensum"+evensum);
console.log("evensum"+oddsum);