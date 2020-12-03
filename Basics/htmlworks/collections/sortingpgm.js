var arr=[10,2,4,11];


for(var i=0;i<arr.length;i++){


    for(var j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    } 
}
console.log(arr);


var arr=arr.sort((i,j)=>i-j);
console.log(arr);