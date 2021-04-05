import firebase from "firebase/app";


export default  function init(){
    var firebaseConfig = {
        apiKey: "AIzaSyDbAkyqK1wAPznJiVqDv70jJlcIH8MzTiU",
        authDomain: "beat-rate.firebaseapp.com",
        projectId: "beat-rate",
        storageBucket: "beat-rate.appspot.com",
        messagingSenderId: "743626510521",
        appId: "1:743626510521:web:a90e99e63c69d13c91cb68",
        measurementId: "G-7ZBJW2YZHM"
    
      };
      


        if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        }

      
}