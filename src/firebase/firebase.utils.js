import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyAZ6M-S3JrvnVvcMDXRLg8GWVS5RvKCAoM",
    authDomain: "crwn-clothing-jim.firebaseapp.com",
    databaseURL: "https://crwn-clothing-jim.firebaseio.com",
    projectId: "crwn-clothing-jim",
    storageBucket: "crwn-clothing-jim.appspot.com",
    messagingSenderId: "276954193330",
    appId: "1:276954193330:web:496340f53d77bb296618ab",
    measurementId: "G-7C15R596HB"
};

firebase.initializeApp(config); 

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
