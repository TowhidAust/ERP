// This import loads the firebase namespace along with all its type information.
import * as firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/functions";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCBGF5jQfpK_yktdnUs8a80XPn0MLxSt9Y",
  authDomain: "edutech-2121.firebaseapp.com",
  databaseURL: "https://edutech-2121.firebaseio.com",
  projectId: "edutech-2121",
  storageBucket: "edutech-2121.appspot.com",
  messagingSenderId: "981500378332"
};
firebase.initializeApp(config);

// Export the database, auth and firebase timestamp seperately for convenience
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const cloudFunctions = firebase.functions();
export const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export default firebase;