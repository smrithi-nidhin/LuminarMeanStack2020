var data="hello hai hello hai hello";

var words=data.split(" ");
var obj={};
 
for(word of words){
    if(word in obj){
        obj[word]+=1;
    }
    else{
        obj[word]=1;
    }
}

console.log(obj);

var arr=[];
for(key in obj){
    var num=obj[key];
    arr.push(num);
}

var srt=arr.sort((a,b)=>b-a);
var ele=srt[0];
for(key in obj){
    if(ele==obj[key]){
        console.log(key);
    }
}