import CookieBanner from './CookieBanner';

export function NitoLanding() {
  return (
    <div className="nito-astral-theme">
      <header className="navbar-astral">
        <div className="logo-container">
          <img src="/logo.jpg" className="logo" alt="Nito Logo" />
          <span>Nito</span>
        </div>
      </header>
      
      <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <section className="hero-astral text-center" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
          <h1 className="hero-h1-astral" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>Elegí tu herramienta.</h1>
          <p className="hero-subtitle">Soluciones tecnológicas simples para profesionales y clubes.</p>
        </section>

        <section className="segmentation-section" style={{ marginTop: '3rem' }}>
           <div className="segmentation-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
              
              {/* Presupuestos Card */}
              <div className="glass-card-deep" style={{ position: 'relative', overflow: 'hidden' }}>
                 <div className="blue-ambient-glow" style={{ top: '-10%', left: '-10%', width: '150px', height: '150px' }}></div>
                 <div className="icon-glow">📄</div>
                 <div className="saas-badge" style={{ marginBottom: '1rem', background: 'rgba(59, 130, 246, 0.15)' }}>Para Profesionales Independientes</div>
                 <h3 style={{ fontSize: '1.8rem' }}>Nito Presupuestos</h3>
                 <p style={{ marginBottom: '2rem', flexGrow: 1 }}>Cotizá en el momento, generá PDFs impecables con tu logo y envialos por WhatsApp al instante. Chau papel y Excel.</p>
                 <a href="https://presupuestos.nitoapp.online" className="btn btn-primary-capsule" style={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    Ir a Nito Presupuestos
                 </a>
              </div>

              {/* Socios Card */}
              <div className="glass-card-deep" style={{ position: 'relative', overflow: 'hidden' }}>
                 <div className="blue-ambient-glow" style={{ top: '-10%', right: '-10%', left: 'auto', width: '150px', height: '150px', background: '#f97316' }}></div>
                 <div className="icon-glow" style={{ color: '#f97316', borderColor: 'rgba(249, 115, 22, 0.2)', background: 'rgba(249, 115, 22, 0.1)', boxShadow: '0 0 20px rgba(249, 115, 22, 0.2)' }}>🗓️</div>
                 <div className="saas-badge" style={{ marginBottom: '1rem', color: '#f97316', borderColor: 'rgba(249, 115, 22, 0.2)', background: 'rgba(249, 115, 22, 0.1)' }}>Para Clubes y Gimnasios</div>
                 <h3 style={{ fontSize: '1.8rem' }}>Nito Socios</h3>
                 <p style={{ marginBottom: '2rem', flexGrow: 1 }}>Gestioná alumnos, controlá cobros y vencimientos, y mandá recordatorios automáticos desde tu celular.</p>
                 <a href="https://socios.nitoapp.online" className="btn btn-secondary-glass" style={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center', borderColor: 'rgba(249, 115, 22, 0.3)', background: 'rgba(249, 115, 22, 0.1)' }}>
                    Ir a Nito Socios
                 </a>
              </div>

           </div>
        </section>
      </main>

      <footer>
         <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
             <a href="/legales/politica_privacidad.pdf" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
             <a href="/legales/terminos_condiciones.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
         </div>
         <p>© {new Date().getFullYear()} Nito App. Todos los derechos reservados.</p>
      </footer>
      <CookieBanner />
    </div>
  );
}
