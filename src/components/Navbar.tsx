import { ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Forçar o header a permanecer fixo
    const enforceFixedPosition = () => {
      if (header) {
        header.style.position = 'fixed';
        header.style.top = '0px';
        header.style.left = '0px';
        header.style.right = '0px';
        header.style.width = '100%';
        header.style.transform = 'none';
        header.style.margin = '0';
        header.style.padding = '0';
      }
    };

    // Aplicar imediatamente
    enforceFixedPosition();

    // Aplicar em intervalos para garantir
    const interval = setInterval(enforceFixedPosition, 100);

    // Aplicar em eventos de scroll
    window.addEventListener('scroll', enforceFixedPosition, { passive: true });
    window.addEventListener('resize', enforceFixedPosition, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', enforceFixedPosition);
      window.removeEventListener('resize', enforceFixedPosition);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      id="mamedio-navbar"
      className="fixed top-0 left-0 right-0 z-[9999] bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        width: '100%',
        margin: '0',
        padding: '0',
        transform: 'none',
        transition: 'none',
      }}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-center h-16 md:h-20">
          {/* Logo Mamedio - Fixo no topo */}
          <a 
            href="#" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 md:w-6 md:h-6 text-accent" />
            </div>
            <span className="text-base md:text-lg font-bold font-display text-foreground">Mamedio Veículos</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
