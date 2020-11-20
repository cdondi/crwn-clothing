import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVgHegeMFDszzhgm84rCaodFiGv3gf_Kc",
    authDomain: "crwn-db-df569.firebaseapp.com",
    databaseURL: "https://crwn-db-df569.firebaseio.com",
    projectId: "crwn-db-df569",
    storageBucket: "crwn-db-df569.appspot.com",
    messagingSenderId: "136347837861",
    appId: "1:136347837861:web:e1e7f07f7c04952c48344c",
    measurementId: "G-YRWHDXQC2J"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
