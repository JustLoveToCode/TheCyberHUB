// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { addDoc,collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your Web App's Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc-_FCXz1-O8-L2fu8ZiC-Juwkrs-XfF0",
  authDomain: "netflix-clone-16ede.firebaseapp.com",
  projectId: "netflix-clone-16ede",
  storageBucket: "netflix-clone-16ede.appspot.com",
  messagingSenderId: "871630555236",
  appId: "1:871630555236:web:fad448badc7997457fb771"
};

// Initialize Firebase Authentication
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// The User Sign Up Functionality have been Created
const signup = async(name, email, password)=>{
// Using the try and catch method here
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        // We will find the user property
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))

    }
}

// The User login have been Created
const login = async (email, password)=>{
// Using the try and catch method
    try{
        await signInWithEmailAndPassword(auth, email, password);
        alert(error);
    }
    catch(error){
        console.log(error);
        // Using the split method in JavaScript
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

// The logout Functionality have been Created
const logout = () => {
    signOut(auth);
}

export {auth, db, login, logout, signup};
