import { useEffect, useState } from "react";
import { BreakpointProvider } from "react-socks";
import firebase, { FirebaseContext } from "../firebase";
import useAutenticacion from "../hooks/useAutenticacion";

export default function App({ Component, pageProps }) {
  const usuario = useAutenticacion();
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        usuario,
      }}
    >
      <BreakpointProvider>
        <Component {...pageProps} />
      </BreakpointProvider>
    </FirebaseContext.Provider>
  );
}
