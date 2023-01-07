import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth();
    this.db = getFirestore(app);
  }

  async registrar(nombre, email, password) {
    const nuevoUsuario = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    return await updateProfile(nuevoUsuario.user, {
      displayName: nombre,
    });
  }

  async login(email, password) {
    const account = await signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    return !account;
  }

  async cerrarSeccion() {
    await signOut(this.auth);
  }
}

const firebase = new Firebase();

export default firebase;
