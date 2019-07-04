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
    } else {
     console.log("Logged out");
     window.location = 'index.html';
    }
  });

function logout(){
    $(".LogoutLi").click(function(event){
        event.preventDefault();
        console.log("logout clicked");
        auth.signOut().then(()=>{
            window.location='index.html';
        });

    });
}

logout();


 