import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyC56dQFMU3Jg4C_mdtzjHSPN4nOe0FnV4o",
    authDomain: "phone-6aa72.firebaseapp.com",
    projectId: "phone-6aa72",
    storageBucket: "phone-6aa72.appspot.com",
    messagingSenderId: "963576307016",
    appId: "1:963576307016:web:9049206d07cbe4a272e77d"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user); 
        return result.user;
      })
      .catch((error) => {
        console.error("Error during Google sign-in: ", error);
      });
      
    
};

const signOutUser = () => {
    return signOut(auth)
        .then(() => {
            console.log("User signed out successfully.");
        })
        .catch((error) => {
            console.error("Error signing out: ", error);
        });
};

export { auth, storage, signInWithGoogle,signOutUser };
export default db;