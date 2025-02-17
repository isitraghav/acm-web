import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCNt_dQwd13tSAcaWyWpqXCuMnoqmovi4",
  authDomain: "acmbmu.firebaseapp.com",
  projectId: "acmbmu",
  storageBucket: "acmbmu.firebasestorage.app",
  messagingSenderId: "304802468602",
  appId: "1:304802468602:web:974a75abfc6e34c337ef43",
  measurementId: "G-W0NZGF1JCZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

import { create } from "zustand";

const authStore = create((set) => ({
  value: auth.currentUser,
  setValue: (newValue) => set({ value: newValue }),
}));

onAuthStateChanged(auth, (user) => {
  console.log("User Info:", user);
  if (user) {
    authStore.setState({ value: user });
  }
});

export { auth, provider, signInWithPopup, signOut, authStore, db };
