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
          <a href="https://presupuestos.nitoapp.online" className="btn btn-secondary btn-sm">Nito Presupuestos</a>
          <a href="https://socios.nitoapp.online" className="btn btn-secondary btn-sm">Nito Socios</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Gestión de Alumnos y Presupuestos desde el Celular</h1>
          <p>
            Herramientas simples para dejar el Excel y recuperar tu tiempo. El <strong>software gestión turnos y cobros</strong> ideal para organizarte, todo diseñado desde <strong>Mar del Plata</strong> con soporte directo.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#solutions" className="btn btn-primary">
              Ver Soluciones
            </a>
          </div>
        </section>

        <section id="solutions" className="solutions">
          <div className="solution-card presupuestos">
            <span className="tag">Para Profesionales Independientes</span>
            <h2>App para hacer Presupuestos en PDF</h2>
            <p>Potenciá tu imagen como profesional con nuestro <strong>generador de presupuestos PDF</strong>. La mejor <strong>app para gasistas / electricistas / técnicos</strong> que quieren crear y enviar cotizaciones impecables en minutos.</p>
            <a href="https://presupuestos.nitoapp.online" className="btn-card">Conocer más</a>
          </div>

          <div className="solution-card socios">
            <span className="tag">Para Gimnasios y Clubes</span>
            <h2>Software para Gimnasios y Profes</h2>
            <p>Si buscás un <strong>sistema para gimnasios gratis</strong> para probar, esta es tu solución. Llevá el <strong>control de asistencia alumnos</strong> y olvidate de los deudores ordenando todo desde un solo lugar.</p>
            <a href="https://socios.nitoapp.online" className="btn-card">Conocer más</a>
          </div>

          <div className="solution-card next">
            <span className="tag">En Desarrollo</span>
            <h3>¿Qué problema te resolvemos hoy?</h3>
            <p>Seguimos creando herramientas simples para automatizar tu día a día. ¿Tenés alguna tarea administrativa que te vuelva loco?</p>
            <a href="https://wa.me/5491155144268?text=Hola,%20tengo%20una%20idea%20para%20Nito" className="btn-card">Contame tu idea</a>
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
          <a href="https://wa.me/5491155144268?text=Hola,%20vi%20la%20web%20de%20Nito%20y%20me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20pueden%20ayudar%20a%20mi%20negocio" className="btn btn-primary">
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
