import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCYZZEqeKoXoCbsZL0llWNcx1iquUJ0nec",
  authDomain: "bishan-travel-agency.firebaseapp.com",
  projectId: "bishan-travel-agency",
  storageBucket: "bishan-travel-agency.appspot.com",
  messagingSenderId: "742622748486",
  appId: "1:742622748486:web:b26754e94c9b5a489a8f47",
  measurementId: "G-LXM7ESLLTH"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
