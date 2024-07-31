// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyQ8PHiyuogd7Eeg_XEKPk9UByIcbLTnU",
  authDomain: "pantrytracker-38483.firebaseapp.com",
  projectId: "pantrytracker-38483",
  storageBucket: "pantrytracker-38483.appspot.com",
  messagingSenderId: "242338318925",
  appId: "1:242338318925:web:e5363cddbc228b63fe6a04"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore };