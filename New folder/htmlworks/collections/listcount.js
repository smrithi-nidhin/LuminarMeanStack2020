var arr=[10,10,20,20,30,32,31];

var cnt={};
for(num of arr){
    if(num in cnt){
        cnt[num]+=1;
    }
    else{
        cnt[num]=1;
    }
}
console.log(cnt);