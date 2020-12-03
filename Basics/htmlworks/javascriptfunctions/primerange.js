function primerange(low,upp){


    for(i=low;i<=upp;i++)
    {
        var flg=0;
        for(j=2;j<i;j++)
        if(i%j==0)
        {
            flg+=1;
            break;
        }
   
    if(flg==0){
        console.log(i);
    }
}
}
primerange(3,10);