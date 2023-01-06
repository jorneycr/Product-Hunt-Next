import React, { useEffect, useState } from "react";
import firebase from "../firebase";

function useAutenticacion() {
  const [usuarioAutenticado, guardarUsuarioAutenticado] = useState(null);
  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged((user) => {
      user ? guardarUsuarioAutenticado(user) : guardarUsuarioAutenticado(null);
    });
    return () => unsuscribe();
  }, []);
  return usuarioAutenticado;
}
export default useAutenticacion;
