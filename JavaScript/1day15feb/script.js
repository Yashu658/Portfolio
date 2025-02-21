let count=0;
let element=document.getElementById("h1");
function reset(){
     count=0;
    element.textContent=count;
}
function min(){
    if(count>0){count--;
     element.textContent=count}
}
function plus(){
    if(count<10){
        count++;
        element.textContent=count;
    }

}
