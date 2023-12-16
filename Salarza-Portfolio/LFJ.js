var Username = "Jharoldpadayao09@gmail.com";
var PassWord = "YourMom123"

function Login(){
   var User1 = document.getElementById("User").value;
   var Pass1 = document.getElementById("Pass").value;
   if(User1.toLowerCase(Username) && Pass1 == PassWord){
    window.location.href= "game.html";
   }else{
    alert("Wrong Username or Password");
   }
   
   console.log("s");
}