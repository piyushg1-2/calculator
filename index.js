var button=document.querySelectorAll(".chg");
var input=document.getElementById("input");

var clr=document.getElementById("clear");
var del=document.getElementById("del");
var res=document.getElementById("equal");

button.forEach((but)=>{
    but.addEventListener('click',(e)=>{
     
     input.value=input.value+e.target.value;
    })
})


clr.addEventListener('click',()=>{
     input.value="";
})

del.addEventListener('click',()=>{
        let val=input.value.length;
        let nw=input.value.substring(0,val-1);
        input.value=nw;
        
        
})

res.addEventListener("click",()=>{
 
     let val=eval(input.value);
     input.value=val;

})

