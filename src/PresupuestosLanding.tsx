import CookieBanner from './CookieBanner';

export function PresupuestosLanding() {
    return (
        <>
            {/* Pre-Header: Bajo nivel de fricción */}
            <div style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem', textAlign: 'center', fontSize: '0.9rem', fontWeight: '500' }}>
                Empezá a usar Nito gratis hoy. Sin tarjeta de crédito.
            </div>

            <header>
                <div className="logo-container">
                    <img src="/logo.jpg" className="logo" alt="Nito Logo" />
                    <span>Nito Presupuestos</span>
                </div>
                <nav>
                    <a href="https://presupuestos.nitoapp.online" className="btn btn-primary btn-sm">Ingresar</a>
                </nav>
            </header>

            <main>
                {/* 1. Above the Fold: Hero Section */}
                <section className="hero" style={{ paddingBottom: '3rem' }}>
                    <div className="hero-split" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ textAlign: 'left', maxWidth: '600px' }}>
                            <h1 style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }}>
                                Presupuestos Profesionales por WhatsApp en Menos de 1 Minuto
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '2rem', lineHeight: '1.6' }}>
                                Dejá de perder tiempo con el papel y la calculadora. Cotizá desde tu celular, enviá PDFs impecables con tu logo y cerrá más trabajos desde hoy.
                            </p>
                            <a href="https://presupuestos.nitoapp.online" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                Comenzar Gratis Ahora
                            </a>
                            <p style={{ fontSize: '0.95rem', color: '#94a3b8', marginTop: '1.5rem', fontWeight: '500' }}>
                                ⭐ +500 plomeros, gasistas y electricistas en Argentina ya confían en Nito.
                            </p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                            <img
                                src="/hero-mockup.png"
                                alt="Nito App Presupuestos UI"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '650px',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.5))'
                                }}
                            />
                        </div>
                    </div>
                </section>

                {/* 2. Below the Fold: Beneficios Concretos */}
                <section className="trust-section" style={{ marginTop: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Cómo Nito hace crecer tu negocio</h2>
                    <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '4rem', fontSize: '1.1rem' }}>
                        Herramientas diseñadas específicamente para profesionales de oficios.
                    </p>
                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <h3><span style={{ color: '#22c55e', fontSize: '1.5rem' }}>✓</span> Cotizá en el momento</h3>
                            <p>Guardá precios de mano de obra y materiales. Seleccionalos y armá el costo final frente al cliente sin equivocarte en los números.</p>
                        </div>
                        <div className="benefit-item">
                            <h3><span style={{ color: '#22c55e', fontSize: '1.5rem' }}>✓</span> Imagen que vende más</h3>
                            <p>Enviá cotizaciones detalladas en PDF con el logo de tu negocio. Ganá la confianza de tus clientes al instante al verte más profesional.</p>
                        </div>
                        <div className="benefit-item">
                            <h3><span style={{ color: '#22c55e', fontSize: '1.5rem' }}>✓</span> Chau papel, todo en tu celular</h3>
                            <p>Llevá el historial de todos tus trabajos en tu bolsillo organizados por estado (Pendiente, Aprobado). No vuelvas a perder un presupuesto.</p>
                        </div>
                    </div>
                </section>

                {/* 3. Manejo de Objeciones: FAQ */}
                <section className="faq-section" style={{ padding: '6rem 5% 4rem', width: '100%', maxWidth: '1000px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem', color: 'white' }}>Preguntas Frecuentes</h2>

                    <div style={{ marginBottom: '1.5rem', backgroundColor: '#0f172a', padding: '2rem', borderRadius: '12px', border: '1px solid #334155', textAlign: 'left' }}>
                        <h3 style={{ color: '#38bdf8', marginBottom: '0.75rem', fontSize: '1.25rem' }}>¿Es fácil de usar si no soy bueno con la tecnología?</h3>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>Sí, está pensada para ser tan fácil de usar como mandar un mensaje de WhatsApp. No necesitás conocimientos técnicos para crear tu primer presupuesto.</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem', backgroundColor: '#0f172a', padding: '2rem', borderRadius: '12px', border: '1px solid #334155', textAlign: 'left' }}>
                        <h3 style={{ color: '#38bdf8', marginBottom: '0.75rem', fontSize: '1.25rem' }}>¿Se borran mis datos si cambio o pierdo el celular?</h3>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>No, toda tu información queda guardada de forma segura en la nube. Solo ingresás con tu mail en cualquier dispositivo (celular o computadora) y recuperás todo al instante.</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem', backgroundColor: '#0f172a', padding: '2rem', borderRadius: '12px', border: '1px solid #334155', textAlign: 'left' }}>
                        <h3 style={{ color: '#38bdf8', marginBottom: '0.75rem', fontSize: '1.25rem' }}>¿Tiene algún costo?</h3>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>Podés registrarte y empezar a usarla de forma completamente gratis para probarla sin ningún compromiso ni solicitarte tarjeta de crédito.</p>
                    </div>
                </section>

                {/* 4. Humanización: Nota del Fundador */}
                <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'left', backgroundColor: 'rgba(30, 58, 138, 0.3)', borderRadius: '24px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0 }}>
                            JP
                        </div>
                        <div>
                            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#e2e8f0', lineHeight: '1.6', marginBottom: '1rem' }}>
                                "Creamos Nito porque vimos a demasiados excelentes profesionales perder trabajos por demorar en pasar un presupuesto o pasarlo en un papel desprolijo. Nuestra misión es darte las herramientas de una gran empresa, directamente en tu celular."
                            </p>
                            <p style={{ color: '#94a3b8', fontWeight: '600', margin: 0 }}>— Juan Pablo, Creador de Nito App</p>
                        </div>
                    </div>
                </section>

                {/* 5. Second CTA Final */}
                <section className="closing-section" style={{ textAlign: 'center', padding: '6rem 5%' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Dejá el papel y unite a +500 profesionales.</h2>
                    <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '3rem' }}>Mejorá tu imagen y cerrá más trabajos desde hoy mismo.</p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://presupuestos.nitoapp.online" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
                            Crear Mi Cuenta Gratis
                        </a>
                        <a href="https://wa.me/5491155144268?text=Hola,%20tengo%20dudas%20sobre%20Nito%20Presupuestos" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.9rem 2rem', fontSize: '1.1rem', backgroundColor: 'transparent', border: '2px solid #38bdf8', color: '#38bdf8', borderRadius: '99px', cursor: 'pointer', textDecoration: 'none', fontWeight: 'bold' }}>
                            Hablar con un asesor
                        </a>
                    </div>
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
