function reg() {

    let isValid=true;

  const a = document.getElementById("name").value.trim();
  document.getElementById("name").classList.remove("error");
  if (!/^[A-Za-z\s]+$/.test(a) || a.length < 3) {
    document.getElementById("name").classList.add("error");
    isValid = false;
  }



  const b = document.getElementById("email").value.trim();
  document.getElementById("email").classList.remove("error");
  if(!/^[A-Za-z\d._]+@(gmail|yahoo|outlook|hotmail|ricr).(com|in|co.in)$/.test(b) || b.length <9 )
    {
    document.getElementById("email").classList.add("error")
    isValid=false
}

  const c = document.getElementById("password").value.trim();
  document.getElementById("password").classList.remove("error");
  if (c.length < 8) {
    document.getElementById("password").classList.add("error");
    isValid = false;
  }

  const d = document.getElementById("gender").value.trim();
  document.getElementById("gender").classList.remove("error");
  if (!d) {
    document.getElementById("gender").classList.add("error");
    isValid = false;
  }

  const e = document.getElementById("dob").value.trim();
  document.getElementById("dob").classList.remove("error");
  if (!e) {
    document.getElementById("dob").classList.add("error");
    isValid = false;
  }

  const g = document.querySelector("input[name='gender']:checked").value;
  document.getElementById("gen").classList.remove("error");
  if (!g) {
    document.getElementById("gen").classList.add("error");
    isValid = false;
  }


  const q = [];
  document.querySelectorAll("input[name='doc']:checked").forEach((element) => {
    q.push(element.value);
  });
  document.getElementById("check").classList.remove("error");
 if (!q) {
    document.getElementById("check").classList.add("error");
    isValid = false;
  }
  

  const ck = document.getElementById("accept").checked;
  if (!ck) {
    alert("please accept the t&c");
    return;
  }

  if(isValid){
    console.log(a, b, c, d, e, g, q);

document.getElementById("name").value="";//Erase all the data from input data
document.getElementById("email").value="";
document.getElementById("gender").value="";
document.getElementById("gen").value="";
document.getElementById("password").value="";
document.getElementById("check").value="";

}
  
 

  


}
