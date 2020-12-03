var one=document.querySelector("#one");
one.addEventListener("click",()=>{
    one.textContent="am clicked";
    one.style.color="red";
})



var two=document.querySelector("#two");
two.addEventListener("dblclick",()=>
{
    two.textContent="double clicked";
    two.style.color="blue";
})


var three=document.querySelector("#three");
three.addEventListener("mouseover",()=>{
    three.style.color="yellow";
    three.textContent="mouse over me"
})


var three=document.querySelector("#three");
three.addEventListener("mouseout",()=>{
    three.style.color="black";
    three.textContent="mouse not over me"
   
})




