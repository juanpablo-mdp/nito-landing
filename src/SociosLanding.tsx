import CookieBanner from './CookieBanner';

export function SociosLanding() {
    return (
        <>
            <header>
                <div className="logo-container">
                    <img src="/logo.jpg" className="logo" alt="Nito Logo" />
                    <span>Nito Socios</span>
                </div>
                <nav>
                    <a href="https://socios.nitoapp.online/login" className="btn btn-primary btn-sm">Ingresar a la App</a>
                </nav>
            </header>

            <main>
                <section className="hero">
                    <h1>Tus cobranzas y alumnos al día, en un solo lugar</h1>

                    <div className="hero-split">
                        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '2rem' }}>
                                Olvidate del Excel y los mensajes manuales. Gestioná alumnos, cobros y asistencias directamente desde donde estés. Diseñado para gimnasios y profes organizados.
                            </p>
                            <a href="https://socios.nitoapp.online/app" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                Hacer una prueba gratis
                            </a>
                        </div>
                    </div>
                </section>

                <section id="solutions" className="solutions">
                    <div className="solution-card socios" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="tag">Para Gimnasios y Clubes</span>
                        <h2>Software para Gimnasios y Profes</h2>
                        <p>Si buscás un <strong>sistema para gimnasios gratis</strong> para empezar, esta es tu solución. Llevá el <strong>control de asistencia de alumnos</strong> y olvidate de los deudores ordenando todo desde un solo lugar.</p>
                    </div>
                </section>

                <section className="trust-section">
                    <h2>Simplificá tu día a día</h2>
                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <h3>✅ Avisos de WhatsApp</h3>
                            <p>Envío rápido de recordatorios automatizables a los alumnos que tienen la cuota vencida sin complicaciones.</p>
                        </div>
                        <div className="benefit-item">
                            <h3>✅ Control de Asistencias</h3>
                            <p>Llevá el registro exacto de las clases y cupos disponibles de cada turno en tu celular.</p>
                        </div>
                        <div className="benefit-item">
                            <h3>✅ Cuentas Claras</h3>
                            <p>Mirá rápidamente quién pagó, cuánto ingresó en el mes y qué tenés pendiente por cobrar.</p>
                        </div>
                    </div>
                </section>

                <section className="closing-section">
                    <h2>Empezá a simplificar tu negocio hoy.</h2>
                    <a href="https://wa.me/5491155144268?text=Hola,%20vi%20la%20web%20de%20Nito%20Socios%20y%20me%20gustar%C3%ADa%20hacer%20una%20consulta" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Hablar con un asesor
                    </a>
                </section>
            </main>

            <footer>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                    <a href="/legales/politica_privacidad.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9em' }}>Política de Privacidad</a>
                    <a href="/legales/terminos_condiciones.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9em' }}>Términos y Condiciones</a>
                </div>
                <p style={{ fontSize: '0.9em', color: 'rgba(255,255,255,0.4)' }}>
                    © {new Date().getFullYear()} Nito App. Todos los derechos reservados.
                </p>
            </footer>
            <CookieBanner />
        </>
    );
}
