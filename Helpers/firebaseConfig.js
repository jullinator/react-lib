import * as firebase from 'firebase';

var gps = {
  apiKey: "AIzaSyDEl0olgtJ-BaCyGW9mxj8EkVX2z_MzuKE",
  authDomain: "gpzapp-2af22.firebaseapp.com",
  databaseURL: "https://gpzapp-2af22.firebaseio.com",
  storageBucket: "gpzapp-2af22.appspot.com",
};
var native = {
  apiKey: "AIzaSyCYBx1_N7vRW6tmbPNa5rOduZrdUdA6UHw",
  authDomain: "native-3b4ea.firebaseapp.com",
  databaseURL: "https://native-3b4ea.firebaseio.com",
  storageBucket: "",
};
const Firebase = firebase.initializeApp(native);

export default Firebase;
export const Database = Firebase.database();
export const Auth = Firebase.auth();
