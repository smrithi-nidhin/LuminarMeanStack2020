const fs=require('fs');
fs.readFile('sample.txt','utf8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data)
    }
})


fs.appendFile('sample.txt','haii',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data)
    }
})


fs.readdir('./',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data)
    }
})