// var a;

// function calc(){
//    try{

//       fetch("https://facebook.com")

//    }catch(e){
//       console.log(e)
//    }
   
// }

// calc()

// console.log("hello world")

// function handleclick(){
//    alert("hello world")
// }

// function handleinput(a, b){
//    alert(a + b)
// }






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

*/


// selector in javascript
/*
six ways in selecting in javascript
1. document.getElementById (it select single element)
2. document.getElementsByClassName (its select many class)
3. document.querySelector
4. document.querySelectorAll
5. document.getElementsByName
6. document.getElementsByTagNameNS
*/

//  DOM FUNCTION / CALLBACK
// document.getElementById("btn").onclick = function(){
//     alert("hello")
// }
document.getElementById("btn").onclick = () => alert("hello")

//old way of javascript function
// function handleclick2(){
//     alert("hello")
// }
// //modern way ES6 STANDARD
// const handleclick = () => {
//     alert("hello")
// }
// // single line code for modern way
// const handleclick1 = () => "hello" 

// let myname = () => "hello"

// console.log(myname())

