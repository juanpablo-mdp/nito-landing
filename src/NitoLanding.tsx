import CookieBanner from './CookieBanner';

export function NitoLanding() {
  const trackLead = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  };

  const handleWhatsAppDemo = () => {
    const message = encodeURIComponent('Hola Tomás, te recordamos que tenés disponible el pago de la cuota de este mes. Podés abonar con este link: https://mpago.la/ejemplo ¡Muchas gracias!');
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface-card/90 backdrop-blur-md text-primary sticky top-0 z-50 shadow-sm border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
          {/* Logo Branding */}
          <a className="flex items-center gap-2 text-primary font-bold tracking-tight" href="#">
            <img
              alt="Nito Socios"
              className="w-8 h-8 rounded-lg object-contain shadow-sm"
              src="/landing-assets/logo.jpeg"
            />
            <span className="flex items-baseline tracking-tight">
              <span className="text-trust-blue font-extrabold text-2xl">nito</span>
              <span className="text-on-surface font-semibold text-lg ml-1.5 opacity-80">Socios</span>
            </span>
          </a>

          {/* Desktop Nav Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-on-surface-variant hover:text-primary font-medium transition-colors duration-150 text-sm" href="#funcionalidades">
              Funcionalidades
            </a>
            <a className="text-on-surface-variant hover:text-primary font-medium transition-colors duration-150 text-sm" href="#casos-de-exito">
              Casos de Éxito
            </a>
            <a className="text-primary font-semibold hover:text-trust-blue transition-colors duration-150 text-sm" href="#precios">
              Precios
            </a>
            <a className="text-on-surface-variant hover:text-primary font-medium transition-colors duration-150 text-sm" href="#preguntas-frecuentes">
              Preguntas Frecuentes
            </a>
          </nav>

          {/* Action Cluster */}
          <div className="flex items-center gap-2 md:gap-4">
            <a
              className="text-on-surface font-medium hover:text-primary text-sm px-3 py-2 rounded-lg transition-colors"
              href="https://socios.nitoapp.online/login"
            >
              Iniciar Sesión
            </a>
            <a
              className="bg-primary-container hover:bg-trust-blue text-on-primary text-sm px-4 py-2.5 rounded-lg font-semibold shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
              href="https://socios.nitoapp.online/login"
              onClick={trackLead}
            >
              <span>Probar 30 días gratis</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Copy & Funnel CTA */}
            <div className="lg:col-span-6 space-y-6">
              {/* Social Proof Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-border-subtle shadow-sm">
                <span className="text-warning-amber text-sm leading-none">★</span>
                <span className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">
                  Confiado por más de 350 clubes y gimnasios
                </span>
              </div>

              {/* Hero Headline */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-tight md:leading-none">
                Tu gente, en marcha. <br />
                <span className="text-primary-container">Tus cuotas, bajo control.</span>
              </h1>

              {/* Body Description */}
              <p className="text-lg md:text-xl text-text-muted max-w-xl">
                Sabé exactamente quién pagó, qué cuotas están vencidas y enviá avisos cordiales por WhatsApp con un solo clic. Recuperá horas operativas y ordená tu caja hoy mismo.
              </p>

              {/* Primary & Secondary CTA Cluster */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    className="bg-primary-container hover:bg-trust-blue text-on-primary text-base font-semibold px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-all flex justify-center items-center gap-2"
                    href="https://socios.nitoapp.online/login"
                    onClick={trackLead}
                  >
                    <span>Empezar prueba gratis de 30 días</span>
                    <span className="material-symbols-outlined text-[18px]">north_east</span>
                  </a>
                  <a
                    className="bg-surface-card hover:bg-surface-container-low text-on-surface border border-border-subtle text-base font-semibold px-5 py-3.5 rounded-lg transition-all flex justify-center items-center gap-2"
                    href="#funcionalidades"
                  >
                    <span className="material-symbols-outlined text-[18px] text-text-muted">play_circle</span>
                    <span>Ver cómo funciona</span>
                  </a>
                </div>

                {/* Conversion Micro-guarantee */}
                <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-text-muted pt-2">
                  <span className="flex items-center gap-1.5 text-secondary font-medium">
                    <span className="material-symbols-outlined text-success-green text-[18px]">check_circle</span>
                    30 días gratis
                  </span>
                  <span className="flex items-center gap-1.5 text-secondary font-medium">
                    <span className="material-symbols-outlined text-success-green text-[18px]">check_circle</span>
                    Sin tarjeta requerida
                  </span>
                  <span className="flex items-center gap-1.5 text-secondary font-medium">
                    <span className="material-symbols-outlined text-success-green text-[18px]">check_circle</span>
                    Configuración en 2 min
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive SaaS Application Preview */}
            <div className="lg:col-span-6 relative">
              {/* Background Glow Effect */}
              <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary-fixed rounded-full blur-3xl opacity-40 pointer-events-none"></div>

              {/* Main Mockup Dashboard Card */}
              <div className="relative bg-surface-card border border-border-subtle rounded-xl shadow-xl p-5 md:p-6 transition-all hover:translate-y-[-2px]">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-error-red/80"></div>
                    <div className="w-3 h-3 rounded-full bg-warning-amber/80"></div>
                    <div className="w-3 h-3 rounded-full bg-success-green/80"></div>
                    <span className="ml-2 text-xs text-text-muted font-medium">Panel General · Septiembre</span>
                  </div>
                  <span className="text-[11px] bg-success-green-soft text-trust-blue px-2.5 py-0.5 rounded-full border border-border-subtle flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-success-green animate-pulse"></span> Sistema en línea
                  </span>
                </div>

                {/* Realtime Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-surface-container-low p-3.5 rounded-lg border border-border-subtle/60">
                    <span className="text-xs text-text-muted">Caja diaria cobrada</span>
                    <div className="text-2xl font-bold text-on-surface mt-0.5">$185.400</div>
                    <span className="text-xs text-success-green flex items-center gap-0.5 mt-1 font-semibold">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span> +18% vs semana pasada
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-3.5 rounded-lg border border-border-subtle/60">
                    <span className="text-xs text-text-muted">Cobros pendientes</span>
                    <div className="text-2xl font-bold text-error-red mt-0.5">8 cuotas</div>
                    <span className="text-xs text-text-muted mt-1 block">Avisos listos para 1-clic</span>
                  </div>
                </div>

                {/* Members Live Table Preview */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-text-muted px-2 pb-1 font-medium">
                    <span>Socio / Categoría</span>
                    <span>Estado de cuota</span>
                  </div>

                  {/* Member 1 */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-border-subtle/40">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-xs text-primary font-bold">
                        LM
                      </div>
                      <div>
                        <p className="text-sm text-on-surface font-semibold leading-tight">Lucía Martínez</p>
                        <p className="text-xs text-text-muted">Pádel Libre · Turno Tarde</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-success-green-soft text-trust-blue border border-border-subtle">
                      <span className="w-1.5 h-1.5 rounded-full bg-success-green"></span> Al Día
                    </span>
                  </div>

                  {/* Member 2 */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-border-subtle/40">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-xs text-secondary font-bold">
                        TG
                      </div>
                      <div>
                        <p className="text-sm text-on-surface font-semibold leading-tight">Tomás García</p>
                        <p className="text-xs text-text-muted">Musculación Pase Completo</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-warning-amber border border-amber-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-warning-amber"></span> Pendiente
                      </span>
                      <button
                        onClick={handleWhatsAppDemo}
                        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-1.5 rounded-lg transition-transform active:scale-95 shadow-sm flex items-center justify-center"
                        title="Enviar recordatorio por WhatsApp"
                      >
                        <span className="material-symbols-outlined text-[16px] block">chat</span>
                      </button>
                    </div>
                  </div>

                  {/* Member 3 */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-border-subtle/40">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed-dim flex items-center justify-center text-xs text-trust-blue font-bold">
                        SP
                      </div>
                      <div>
                        <p className="text-sm text-on-surface font-semibold leading-tight">Sofía Pérez</p>
                        <p className="text-xs text-text-muted">Entrenamiento Funcional</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-success-green-soft text-trust-blue border border-border-subtle">
                      <span className="w-1.5 h-1.5 rounded-full bg-success-green"></span> Al Día
                    </span>
                  </div>
                </div>

                {/* Floating Notification Badge Widget */}
                <div className="absolute -bottom-5 -left-4 bg-surface-card border border-border-subtle p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="w-9 h-9 rounded-full bg-success-green-soft flex items-center justify-center text-success-green">
                    <span className="material-symbols-outlined text-[20px]">payments</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface">Cobro registrado con éxito</p>
                    <p className="text-[11px] text-text-muted">Mariano S. abonó $24.000 vía QR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment Proof / Trust Bar */}
      <section className="border-y border-border-subtle bg-surface-card py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              La solución diseñada a medida para tu actividad deportiva
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-85">
            <div className="flex items-center gap-2 text-on-surface font-semibold text-sm md:text-base">
              <span className="material-symbols-outlined text-primary text-[22px]">sports_soccer</span>
              Clubes Deportivos
            </div>
            <div className="flex items-center gap-2 text-on-surface font-semibold text-sm md:text-base">
              <span className="material-symbols-outlined text-primary text-[22px]">fitness_center</span>
              Gimnasios &amp; CrossFit
            </div>
            <div className="flex items-center gap-2 text-on-surface font-semibold text-sm md:text-base">
              <span className="material-symbols-outlined text-primary text-[22px]">sports_tennis</span>
              Canchas de Pádel &amp; Fútbol
            </div>
            <div className="flex items-center gap-2 text-on-surface font-semibold text-sm md:text-base">
              <span className="material-symbols-outlined text-primary text-[22px]">sports_kabaddi</span>
              Academias &amp; Danza
            </div>
            <div className="flex items-center gap-2 text-on-surface font-semibold text-sm md:text-base">
              <span className="material-symbols-outlined text-primary text-[22px]">timer</span>
              Personal Trainers
            </div>
          </div>

          {/* High-Trust Impact Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 mt-8 border-t border-border-subtle text-center">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-primary-container">98%</div>
              <p className="text-sm text-text-muted mt-1">Cuotas cobradas dentro del mes</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-on-surface">+15 hrs</div>
              <p className="text-sm text-text-muted mt-1">Ahorradas por semana en planillas</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-success-green">$0</div>
              <p className="text-sm text-text-muted mt-1">Comisiones ocultas o sorpresas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Pillars Section */}
      <section className="py-20 md:py-28 bg-surface" id="funcionalidades">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider text-trust-blue bg-primary-fixed px-3 py-1 rounded-full font-bold">
              Menos vueltas, máxima claridad
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-4 tracking-tight">
              Que cobrar la cuota no te ocupe todo el día.
            </h2>
            <p className="text-base text-text-muted mt-3">
              Dejá atrás los cuadernos borrosos y los chats desordenados. Todo tu club funciona en una sola pantalla ágil y simple.
            </p>
          </div>

          {/* Feature Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1: Multiple Check-out / Arqueo */}
            <div className="bg-surface-card rounded-xl p-6 border border-border-subtle shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[26px]">point_of_sale</span>
                </div>
                <span className="text-[11px] uppercase text-trust-blue font-bold tracking-wide">Módulo Caja</span>
                <h3 className="text-lg font-bold text-on-surface mt-1 mb-2">Cobro Múltiple y Arqueo</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Cobrá varias cuotas de un grupo familiar y productos de cantina en una sola operación con tickets al instante.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-subtle text-xs text-primary flex items-center gap-1 font-semibold">
                <span>Cierre de caja en 1-clic</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>

            {/* Feature 2: WhatsApp Reminder */}
            <div className="bg-surface-card rounded-xl p-6 border border-border-subtle shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#e7fceb] flex items-center justify-center text-[#25D366] mb-4">
                  <span className="material-symbols-outlined text-[26px]">send</span>
                </div>
                <span className="text-[11px] uppercase text-success-green font-bold tracking-wide">WhatsApp Directo</span>
                <h3 className="text-lg font-bold text-on-surface mt-1 mb-2">Cobranza Amigable en 1 Clic</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Avisos personalizados con nombre, saldo y datos de transferencia ya redactados. Vos lo revisás y enviás con un toque.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-subtle text-xs text-primary flex items-center gap-1 font-semibold">
                <span>Sin sonar insistente</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>

            {/* Feature 3: Staff & Coaches */}
            <div className="bg-surface-card rounded-xl p-6 border border-border-subtle shadow-sm hover:shadow-md transition-all flex flex-col justify-between ring-1 ring-primary/20">
              <div>
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-tertiary mb-4">
                  <span className="material-symbols-outlined text-[26px]">badge</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase text-tertiary font-bold tracking-wide">Nuevo Staff</span>
                  <span className="text-[10px] bg-tertiary-fixed text-tertiary px-2 py-0.5 rounded font-bold">Módulo</span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mt-1 mb-2">Liquidación a Profesores</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Control de horas dictadas, cálculo automático de honorarios y deducción directa del arqueo con comprobante de pago.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-subtle text-xs text-primary flex items-center gap-1 font-semibold">
                <span>Cuentas claras con profes</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>

            {/* Feature 4: QR Check-in & Access */}
            <div className="bg-surface-card rounded-xl p-6 border border-border-subtle shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary mb-4">
                  <span className="material-symbols-outlined text-[26px]">qr_code_scanner</span>
                </div>
                <span className="text-[11px] uppercase text-secondary font-bold tracking-wide">Control Diario</span>
                <h3 className="text-lg font-bold text-on-surface mt-1 mb-2">Asistencia con QR y Móvil</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Acreditación rápida desde recepción o teléfono del entrenador. Alertá al instante si el socio debe la cuota al ingresar.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-subtle text-xs text-primary flex items-center gap-1 font-semibold">
                <span>Acceso sin demoras</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Workflow Step-by-Step Section */}
      <section className="py-16 bg-surface-card border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-wider text-trust-blue font-bold">
                Flujo diario intuitivo
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight leading-tight">
                De "¿ya pagó?" <br /> a tenerlo 100% claro.
              </h2>
              <p className="text-sm md:text-base text-text-muted">
                Un recorrido de 3 pasos que te saca de encima la fricción de cobrar para que te dediques a entrenar y hacer crecer tu comunidad.
              </p>

              <div className="space-y-5 pt-2">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">Creá tu cuenta y cargá tus socios</h4>
                    <p className="text-xs text-text-muted mt-0.5">Importá tu planilla de Excel en segundos o sumalos uno por uno desde el celular.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">Registrá pagos en un toque</h4>
                    <p className="text-xs text-text-muted mt-0.5">Efectivo, transferencia o Mercado Pago. El sistema actualiza el estado automáticamente.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">Seguí los pendientes sin estrés</h4>
                    <p className="text-xs text-text-muted mt-0.5">Filtrá quiénes adeudan y mandá los avisos con el monto exacto directamente por WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-surface rounded-2xl p-4 md:p-6 border border-border-subtle shadow-inner">
                <div className="rounded-xl overflow-hidden shadow-lg border border-border-subtle bg-surface-card">
                  <img
                    className="w-full h-80 object-cover"
                    alt="Panel de administración de Nito Socios"
                    src="/landing-assets/dashboard-preview.png"
                  />
                  <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-surface-card">
                    <div>
                      <h5 className="text-base font-semibold text-on-surface">El club sigue, la administración acompaña.</h5>
                      <p className="text-xs text-text-muted">Cuentas transparentes y socios fidelizados en cada disciplina.</p>
                    </div>
                    <a
                      className="px-4 py-2 bg-primary-container text-on-primary rounded-lg text-xs font-semibold hover:bg-trust-blue transition-colors shrink-0"
                      href="#precios"
                    >
                      Ver planes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Real Testimonials Section */}
      <section className="py-20 bg-surface" id="casos-de-exito">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-wider text-trust-blue font-bold">
              Casos reales de clubes y gimnasios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-2 tracking-tight">
              La tranquilidad de tener las cuentas al día.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-surface-card p-6 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-warning-amber mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="text-sm text-on-surface italic leading-relaxed">
                  "Antes perdíamos 4 días enteros al mes cuadrando quién había transferido. Con Nito Socios el día 10 ya tenemos más del 92% cobrado y sin discusiones."
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border-subtle">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface text-xs">
                  MR
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">Mariano Rossi</p>
                  <p className="text-xs text-text-muted">Presidente · Club Atlético Social</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-surface-card p-6 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-warning-amber mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="text-sm text-on-surface italic leading-relaxed">
                  "El aviso por WhatsApp es un golazo. Los alumnos no se ofenden porque el mensaje sale súper respetuoso y con el link de pago listo. Cobramos el doble de rápido."
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border-subtle">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface text-xs">
                  CM
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">Carla Morán</p>
                  <p className="text-xs text-text-muted">Dueña · Olimpo Fitness Center</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-surface-card p-6 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-warning-amber mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="text-sm text-on-surface italic leading-relaxed">
                  "El nuevo módulo para liquidar a los profesores de tenis y pádel nos solucionó la vida. Todo queda registrado y se descuenta directo de la caja."
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border-subtle">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface text-xs">
                  FV
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">Facundo Vera</p>
                  <p className="text-xs text-text-muted">Coordinador · Complejo Pádel Point</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 md:py-28 bg-surface-card border-t border-border-subtle" id="precios">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider text-trust-blue bg-primary-fixed px-3 py-1 rounded-full font-bold">
              Elegí según tu actividad
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-4 tracking-tight">
              Empezá por probarlo. <br />Después elegí tu plan.
            </h2>
            <p className="text-base text-text-muted mt-2">
              30 días de prueba gratuita sin tarjeta de crédito. Conocé la herramienta antes de decidir.
            </p>
          </div>

          {/* Pricing Cards Grid (3 Plans: Estudio, Club, Club Pro) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Plan 1: Estudio */}
            <div className="bg-surface rounded-xl p-8 border border-border-subtle shadow-sm flex flex-col justify-between hover:translate-y-[-2px] transition-all">
              <div>
                <h3 className="text-xl font-bold text-on-surface">Estudio</h3>
                <p className="text-xs text-text-muted mt-1">Para organizar una actividad deportiva o academia que crece.</p>
                <div className="my-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl md:text-4xl font-extrabold text-on-surface">$24.000</span>
                    <span className="text-xs text-text-muted ml-1">ARS / mes</span>
                  </div>
                  <span className="text-xs text-trust-blue font-medium">Para academias y gimnasios</span>
                </div>
                <ul className="space-y-3.5 mb-8 text-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-success-green text-[18px]">check_circle</span>
                    <span>Hasta <strong>200 socios</strong> activos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-success-green text-[18px]">check_circle</span>
                    <span>Personalización con tu logo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-success-green text-[18px]">check_circle</span>
                    <span>Sistema de reservas y turnos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-success-green text-[18px]">check_circle</span>
                    <span>Reportes y WhatsApp directo</span>
                  </li>
                </ul>
              </div>
              <a
                className="w-full py-3 px-4 rounded-lg bg-surface-card hover:bg-surface-container-low text-on-surface border border-border-subtle text-sm font-semibold text-center transition-all block"
                href="https://socios.nitoapp.online/login"
                onClick={trackLead}
              >
                Probar gratis
              </a>
            </div>

            {/* Plan 2: Club (Featured) */}
            <div className="bg-surface-card rounded-xl p-8 border-2 border-primary-container shadow-xl flex flex-col justify-between relative hover:translate-y-[-2px] transition-all">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary text-[11px] uppercase font-bold py-1 px-4 rounded-full shadow-sm whitespace-nowrap">
                Para Clubes y Complejos
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-surface">Club</h3>
                <p className="text-xs text-text-muted mt-1">Gestión integral para instituciones y clubes con varias disciplinas.</p>
                <div className="my-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl md:text-4xl font-extrabold text-primary">$45.000</span>
                    <span className="text-xs text-text-muted ml-1">ARS / mes</span>
                  </div>
                  <span className="text-xs text-trust-blue font-semibold">Socios y disciplinas ilimitadas</span>
                </div>
                <ul className="space-y-3.5 mb-8 text-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-success-green text-[18px]">check_circle</span>
                    <span><strong>Socios o alumnos ilimitados</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-success-green text-[18px]">check_circle</span>
                    <span>Caja, arqueos y rendiciones de turnos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-success-green text-[18px]">check_circle</span>
                    <span>Portal del socio y recepción QR/DNI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-success-green text-[18px]">check_circle</span>
                    <span>Reservas de canchas, torneos y liquidación staff</span>
                  </li>
                </ul>
              </div>
              <a
                className="w-full py-3 px-4 rounded-lg bg-primary-container hover:bg-trust-blue text-on-primary text-sm font-semibold text-center shadow-md active:scale-98 transition-all block"
                href="https://socios.nitoapp.online/login"
                onClick={trackLead}
              >
                Probar 30 días gratis
              </a>
            </div>

            {/* Plan 3: Club Pro (Online Payments + Subscriptions) */}
            <div className="bg-surface rounded-xl p-8 border border-trust-blue/40 shadow-md flex flex-col justify-between relative hover:translate-y-[-2px] transition-all bg-gradient-to-b from-surface to-primary-fixed/20">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-trust-blue text-white text-[11px] uppercase font-bold py-1 px-4 rounded-full shadow-sm whitespace-nowrap flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                <span>Mercado Pago Full</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-surface flex items-center gap-1.5">
                  <span>Club Pro</span>
                </h3>
                <p className="text-xs text-text-muted mt-1">Cobros automáticos con tarjeta y débito recurrente.</p>
                <div className="my-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl md:text-4xl font-extrabold text-on-surface">$74.900</span>
                    <span className="text-xs text-text-muted ml-1">ARS / mes</span>
                  </div>
                  <span className="text-xs text-success-green font-semibold">Máxima automatización</span>
                </div>
                <ul className="space-y-3.5 mb-8 text-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-success-green text-[18px]">check_circle</span>
                    <span><strong>Todo lo incluido en Club</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-trust-blue text-[18px]">credit_card</span>
                    <span><strong>Cobro con tarjeta online (Mercado Pago)</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-trust-blue text-[18px]">autorenew</span>
                    <span><strong>Adhesión a débito automático recurrente</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-success-green text-[18px]">check_circle</span>
                    <span>Pago directo desde el portal del socio</span>
                  </li>
                </ul>
              </div>
              <a
                className="w-full py-3 px-4 rounded-lg bg-inverse-surface hover:bg-on-surface text-surface-card text-sm font-semibold text-center transition-all block shadow-sm"
                href="https://socios.nitoapp.online/login"
                onClick={trackLead}
              >
                Probar 30 días gratis
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm md:text-base text-text-muted">
              ¿Tenés requerimientos especiales o más de una sede?
              <a
                className="text-primary font-semibold hover:underline ml-1"
                href="https://wa.me/5491155144268?text=Hola,%20tengo%20requerimientos%20especiales%20para%20mi%20club"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablá con un asesor comercial
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-20 bg-surface" id="preguntas-frecuentes">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-wider text-trust-blue font-bold">
              Antes de empezar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-2 tracking-tight">
              Las dudas más comunes.
            </h2>
            <p className="text-sm md:text-base text-text-muted mt-1">Y si te queda alguna otra, estamos en WhatsApp del otro lado.</p>
          </div>

          <div className="space-y-4">
            {/* FAQ item 1 */}
            <details className="group bg-surface-card rounded-xl border border-border-subtle p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer" open>
              <summary className="flex items-center justify-between text-base md:text-lg font-semibold text-on-surface list-none">
                <span>¿Cómo empiezo la prueba gratuita de 30 días?</span>
                <span className="material-symbols-outlined text-text-muted transition group-open:rotate-180">expand_more</span>
              </summary>
              <p className="text-sm md:text-base text-text-muted mt-3 pt-3 border-t border-border-subtle leading-relaxed">
                Hacés clic en "Probar 30 días gratis", completás el nombre de tu institución o gimnasio y ya tenés acceso instantáneo. No te pedimos tarjeta ni compromiso de permanencia.
              </p>
            </details>

            {/* FAQ item 2 */}
            <details className="group bg-surface-card rounded-xl border border-border-subtle p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between text-base md:text-lg font-semibold text-on-surface list-none">
                <span>¿Sirve si tengo pocos socios o recién estoy arrancando?</span>
                <span className="material-symbols-outlined text-text-muted transition group-open:rotate-180">expand_more</span>
              </summary>
              <p className="text-sm md:text-base text-text-muted mt-3 pt-3 border-t border-border-subtle leading-relaxed">
                Absolutamente. Podés comenzar con una sola disciplina o actividad, cargar tus socios y probar todo el circuito de cobros y caja desde el primer día para tener una gestión ordenada y profesional.
              </p>
            </details>

            {/* FAQ item 3 */}
            <details className="group bg-surface-card rounded-xl border border-border-subtle p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between text-base md:text-lg font-semibold text-on-surface list-none">
                <span>¿Los mensajes de WhatsApp se mandan solos o los controlo yo?</span>
                <span className="material-symbols-outlined text-text-muted transition group-open:rotate-180">expand_more</span>
              </summary>
              <p className="text-sm md:text-base text-text-muted mt-3 pt-3 border-t border-border-subtle leading-relaxed">
                El sistema redacta el aviso completo con el nombre del socio, el mes y el monto exacto, pero siempre abrís la conversación para chequearlo y dar tu toque personal antes de enviar.
              </p>
            </details>

            {/* FAQ item 4 */}
            <details className="group bg-surface-card rounded-xl border border-border-subtle p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between text-base md:text-lg font-semibold text-on-surface list-none">
                <span>¿Puedo importar mis datos desde una planilla de Excel?</span>
                <span className="material-symbols-outlined text-text-muted transition group-open:rotate-180">expand_more</span>
              </summary>
              <p className="text-sm md:text-base text-text-muted mt-3 pt-3 border-t border-border-subtle leading-relaxed">
                Sí. Podés subir un archivo .CSV o Excel con los nombres, teléfonos y documentos de tus socios. Nuestro equipo también te acompaña en el traspaso si lo necesitás.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final High-Contrast Call to Action Banner */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-inverse-surface rounded-2xl p-8 md:p-14 text-surface-card relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="text-xs text-primary-fixed uppercase tracking-wider font-bold">
                Tu próximo paso
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Probalo con tu actividad. <br />
                Decidí con experiencia real.
              </h2>
              <p className="text-base text-surface-container-high max-w-lg">
                Creá tu cuenta en menos de dos minutos. Sin vueltas ni tarjetas de crédito. Empezá a ordenar tus cobros hoy.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  className="bg-primary-container hover:bg-trust-blue text-on-primary text-base font-semibold px-6 py-3.5 rounded-lg shadow-md active:scale-95 transition-all flex items-center gap-2"
                  href="https://socios.nitoapp.online/login"
                  onClick={trackLead}
                >
                  <span>Empezar mi prueba gratis</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
                <a
                  className="text-white hover:text-primary-fixed text-sm font-medium px-4 py-3 flex items-center gap-2 transition-colors"
                  href="https://wa.me/5491155144268?text=Hola,%20vi%20la%20web%20de%20Nito%20Socios%20y%20me%20gustar%C3%ADa%20hacer%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[#25D366] text-[20px]">chat</span>
                  <span>Hablar con un asesor por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Decorative Subtle Background Icon */}
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[320px] text-white">sports_club</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-card text-on-surface border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <img
                alt="Nito Socios"
                className="w-6 h-6 rounded object-contain"
                src="/landing-assets/logo.jpeg"
              />
              <span className="text-lg font-bold text-primary">Nito Socios</span>
            </div>
            <p className="text-xs text-text-muted mt-1">
              © {new Date().getFullYear()} Nito Socios. Todos los derechos reservados.
            </p>
          </div>

          {/* Footer Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-text-muted">
            <a className="hover:text-primary hover:underline transition-colors" href="/legales/terminos_condiciones.pdf" target="_blank" rel="noopener noreferrer">
              Términos y Condiciones
            </a>
            <a className="hover:text-primary hover:underline transition-colors" href="/legales/politica_privacidad.pdf" target="_blank" rel="noopener noreferrer">
              Política de Privacidad
            </a>
            <a
              className="hover:text-primary hover:underline transition-colors"
              href="https://wa.me/5491155144268?text=Hola,%20necesito%20soporte%20sobre%20Nito%20Socios"
              target="_blank"
              rel="noopener noreferrer"
            >
              Soporte WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      <CookieBanner />
    </>
  );
}
