import CookieBanner from './CookieBanner';

export function PresupuestosLanding() {
    return (
        <>
            <header>
                <div className="logo-container">
                    <img src="/logo.jpg" className="logo" alt="Nito Logo" />
                    <span>Nito Presupuestos</span>
                </div>
                <nav>
                    {/* El botón de Ingresar lo redirige a presupuestos.nitoapp.online */}
                    <a href="https://presupuestos.nitoapp.online" className="btn btn-primary btn-sm">Ingresar</a>
                </nav>
            </header>

            <main>
                <section className="hero">
                    <h1>Tus presupuestos profesionalizados en segundos</h1>

                    <div className="hero-split">
                        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '2rem' }}>
                                Olvidate del cuaderno, los borradores y los cálculos manuales. Diseñado especialmente para plomeros, gasistas, electricistas y técnicos que quieren cerrar más trabajos dando una imagen profesional.
                            </p>
                            <a href="https://presupuestos.nitoapp.online" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                Crear mi primer presupuesto
                            </a>
                        </div>
                    </div>
                </section>

                <section id="solutions" className="solutions">
                    <div className="solution-card presupuestos" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="tag">Para Plomeros, Gasistas y Electricistas</span>
                        <h2>App para hacer Presupuestos en PDF</h2>
                        <p>Potenciá tu imagen como profesional con nuestro <strong>generador de presupuestos PDF</strong>. La mejor app para crear y enviar cotizaciones impecables directo por WhatsApp en minutos.</p>
                    </div>
                </section>

                <section className="trust-section">
                    <h2>Simplificá tu trabajo diario</h2>
                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <h3>✅ Chau Cuaderno</h3>
                            <p>Llevá el control de todos tus presupuestos desde tu celular. Encontrá rápido lo que cotizaste hace meses.</p>
                        </div>
                        <div className="benefit-item">
                            <h3>✅ Imagen Profesional</h3>
                            <p>Enviá presupuestos detallados en PDF con tu logo e información de contacto que dan confianza a tus clientes.</p>
                        </div>
                        <div className="benefit-item">
                            <h3>✅ Calculadora Integrada</h3>
                            <p>Sumá materiales y mano de obra sin equivocarte. Guarda tus precios frecuentes para usar en el próximo trabajo.</p>
                        </div>
                    </div>
                </section>

                <section className="closing-section">
                    <h2>Empezá a simplificar tu negocio hoy.</h2>
                    <a href="https://wa.me/5491155144268?text=Hola,%20vi%20la%20web%20de%20Nito%20Presupuestos%20y%20me%20gustar%C3%ADa%20hacer%20una%20consulta" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
