import CookieBanner from './CookieBanner';

export function NitoLanding() {
  return (
    <div className="nito-astral-theme">
      <header className="navbar-astral">
        <div className="logo-container">
          <img src="/logo.jpg" className="logo" alt="Nito Logo" />
          <span>Nito</span>
        </div>
        <nav className="nav-links">
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#precios">Precios</a>
        </nav>
        <div className="nav-actions">
           <a href="https://presupuestos.nitoapp.online" className="btn btn-secondary-glass btn-sm">Ingresar</a>
           <a href="https://presupuestos.nitoapp.online" className="btn btn-primary-capsule btn-sm" onClick={() => { (window as any).fbq && (window as any).fbq('track', 'Lead'); }}>Comenzar Gratis</a>
        </div>
      </header>
      
      <main>
        {/* Hero */}
        <section className="hero-astral text-center">
          <div className="saas-badge bounce-badge">✨ Nuevo: Empezá a usar Nito gratis hoy. Sin tarjeta.</div>
          <h1 className="hero-h1-astral">Tu trabajo independiente, por fin organizado en un solo lugar.</h1>
          <p className="hero-subtitle">Dejá de perder tiempo con el papel y la calculadora. Cotizá en minutos y gestioná tus cobros sin planillas.</p>
          <a href="https://presupuestos.nitoapp.online" className="btn btn-primary-capsule btn-lg mt-8 glow-primary" onClick={() => { (window as any).fbq && (window as any).fbq('track', 'Lead'); }}>Comenzar Gratis Ahora</a>
          <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.75rem' }}>✓ No requiere tarjeta • ✓ Configuración en 1 minuto</p>
          <p className="social-proof">⭐ +500 profesionales ya confían en Nito.</p>
          
          <div className="mockup-container-astral">
             <div className="blue-ambient-glow"></div>
             <img src="/hero-mockup.png" alt="Nito App Platform" className="floating-mockup astral-mockup" />
          </div>
        </section>

        {/* Punto de Partida */}
        <section className="segmentation-section">
           <h2 className="text-center mb-12">Elegí tu punto de partida</h2>
           <div className="segmentation-grid">
              <div className="glass-card-deep">
                 <div className="icon-glow">📄</div>
                 <h3>Nito Presupuestos</h3>
                 <p>Cotizá en el momento y enviá PDFs por WhatsApp.</p>
                 <a href="https://presupuestos.nitoapp.online" className="btn btn-secondary-glass mt-4">Ver Presupuestos</a>
              </div>
              <div className="glass-card-deep">
                 <div className="icon-glow">🗓️</div>
                 <h3>Nito Socios</h3>
                 <p>Controlá tus cobros y vencimientos de alumnos desde tu celular.</p>
                 <a href="https://socios.nitoapp.online" className="btn btn-secondary-glass mt-4">Ver Socios</a>
              </div>
           </div>
        </section>

        {/* Features Grid */}
        <section className="features-section" id="funcionalidades">
           <h2 className="text-center mb-4">Cómo Nito hace crecer tu negocio</h2>
           <p className="text-center text-muted mb-12" style={{ color: '#94a3b8' }}>Herramientas diseñadas para profesionales en movimiento.</p>
           <div className="benefits-grid">
              <div className="glass-card-deep">
                 <div className="icon-glow-small">⚡️</div>
                 <h3 className="mt-4">Cotizá en el momento</h3>
                 <p>Guardá manos de obra y armá el costo final frente al cliente sin equivocaciones.</p>
              </div>
              <div className="glass-card-deep">
                 <div className="icon-glow-small">🎨</div>
                 <h3 className="mt-4">Imagen que vende más</h3>
                 <p>Enviá presupuestos detallados en PDF impecables con tu logo comercial.</p>
              </div>
              <div className="glass-card-deep">
                 <div className="icon-glow-small">📱</div>
                 <h3 className="mt-4">Chau papel</h3>
                 <p>Llevá el historial de todos tus trabajos en tu bolsillo en una app 100% móvil.</p>
               </div>
            </div>
         </section>

         {/* Detalle 1: Nito Presupuestos */}
         <section className="detail-section mt-16">
           <div className="detail-grid">
             <div className="detail-image glass-card-deep">
               <div className="blue-ambient-glow"></div>
               <img src="/hero-mockup.png" alt="Nito Presupuestos" className="astral-mockup" style={{ width: '100%', objectFit: 'cover' }} />
             </div>
             <div className="detail-text">
               <div className="saas-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Nito Presupuestos</div>
               <h2 className="mb-4" style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>Cotizá como un profesional, estés donde estés</h2>
               <ul className="benefit-list">
                 <li><span className="list-icon">📝</span> <span><strong>Catálogo inteligente:</strong> Guardá tus ítems pre-cargados.</span></li>
                 <li><span className="list-icon">📄</span> <span><strong>PDF Automático:</strong> Generá presupuestos con tu logo al instante.</span></li>
                 <li><span className="list-icon">🚀</span> <span><strong>Envío directo:</strong> Compartí por WhatsApp o email en 1 clic.</span></li>
               </ul>
               <a href="https://presupuestos.nitoapp.online" className="btn btn-secondary-glass mt-4">Probar Nito Presupuestos</a>
             </div>
           </div>
         </section>

         {/* Detalle 2: Nito Socios */}
         <section className="detail-section mt-16 pb-16">
           <div className="detail-grid reverse-grid">
             <div className="detail-text">
               <div className="saas-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Nito Socios</div>
               <h2 className="mb-4" style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>Chau al cuaderno y al Excel. Hola orden.</h2>
               <ul className="benefit-list">
                 <li><span className="list-icon">👥</span> <span><strong>Gestión simple:</strong> Carga rápida de alumnos y clientes.</span></li>
                 <li><span className="list-icon">🔔</span> <span><strong>Alertas automáticas:</strong> Notificaciones de vencimiento de pases/abonos.</span></li>
                 <li><span className="list-icon">💰</span> <span><strong>Control total:</strong> Estado de cuenta unificado para saber quién pagó.</span></li>
               </ul>
               <a href="https://socios.nitoapp.online" className="btn btn-secondary-glass mt-4">Probar Nito Socios</a>
             </div>
             <div className="detail-image glass-card-deep">
               <div className="blue-ambient-glow"></div>
               <img src="/socios-mockup.png" alt="Dashboard de gestión de Nito Socios" className="astral-mockup" style={{ width: '100%', objectFit: 'cover' }} loading="lazy" />
             </div>
           </div>
         </section>

         {/* Founder Note */}
        <section className="founder-section">
           <div className="founder-card glass-card-deep flex-row">
              <div className="founder-avatar">JP</div>
              <div className="founder-text">
                 <blockquote>"Creamos Nito porque vimos a demasiados excelentes profesionales perder trabajos por demorar en pasar un presupuesto o pasarlo en un papel desprolijo."</blockquote>
                 <cite>— Juan Pablo, Creador de Nito App</cite>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta text-center" id="precios">
           <h2>Dejá el papel y unite a +500 profesionales.</h2>
           <p className="subtitle-large">Mejorá tu imagen y cerrá más trabajos desde hoy mismo.</p>
           <div className="button-group justify-center">
              <a href="https://presupuestos.nitoapp.online" className="btn btn-primary-capsule btn-lg glow-primary" onClick={() => { (window as any).fbq && (window as any).fbq('track', 'CompleteRegistration'); }}>Crear Mi Cuenta Gratis</a>
              <a href="https://wa.me/5491155144268?text=Hola,%20tengo%20dudas%20sobre%20Nito" target="_blank" rel="noopener noreferrer" className="btn btn-secondary-glass btn-lg">Hablar con un asesor</a>
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
