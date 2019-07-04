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




 var firebaseConfig = {
    apiKey: "AIzaSyBhNDpYcf8IvOTjvjAPsm8P6jpWU8vfWbY",
    authDomain: "erp-software-b558a.firebaseapp.com",
    databaseURL: "https://erp-software-b558a.firebaseio.com",
    projectId: "erp-software-b558a",
    storageBucket: "",
    messagingSenderId: "599671684678",
    appId: "1:599671684678:web:a20f5e843a453fe2"
};

    firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const db = firebase.firestore();


auth.onAuthStateChanged(function(user) {
    console.log(user);
    if (user) {
      console.log("Logged in");

        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

        console.log(displayName, email,emailVerified,photoURL,isAnonymous,uid,providerData);
      window.location = 'dashboard.html';
    } else {
     console.log("Logged out");
    //  window.location = 'index.html';
    }
  });
  
function signUp(){

    $("#SignUpButton").click(function(event){
        event.preventDefault();
        let userEmail = document.getElementById("signUp_Email_Field").value;
        // let userName = document.getElementById("signUp_Username_Field").value;
        let userPassword = document.getElementById("signUp_Password_Field").value;
        //  console.log(userEmail,userPassword);
        auth.createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // console.log("error code/Message", errorCode,errorMessage);

          });
    });
}







function logout(){
    $(".LogoutLi").click(function(event){
        event.preventDefault();
        console.log("logout clicked");
        auth.signOut().then(()=>{
            window.location='index.html';
        });

    });
}

function login(){
    // $('.page-container').css("display", "none");

    $(".login_Submit").click(function(event){
        event.preventDefault();
        let userEmail = document.getElementById("email_field").value;
        // let userName = document.getElementById("signUp_Username_Field").value;
        let userPassword = document.getElementById("password_field").value;
    //    console.log(userEmail,userPassword);
        auth.signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error code/Message", errorCode,errorMessage);

          });
    });
}

signUp();
login();
logout();


 