import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detect track scroll positions
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-royal-gold/90 ${
        isScrolled
          ? 'bg-royal-blue shadow-lg py-3'
          : 'bg-royal-blue/95 md:bg-royal-blue/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand Brandings */}
          <Link
            id="header-brand-logo"
            to="/"
            className="flex flex-col select-none group focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-royal-gold group-hover:text-royal-gold-light transition-colors">
              KINGS FURNITURE
            </span>
            <span className="font-sans text-[10px] tracking-widest uppercase opacity-80 font-semibold italic text-royal-cream/90 transition-colors -mt-0.5">
              किंग्स फर्नीचर — Royal Comfort
            </span>
          </Link>

          {/* Desktop Nav Actions */}
          <nav id="desktop-navigation" className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                id={`nav-${link.name.toLowerCase().replace(' ', '-')}`}
                to={link.path}
                className={`relative py-2 text-xs uppercase tracking-widest transition-all duration-200 focus:outline-shadow ${
                  isActive(link.path)
                    ? 'text-royal-gold font-bold font-sans border-b border-royal-gold'
                    : 'text-royal-cream hover:text-royal-gold font-bold'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Immersive UI Brand Badge */}
            <div className="hidden lg:flex items-center gap-3 bg-royal-cream text-royal-blue px-3.5 py-1.5 rounded-full text-xs font-bold border border-royal-gold shadow-md">
              <span className="text-royal-gold font-black">★ 4.2</span>
              <span className="opacity-30 text-[10px]">|</span>
              <span className="opacity-80">Dehradun</span>
            </div>

            {/* CTA Phone Button */}
            <a
              id="header-call-cta"
              href="tel:+917302972997"
              className="flex items-center space-x-2 bg-royal-gold hover:bg-royal-gold-hover text-royal-blue font-bold px-4 py-2.5 rounded-md transition-all duration-300 text-xs tracking-widest uppercase shadow-md hover:brightness-110"
            >
              <Phone size={14} />
              <span>CALL NOW</span>
            </a>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Sticky mobile Call Now Icon */}
            <a
              id="mobile-header-call"
              href="tel:+917302972997"
              className="bg-royal-gold hover:bg-royal-gold-hover text-royal-blue p-2.5 rounded-full transition-all duration-200"
              title="Call Kings Furniture"
              aria-label="Call Mobile"
            >
              <Phone size={18} />
            </a>

            {/* Mobile Burger Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="text-royal-cream hover:text-royal-gold p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-gold"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sticky Sidebar Drawer */}
      <div
        id="mobile-menu"
        className={`fixed top-0 bottom-0 right-0 w-3/4 max-w-sm bg-royal-blue z-50 p-6 shadow-2xl transition-transform duration-300 md:hidden transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8 border-b border-royal-cream/10 pb-4">
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-royal-gold">KINGS FURNITURE</span>
            <span className="font-sans text-xs text-royal-cream/60">किंग्स फर्नीचर</span>
          </div>
          <button
            id="mobile-close-btn"
            onClick={() => setIsOpen(false)}
            className="text-royal-cream hover:text-royal-gold p-1"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col space-y-6" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              id={`mob-nav-${link.name.toLowerCase().replace(' ', '-')}`}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg uppercase tracking-widest py-1 border-b border-white/5 ${
                isActive(link.path)
                  ? 'text-royal-gold font-bold'
                  : 'text-royal-cream hover:text-royal-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            id="mob-call-cta-drawer"
            href="tel:+917302972997"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center space-x-3 bg-royal-gold hover:bg-royal-gold-hover text-royal-blue font-sans font-bold py-3 px-4 rounded-md transition-all duration-200 mt-6 tracking-widest text-sm"
          >
            <Phone size={18} />
            <span>CALL 073029 72997</span>
          </a>
        </nav>

        <div className="absolute bottom-6 left-6 right-6 text-center border-t border-royal-cream/10 pt-4">
          <p className="text-royal-cream/40 text-xs font-sans">
            37, Moti Bazar, Paltan Bazaar, Dehradun
          </p>
        </div>
      </div>
    </header>
  );
}
