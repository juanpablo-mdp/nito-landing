import CookieBanner from './CookieBanner';

function App() {


  return (
    <>
      <header>
        <div className="logo-container">
          <img src="/logo.jpg" className="logo" alt="Nito Logo" />
          <span>Nito</span>
        </div>
        <nav>
          <a href="https://presupuestos.nitoapp.online" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Nito Presupuestos</a>
          <a href="https://socios.nitoapp.online" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Nito Socios</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Potencia tu negocio independiente con herramientas simples</h1>

          <div className="hero-split">
            <div className="solution-card hero-card-blue">
              <div style={{ marginBottom: '1.5rem', width: '48px', height: '48px', color: '#3b82f6' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <span className="tag">Nito Presupuestos</span>
              <h2>Para Oficios y Profesionales</h2>
              <p>Crea presupuestos PDF profesionales en segundos y cierra más trabajos.</p>
              <a href="https://presupuestos.nitoapp.online" target="_blank" rel="noopener noreferrer" className="btn-card">
                Ir a Nito Presupuestos
              </a>
            </div>

            <div className="solution-card hero-card-orange">
              <div style={{ marginBottom: '1.5rem', width: '48px', height: '48px', color: '#f97316' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <span className="tag">Nito Socios</span>
              <h2>Para Gimnasios y Profes</h2>
              <p>Gestiona alumnos, cobros y asistencias sin usar Excel.</p>
              <a href="https://socios.nitoapp.online" target="_blank" rel="noopener noreferrer" className="btn-card">
                Ir a Nito Socios
              </a>
            </div>
          </div>
        </section>

        <section id="solutions" className="solutions">
          <div className="solution-card presupuestos">
            <span className="tag">Para Profesionales Independientes</span>
            <h2>App para hacer Presupuestos en PDF</h2>
            <p>Potenciá tu imagen como profesional con nuestro <strong>generador de presupuestos PDF</strong>. La mejor <strong>app para gasistas / electricistas / técnicos</strong> que quieren crear y enviar cotizaciones impecables en minutos.</p>
            <a href="https://presupuestos.nitoapp.online" target="_blank" rel="noopener noreferrer" className="btn-card">Conocer más</a>
          </div>

          <div className="solution-card socios">
            <span className="tag">Para Gimnasios y Clubes</span>
            <h2>Software para Gimnasios y Profes</h2>
            <p>Si buscás un <strong>sistema para gimnasios gratis</strong> para probar, esta es tu solución. Llevá el <strong>control de asistencia alumnos</strong> y olvidate de los deudores ordenando todo desde un solo lugar.</p>
            <a href="https://socios.nitoapp.online" target="_blank" rel="noopener noreferrer" className="btn-card">Conocer más</a>
          </div>

          <div className="solution-card next">
            <span className="tag">En Desarrollo</span>
            <h3>¿Qué problema te resolvemos hoy?</h3>
            <p>Seguimos creando herramientas simples para automatizar tu día a día. ¿Tenés alguna tarea administrativa que te vuelva loco?</p>
            <a href="https://wa.me/5491155144268?text=Hola,%20tengo%20una%20idea%20para%20Nito" target="_blank" rel="noopener noreferrer" className="btn-card">Contame tu idea</a>
          </div>
        </section>

        <section className="trust-section">
          <h2>Control de Cuotas y Vencimientos</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>✅ Hablamos tu idioma</h3>
              <p>Nada de tecnicismos incomprensibles. Si sabés usar WhatsApp, sabés usar Nito para gestionar todo.</p>
            </div>
            <div className="benefit-item">
              <h3>✅ A tu medida</h3>
              <p>Herramientas que van directo al grano. Nada de interfaces complicadas, solo lo que tu negocio necesita.</p>
            </div>
            <div className="benefit-item">
              <h3>✅ Soporte local</h3>
              <p>Desarrollado en <strong>Mar del Plata</strong>. Hablás conmigo directamente para resolver tus dudas rápido.</p>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <h2>Empezá a simplificar tu negocio hoy.</h2>
          <a href="https://wa.me/5491155144268?text=Hola,%20vi%20la%20web%20de%20Nito%20y%20me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20pueden%20ayudar%20a%20mi%20negocio" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Hablar con un asesor
          </a>
        </section>
      </main>

      <footer>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <a
            href="/legales/politica_privacidad.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9em' }}
          >
            Política de Privacidad
          </a>
          <a
            href="/legales/terminos_condiciones.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9em' }}
          >
            Términos y Condiciones
          </a>
        </div>
        <p style={{ fontSize: '0.9em', color: 'rgba(255,255,255,0.4)' }}>
          © {new Date().getFullYear()} Nito App. Todos los derechos reservados.
        </p>
      </footer>
      <CookieBanner />
    </>
  )
}

export default App
