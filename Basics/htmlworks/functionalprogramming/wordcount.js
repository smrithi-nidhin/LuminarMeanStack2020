var str="HHHPPSDAAA";
var output=[];
var obj={};
var s=str.split("");
//console.log(s)
for(char of s)
{
    if(char in obj)
    {
        obj[char]+=1;
    }
    else{
        obj[char]=1;
    }
}
for(ele in obj)
{
    output+=obj[ele]+ele;
}
console.log(output);