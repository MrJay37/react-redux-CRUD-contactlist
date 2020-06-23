import firebase from 'firebase/app';
import 'firebase/firebase-database'
import 'firebase/firebase-auth'
import 'firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'

 const config ={
   apiKey: "AIzaSyDkCnuMJgWl-eC_qp3X1mVD1ht0OWoPock",
   authDomain: "crud-exp.firebaseapp.com",
   databaseURL: "https://crud-exp.firebaseio.com",
   projectId: "crud-exp",
   storageBucket: "crud-exp.appspot.com",
   messagingSenderId: "1056117582761",
   appId: "1:1056117582761:web:0f123a8e25c92b94f6f2b8",
   measurementId: "G-LDM9B612CT"
}

const myFirebaseApp = firebase.initializeApp(config);
const rsf = new ReduxSagaFirebase(myFirebaseApp)

export default rsf
