import { useState, useEffect } from 'react';
import { PresupuestosLanding } from './PresupuestosLanding';
import { SociosLanding } from './SociosLanding';

function App() {
  const [hostname, setHostname] = useState(window.location.hostname);

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

  const isSocios = hostname.startsWith('socios.');

  if (isSocios) {
    return <SociosLanding />;
  }

  return <PresupuestosLanding />;
}

export default App;
