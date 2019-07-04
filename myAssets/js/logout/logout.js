




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
    //   $(".form-modal").css("display", "none");
    //   window.location.href = '/dashboard.html';
    //   window.location = 'dashboard.html';
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


 