//var a;
//
//function calc(){
//   try{
//
//      fetch("https://facebook.com")
//
//   }catch(e){
//      console.log(e)
//   }
//   
//}
//
//calc()
//
//console.log("hello world")

function handleclick(){
   alert("Hello world")
}

function handleinput(a, b){
   alert(a + b)
}





/*
common js event
1 onclick
2 onmousehover
3 onmouseenter
4 onmouseleave
5 ondblclick
6 onkeyup
7 onkeydown
8 onchange

<input type="text" name="firstname">
<input type="text" name="lastname">

selector in js
1. document.getElementById("test")
2. document.getElementsByClassName("top")
3. document.querySelector("button")
4. document.querySelectorall

5. document.getElementsByName
6. document.getElementsByTagName

*/





document.getElementById("btn").onclick = () => alert("hello")
