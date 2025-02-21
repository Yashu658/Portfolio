function fetchData(rollno,fetchnext){
    setTimeout(()=>{
        console.log("student"+rollno);
        if(fetchnext){
            fetchnext();
        }
        
    },2000);
}

//callback Hell
fetchData(

)


let p = new Promise((resolve,reject)=>{
    setTimeout
})