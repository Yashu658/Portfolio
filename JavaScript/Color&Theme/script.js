// function changecolor1(color){
//     document.getElementById("con1").style.backgroundColor =color;
// }
// function changecolor2(color){
//     document.getElementById("h1").style.color =color;
// }
// function changecolor3(color){
//     document.getElementById("p").style.color = color;
// }


function red() {
    document.getElementById("con2").style.backgroundColor = "red";
  }
  
  function green() {
    document.getElementById("con2").style.backgroundColor = "green";
  }
  
  function blue() {
    document.getElementById("con2").style.backgroundColor = "blue";
  }
  
  function dark() {
    document.getElementById("con2").classList.add("dark");
  }
  
  function light() {
    document.getElementById("con2").classList.remove("dark");
  }
  
  function changetheme(value) {
    document.getElementById("con2").classList.toggle("dark");
    const mode = document.getElementById("theme");
  
    console.log(mode);
  
    if (mode.innerText === "Dark theme") {
      mode.innerText = "Light theme";
    } else {
      mode.innerText = "Dark theme";
    }
  }
  
  
  
 