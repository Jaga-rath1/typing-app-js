p = document.querySelector("p");
window.addEventListener("keydown",function(val){
   
    if(val.key === " "){
        p.innerText = "Space";
    }else{
        p.innerText = val.key;
    }
    
})