
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



auth.onAuthStateChanged(function(user) {

    console.log(user);
    if (user) {
      console.log("Logged in");
    } else {
     console.log("Logged out");
    }
  });
  
function signUp(){

    $("#SignUpButton").click(function(event){
        event.preventDefault();
        let userEmail = document.getElementById("signUp_Email_Field").value;
        // let userName = document.getElementById("signUp_Username_Field").value;
        let userPassword = document.getElementById("signUp_Password_Field").value;
       console.log(userEmail,userPassword);
        auth.createUserWithEmailAndPassword(userEmail, userPassword).then(cred =>{
            console.log("You are signed up");
            window.location = 'dashboard.html';
        })
    });
}
signUp();


function logout(){
    $(".LogoutLi").click(function(event){
        event.preventDefault();
        auth.signOut();

    });
}

function login(){
    // $('.page-container').css("display", "none");

    $(".login_Submit").click(function(event){
        event.preventDefault();
        let userEmail = document.getElementById("email_field").value;
        // let userName = document.getElementById("signUp_Username_Field").value;
        let userPassword = document.getElementById("password_field").value;
       console.log(userEmail,userPassword);
        auth.signInWithEmailAndPassword(userEmail, userPassword).then(cred =>{
            console.log("You are signed in");
            
        })
    });
}



login();
 