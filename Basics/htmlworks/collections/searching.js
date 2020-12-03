var arr=[1,2,3,4,5,6,7];

var ele=6;
var flg=0;
for(item of arr){
    if(ele==item){
        flg+=1;
        break;
        console.log("element found");
    }
    }
    if(flg>0)
    {
        console.log("element found");
    }
    else
    {
        console.log("not found");
    }

