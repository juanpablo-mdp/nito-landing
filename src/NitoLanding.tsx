import CookieBanner from './CookieBanner';

export function NitoLanding() {
  return (
    <div className="nito-astral-theme">
      {/* HEADER */}
      <header className="navbar-astral">
        <div className="logo-container">
          <img src="/logo.jpg" className="logo" alt="Nito Logo" />
          <span>Nito</span>
        </div>
        <div className="nav-actions">
           <a href="https://presupuestos.nitoapp.online" className="btn btn-secondary-glass btn-sm">Ingresar</a>
           <a href="#productos" className="btn btn-primary-capsule btn-sm">Empezar</a>
        </div>
      </header>
      
      <main>
        {/* HERO SECTION */}
        <section className="hero-astral text-center">
          <div className="saas-badge bounce-badge">✨ +500 profesionales automatizaron su negocio</div>
          <h1 className="hero-h1-astral">Tu negocio, por fin organizado.<br />Sin Excel ni dolores de cabeza.</h1>
          <p className="hero-subtitle">Herramientas simples y efectivas para profesionales y clubes. Cotizá en segundos, controlá tus cobros y recuperá tu tiempo.</p>
          <div className="button-group justify-center" style={{ marginTop: '2.5rem' }}>
             <a href="#productos" className="btn btn-primary-capsule btn-lg glow-primary">Conocé nuestras soluciones</a>
          </div>
        </section>

        {/* EL PROBLEMA */}
        <section className="problem-section" style={{ maxWidth: '800px', margin: '6rem auto', textAlign: 'center', padding: '0 1.5rem' }}>
           <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>¿El papel y las planillas te están frenando?</h2>
           <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>
              ¿Cansado de perder ventas por demorar en pasar un presupuesto? ¿Agotado de reclamar cuotas atrasadas por WhatsApp uno por uno? Nito es la tecnología simple que te resuelve el día a día.
           </p>
        </section>

        {/* LOS CAMINOS (PRODUCTOS CORE) */}
        <section id="productos" className="segmentation-section" style={{ marginTop: '4rem' }}>
           <div className="segmentation-grid" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
              
              {/* Presupuestos Card */}
              <div className="glass-card-deep" style={{ position: 'relative', overflow: 'hidden' }}>
                 <div className="blue-ambient-glow" style={{ top: '-10%', left: '-10%', width: '150px', height: '150px' }}></div>
                 <div className="icon-glow">📄</div>
                 <div className="saas-badge" style={{ marginBottom: '1rem', background: 'rgba(59, 130, 246, 0.15)' }}>Para Profesionales y Oficios</div>
                 <h3 style={{ fontSize: '1.8rem' }}>Nito Presupuestos</h3>
                 <p style={{ color: '#cbd5e1', fontWeight: 500, fontSize: '1.1rem', marginBottom: '1.5rem' }}>"Cotizaciones que cierran ventas."</p>
                 <ul className="benefit-list" style={{ marginTop: 0, marginBottom: '2rem', flexGrow: 1 }}>
                    <li><span className="list-icon">✅</span> <span><strong>Catálogo inteligente:</strong> Guardá tus ítems precargados.</span></li>
                    <li><span className="list-icon">✅</span> <span><strong>PDF Inmediato:</strong> Generá presupuestos con tu logo.</span></li>
                    <li><span className="list-icon">✅</span> <span><strong>WhatsApp:</strong> Enviá con 1 clic al instante.</span></li>
                 </ul>
                 <a href="https://presupuestos.nitoapp.online" className="btn btn-primary-capsule" style={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    Probar Nito Presupuestos
                 </a>
              </div>

              {/* Socios Card */}
              <div className="glass-card-deep" style={{ position: 'relative', overflow: 'hidden' }}>
                 <div className="blue-ambient-glow" style={{ top: '-10%', right: '-10%', left: 'auto', width: '150px', height: '150px', background: '#f97316' }}></div>
                 <div className="icon-glow" style={{ color: '#f97316', borderColor: 'rgba(249, 115, 22, 0.2)', background: 'rgba(249, 115, 22, 0.1)', boxShadow: '0 0 20px rgba(249, 115, 22, 0.2)' }}>🗓️</div>
                 <div className="saas-badge" style={{ marginBottom: '1rem', color: '#f97316', borderColor: 'rgba(249, 115, 22, 0.2)', background: 'rgba(249, 115, 22, 0.1)' }}>Para Clubes y Gimnasios</div>
                 <h3 style={{ fontSize: '1.8rem' }}>Nito Socios</h3>
                 <p style={{ color: '#fed7aa', fontWeight: 500, fontSize: '1.1rem', marginBottom: '1.5rem' }}>"Cobrar nunca fue tan fácil."</p>
                 <ul className="benefit-list" style={{ marginTop: 0, marginBottom: '2rem', flexGrow: 1 }}>
                    <li><span className="list-icon">✅</span> <span><strong>Gestión simple:</strong> Carga de alumnos y clientes.</span></li>
                    <li><span className="list-icon">✅</span> <span><strong>Alertas:</strong> Notificaciones de vencimiento.</span></li>
                    <li><span className="list-icon">✅</span> <span><strong>Control total:</strong> Estado de cuenta unificado.</span></li>
                 </ul>
                 <a href="https://socios.nitoapp.online" className="btn btn-secondary-glass" style={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center', borderColor: 'rgba(249, 115, 22, 0.3)', background: 'rgba(249, 115, 22, 0.1)' }}>
                    Probar Nito Socios
                 </a>
              </div>

           </div>
        </section>

        {/* POR QUE NITO */}
        <section className="features-section" style={{ marginTop: '8rem', padding: '0 1.5rem' }}>
           <h2 className="text-center mb-12">Por qué elegir Nito</h2>
           <div className="benefits-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="glass-card-deep" style={{ padding: '2rem' }}>
                 <div className="icon-glow-small">🎯</div>
                 <h3 className="mt-4">A tu medida</h3>
                 <p>Herramientas que van directo al grano, sin funciones de sobra que te confundan o no uses.</p>
              </div>
              <div className="glass-card-deep" style={{ padding: '2rem' }}>
                 <div className="icon-glow-small">🗣️</div>
                 <h3 className="mt-4">Hablamos tu idioma</h3>
                 <p>Nada de tecnicismos incomprensibles. Si sabés usar WhatsApp, sabés usar Nito perfectamente.</p>
              </div>
              <div className="glass-card-deep" style={{ padding: '2rem' }}>
                 <div className="icon-glow-small">🤝</div>
                 <h3 className="mt-4">Soporte real</h3>
                 <p>Atrás de Nito hay personas de verdad. Hablás con nosotros, no con un robot de atención.</p>
               </div>
            </div>
         </section>

         {/* NOTA DEL FUNDADOR */}
        <section className="founder-section" style={{ padding: '0 1.5rem' }}>
           <div className="founder-card glass-card-deep flex-row" style={{ maxWidth: '900px', padding: '3rem' }}>
              <div className="founder-avatar">JP</div>
              <div className="founder-text">
                 <blockquote>"Creamos Nito porque vimos a demasiados profesionales excelentes perder trabajos por pasar un presupuesto en papel desprolijo, o clubes perder ingresos por no llevar un control claro. Queremos que te enfoques en tu pasión, la administración dejala en nuestras manos."</blockquote>
                 <cite>— Juan Pablo, Creador de Nito App</cite>
              </div>
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta text-center" style={{ maxWidth: '900px', margin: '8rem auto 6rem', padding: '4rem 1.5rem' }}>
           <h2>Dejá el papel y unite a +500 usuarios hoy.</h2>
           <p className="subtitle-large" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>Simplificá tu negocio, mejorá tu imagen profesional y recuperá tu tiempo libre.</p>
           <div className="button-group justify-center">
              <a href="#productos" className="btn btn-primary-capsule btn-lg glow-primary">Crear Cuenta Gratis</a>
              <a href="https://wa.me/5491155144268?text=Hola,%20tengo%20dudas%20sobre%20Nito" target="_blank" rel="noopener noreferrer" className="btn btn-secondary-glass btn-lg">Hablar con un asesor</a>
           </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
         <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', padding: '0 1.5rem' }}>
             <a href="/legales/politica_privacidad.pdf" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
             <a href="/legales/terminos_condiciones.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
         </div>
         <p>© {new Date().getFullYear()} Nito App. Todos los derechos reservados.</p>
      </footer>
      <CookieBanner />
    </div>
  );
}
