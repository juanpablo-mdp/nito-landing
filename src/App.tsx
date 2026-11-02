import { NitoLanding } from './NitoLanding';
import { LegalPage } from './LegalPage';

export default function App({ path = typeof window === 'undefined' ? '/' : window.location.pathname }: { path?: string }) {
  const normalized = path.replace(/\/$/, '');
  if (normalized === '/legales/terminos-y-condiciones') return <LegalPage />;
  if (normalized === '/legales/politica-de-privacidad') return <LegalPage privacy />;
  return <NitoLanding />;
}
