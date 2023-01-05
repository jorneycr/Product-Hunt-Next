import { useEffect, useState } from "react";
import { BreakpointProvider } from "react-socks";
import firebase, { FirebaseContext } from "../firebase";

export default function App({ Component, pageProps }) {
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
      }}
    >
      <BreakpointProvider>
        <Component {...pageProps} />
      </BreakpointProvider>
    </FirebaseContext.Provider>
  );
}
