import firebase from 'firebase/app';
import 'firebase/firebase-database'
import 'firebase/firebase-auth'
import 'firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'

 const config ={
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "crud-exp.firebaseapp.com",
    databaseURL: "https://crud-exp.firebaseio.com",
    projectId: "crud-exp",
    storageBucket: "crud-exp.appspot.com",
    messagingSenderId: "xxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxx"
}

const myFirebaseApp = firebase.initializeApp(config);
const rsf = new ReduxSagaFirebase(myFirebaseApp)

export default rsf
