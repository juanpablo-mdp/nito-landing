import { useState, useEffect } from 'react';
import { NitoLanding } from './NitoLanding';
import { PresupuestosLanding } from './PresupuestosLanding';
import { SociosLanding } from './SociosLanding';

function App() {
  const [hostname, setHostname] = useState(window.location.hostname);

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

  if (hostname.startsWith('socios.')) {
    return <SociosLanding />;
  }

  if (hostname.startsWith('presupuestos.')) {
    return <PresupuestosLanding />;
  }

  // Fallback to Nito general landing page
  return <NitoLanding />;
}

export default App;
