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
                    <a href="https://presupuestos.nitoapp.online" className="btn btn-secondary btn-sm">Ingresar</a>
                </nav>
            </header>

            <main>
                {/* 1. Above the Fold: Hero Section */}
                <section className="hero">
                    <div className="hero-split">
                        <div style={{ textAlign: 'left', maxWidth: '600px' }}>
                            <div className="saas-badge">
                                ✨ Nuevo: Empezá a usar Nito gratis hoy. Sin tarjeta de crédito.
                            </div>
                            <h1>Presupuestos Profesionales por WhatsApp en Menos de 1 Minuto</h1>
                            <p style={{ marginBottom: '2.5rem' }}>
                                Dejá de perder tiempo con el papel y la calculadora. Cotizá desde tu celular, enviá PDFs impecables con tu logo y cerrá más trabajos desde hoy.
                            </p>
                            <a href="https://presupuestos.nitoapp.online" className="btn btn-primary">
                                Comenzar Gratis Ahora
                            </a>
                            <p style={{ fontSize: '0.95rem', color: '#64748b', marginTop: '1.5rem', fontWeight: '500' }}>
                                ⭐ +500 plomeros, gasistas y electricistas ya confían en Nito.
                            </p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                            <img
                                src="/hero-mockup.png"
                                alt="Nito App Presupuestos UI"
                                className="floating-mockup"
                            />
                        </div>
                    </div>
                </section>

                {/* 2. Below the Fold: Beneficios Concretos */}
                <section style={{ marginTop: '8rem', width: '100%' }}>
                    <h2 style={{ textAlign: 'center' }}>Cómo Nito hace crecer tu negocio</h2>
                    <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '3rem' }}>
                        Herramientas diseñadas específicamente para profesionales de oficios.
                    </p>
                    <div className="benefits-grid">
                        <div className="glass-card benefit-item">
                            <h3><span>⚡️</span> Cotizá en el momento</h3>
                            <p>Guardá precios de mano de obra y materiales. Seleccionalos y armá el costo final frente al cliente sin equivocarte en los números.</p>
                        </div>
                        <div className="glass-card benefit-item">
                            <h3><span>🎨</span> Imagen que vende más</h3>
                            <p>Enviá cotizaciones detalladas en PDF con el logo de tu negocio. Ganá la confianza de tus clientes al instante al verte más profesional.</p>
                        </div>
                        <div className="glass-card benefit-item">
                            <h3><span>📱</span> Chau papel, todo en tu celular</h3>
                            <p>Llevá el historial de todos tus trabajos en tu bolsillo organizados por estado (Pendiente, Aprobado). No vuelvas a perder un presupuesto.</p>
                        </div>
                    </div>
                </section>

                {/* 3. Humanización: Nota del Fundador */}
                <section style={{ marginTop: '8rem', width: '100%', maxWidth: '800px', margin: '8rem auto 0' }}>
                    <div className="glass-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0, boxShadow: '0 0 20px rgba(59,130,246,0.3)', color: 'white' }}>
                            JP
                        </div>
                        <div>
                            <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: '#e2e8f0', marginBottom: '1rem' }}>
                                "Creamos Nito porque vimos a demasiados excelentes profesionales perder trabajos por demorar en pasar un presupuesto o pasarlo en un papel desprolijo. Nuestra misión es darte las herramientas de una gran empresa, directamente en tu celular."
                            </p>
                            <p style={{ color: '#60a5fa', fontWeight: '600', margin: 0, fontSize: '1rem' }}>— Juan Pablo, Creador de Nito App</p>
                        </div>
                    </div>
                </section>

                {/* 4. Manejo de Objeciones: FAQ */}
                <section className="faq-section">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Preguntas Frecuentes</h2>

                    <div className="glass-card faq-card">
                        <h3>¿Es fácil de usar si no soy bueno con la tecnología?</h3>
                        <p>Sí, está pensada para ser tan fácil de usar como mandar un mensaje de WhatsApp. No necesitás conocimientos técnicos para crear tu primer presupuesto.</p>
                    </div>

                    <div className="glass-card faq-card">
                        <h3>¿Se borran mis datos si cambio o pierdo el celular?</h3>
                        <p>No, toda tu información queda guardada de forma segura en la nube. Solo ingresás con tu mail en cualquier dispositivo (celular o computadora) y recuperás todo al instante.</p>
                    </div>

                    <div className="glass-card faq-card">
                        <h3>¿Tiene algún costo?</h3>
                        <p>Podés registrarte y empezar a usarla de forma completamente gratis para probarla sin ningún compromiso ni solicitarte tarjeta de crédito.</p>
                    </div>
                </section>

                {/* 5. Second CTA Final */}
                <section style={{ textAlign: 'center', padding: '4rem 0 2rem' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>Dejá el papel y unite a +500 profesionales.</h2>
                    <p style={{ marginBottom: '3rem', fontSize: '1.25rem' }}>Mejorá tu imagen y cerrá más trabajos desde hoy mismo.</p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://presupuestos.nitoapp.online" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                            Crear Mi Cuenta Gratis
                        </a>
                        <a href="https://wa.me/5491155144268?text=Hola,%20tengo%20dudas%20sobre%20Nito%20Presupuestos" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '1rem 2.5rem' }}>
                            Hablar con un asesor
                        </a>
                    </div>
                </section>
            </main>

            <footer>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                    <a href="/legales/politica_privacidad.pdf" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
                    <a href="/legales/terminos_condiciones.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
                </div>
                <p>
                    © {new Date().getFullYear()} Nito App. Todos los derechos reservados.
                </p>
            </footer>
            <CookieBanner />
        </>
    );
}
