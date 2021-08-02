import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA6pry0clJ8cPgC2sv-ZQibdX16Xo3u9wE",
    authDomain: "crwn-db-ea848.firebaseapp.com",
    projectId: "crwn-db-ea848",
    storageBucket: "crwn-db-ea848.appspot.com",
    messagingSenderId: "458702296526",
    appId: "1:458702296526:web:d657f6775f28986a27879f",
    measurementId: "G-091JEF7RH5"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          })
        } catch (error) {
          console.log('error creating user', error.message);
        }
    }

    return userRef;
    
    console.log(snapShot);
  }
 
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;