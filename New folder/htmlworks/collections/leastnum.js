var arr=[-2,5,100,1,3,2,0];
// var i=-1;
// do{
//     var flg=0;
//     i++;
//     for(ele of arr){
//         if(ele==i){
//             flg=1;
//             break;
//         }
//     }
// }while(flg==1)
// console.log(i);


var cnt=1;
for(item of arr){
    if(arr.includes(cnt)){

    }
    else{
        console.log(cnt+"is missing");
        break;
    }
    cnt+=1;
}



//question
//var a=[2,4,5] //op [9,7,6]
//var a=[4,8,2]//op[10,6,12]