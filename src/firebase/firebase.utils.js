import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD4bab5O4SRUzAc35SkifcjsaiwMdyYMw8",
  authDomain: "crown-db-a28e1.firebaseapp.com",
  projectId: "crown-db-a28e1",
  storageBucket: "crown-db-a28e1.appspot.com",
  messagingSenderId: "494289149482",
  appId: "1:494289149482:web:f05b4b9240e0e7873f2d53",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`Error creating user ${error.message}`);
    }
  }

  return userRef;
};

export default firebase;
