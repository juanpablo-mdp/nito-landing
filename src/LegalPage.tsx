import content from './legal-content.json';
import './legal.css';

export function LegalPage({ privacy = false }: { privacy?: boolean }) {
  const title = privacy ? 'Política de privacidad' : 'Términos y condiciones';
  const sections = privacy ? content.privacy : content.terms;
  return <div className="legal-page">
    <a className="legal-skip" href="#documento">Ir al documento</a>
    <header className="legal-header"><a href="/" aria-label="Nito Socios, inicio"><img src="/logo-new.jpeg" alt="Nito" width="44" height="46" /><strong>Nito Socios</strong></a><a href="/">Volver al inicio →</a></header>
    <main id="documento" className="legal-layout">
      <aside aria-label="Índice del documento"><p>INFORMACIÓN LEGAL</p><nav aria-label="Documentos legales"><a href="/legales/terminos-y-condiciones/" aria-current={!privacy ? 'page' : undefined}>Términos y condiciones</a><a href="/legales/politica-de-privacidad/" aria-current={privacy ? 'page' : undefined}>Política de privacidad</a></nav><p>EN ESTE DOCUMENTO</p><nav aria-label="Secciones">{sections.map((section, i) => <a key={section.title} href={`#seccion-${i + 1}`}>{section.title}</a>)}</nav><a className="legal-contact" href="mailto:info@nitoapp.online">info@nitoapp.online</a></aside>
      <article><p className="legal-eyebrow">CLARIDAD PARA TU GESTIÓN</p><h1>{title}</h1><p className="legal-date">Versión propuesta · 1 de noviembre de 2026</p>
        <div className="legal-notice" role="note"><strong>Borrador en revisión</strong><p>Este documento todavía tiene puntos pendientes de confirmación, señalados en el texto. No reemplaza la versión vigente hasta que se complete su revisión y se confirme su entrada en vigencia.</p></div>
        {sections.map((section, i) => <section id={`seccion-${i + 1}`} key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((text, j) => <p className={text.includes('[PENDIENTE') ? 'legal-pending' : undefined} key={j}>{text}</p>)}</section>)}
        <footer className="legal-document-footer"><p>Consultas sobre este documento</p><a href="mailto:info@nitoapp.online">info@nitoapp.online</a><a href="#documento">Volver arriba ↑</a></footer>
      </article>
    </main><footer className="legal-site-footer">© 2026 Nito Socios · Juan Pablo González</footer>
  </div>;
}
