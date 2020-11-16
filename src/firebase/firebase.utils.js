import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    
    apiKey: "AIzaSyBhDMMOXlx6YpmI6ZO6rORvXu3n1qBHXwY",
    authDomain: "clothingshop-be875.firebaseapp.com",
    databaseURL: "https://clothingshop-be875.firebaseio.com",
    projectId: "clothingshop-be875",
    storageBucket: "clothingshop-be875.appspot.com",
    messagingSenderId: "1066909315315",
    appId: "1:1066909315315:web:fca26bfe23f9cf05ab0786",
    measurementId: "G-9CC3G4JEND"
      
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error ) {
            console.log(error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;