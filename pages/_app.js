import { useEffect, useState } from "react";
import { BreakpointProvider } from "react-socks";

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <BreakpointProvider>
      <Component {...pageProps} />
    </BreakpointProvider>
  );
}
