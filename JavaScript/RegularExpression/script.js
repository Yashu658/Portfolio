function sbmt(){
    let isValid=true;
    //Fetching the elements
    const txt=document.getElementById("text").value.trim();
    const em=document.getElementById("email").value.trim();

    //making to degfault look
    document.getElementById("text").classList.remove("error")
    document.getElementById("email").classList.remove("error")
   
    //validating the name
    if(!/^[A-Za-z\s]+$/.test(txt) || txt.length <3 ){
        document.getElementById("text").classList.add("error")
        // alert("Invalid Input");
        // alert("data too small");
        isValid=false
       
    }
    //validating the email
    if(!/^[A-Za-z\d._]+@(gmail|yahoo|outlook|hotmail|ricr).(com|in|co.in)$/.test(em) || em.length <9 ){
        document.getElementById("email").classList.add("error")
        // alert("Invalid Input");
        // alert("data too small");
        isValid=false
       
    }
    // console.log(em);
    if(isValid){
        console.log(txt,em)
    
    document.getElementById("text").value="";//Erase all the data from input data
    document.getElementById("email").value="";
    }
    
}