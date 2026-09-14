import { useState, useEffect } from 'react';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const consent = localStorage.getItem('nito_cookie_consent');
        if (!consent) {
            // Small delay to make the animation feel natural after page load
            const timer = setTimeout(() => setIsVisible(true), 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('nito_cookie_consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
            <div className="cookie-content">
                <p>
                    Usamos algunas cookies para que Nito funcione rápido y sin errores, y para entender cómo usás la plataforma así podemos seguir mejorándola. Si seguís navegando, asumimos que estás de acuerdo. 🍪
                </p>
                <div className="cookie-actions">
                    <button onClick={handleAccept} className="btn btn-primary btn-sm">
                        ¡Entendido!
                    </button>
                    <a
                        href="/legales/politica_privacidad.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link"
                    >
                        Leer Política de Privacidad
                    </a>
                </div>
            </div>
        </div>
    );
}
