function toggleSignup(){
    document.getElementById("login-toggle").style.backgroundColor="#fff";
     document.getElementById("login-toggle").style.color="#222";
     document.getElementById("signup-toggle").style.backgroundColor="#57b846";
     document.getElementById("signup-toggle").style.color="#fff";
     document.getElementById("login-form").style.display="none";
     document.getElementById("signup-form").style.display="block";
 }
 
 function toggleLogin(){
     document.getElementById("login-toggle").style.backgroundColor="#57B846";
     document.getElementById("login-toggle").style.color="#fff";
     document.getElementById("signup-toggle").style.backgroundColor="#fff";
     document.getElementById("signup-toggle").style.color="#222";
     document.getElementById("signup-form").style.display="none";
     document.getElementById("login-form").style.display="block";
 }

//  Function for login

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("askdf");
    } else {
      // No user is signed in.
    }
  });
  
function login(){
    
    $(".login_Submit").click(function(){
        let userEmail = document.getElementById("email_field").value;
        let userPassword = document.getElementById("password_field").value;
       console.log(userEmail,userPassword);
    });
}
login();
 