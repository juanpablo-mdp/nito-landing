import Logotipo from '/logo.jpeg';

function App() {
  const appUrl = "https://presupuestos.nitoapp.online";

  return (
    <>
      <header>
        <div className="logo-container">
          <img src={Logotipo} className="logo" alt="Nito Logo" />
          <span>Nito</span>
        </div>
        <nav>
          <a href={appUrl} className="btn btn-secondary">Iniciar Sesión</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Presupuestos que<br />cierran ventas.</h1>
          <p>
            Gestiona, envía, cobra y organiza tu negocio un 500% más rápido.
            La herramienta definitiva para emprendedores que valoran su tiempo.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href={appUrl} className="btn btn-primary">
              Comenzar Gratis
            </a>
            <a href="#features" className="btn btn-secondary">
              Saber más
            </a>
          </div>
        </section>

        <section id="features" className="features">
          <div className="feature-card">
            <span className="feature-icon">🚀</span>
            <h3>Profesionalismo Total</h3>
            <p>Genera presupuestos en minutos con un diseño impecable que impresionará a tus clientes desde el primer momento.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📦</span>
            <h3>Catálogo de Productos</h3>
            <p>Guarda tus productos y servicios recurrentes para añadirlos a tus cotizaciones con un solo clic. Ahorra tiempo en cada envío.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📈</span>
            <h3>Seguimiento en Tiempo Real</h3>
            <p>Conoce exactamente cuándo tu cliente ve el presupuesto y si lo aprueba o rechaza. Toma decisiones basadas en datos.</p>
          </div>
        </section>
      </main>

      <footer>
        <p style={{ fontSize: '0.9em', color: 'rgba(255,255,255,0.4)' }}>
          © {new Date().getFullYear()} Nito App. Todos los derechos reservados.
        </p>
      </footer>
    </>
  )
}

export default App
