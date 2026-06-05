import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* SEMANTIC FOOTER */}
      <footer id="app-footer" className="bg-royal-blue text-royal-cream border-t border-royal-gold/20 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Column 1: Brand & Ratings */}
            <div className="flex flex-col space-y-4">
              <Link to="/" className="flex flex-col group select-none">
                <span className="font-serif text-2xl font-bold tracking-widest text-royal-gold group-hover:text-royal-gold-light transition-colors">
                  KINGS FURNITURE
                </span>
                <span className="text-sm tracking-widest text-royal-cream/60 -mt-1 font-bold">
                  किंग्स फर्नीचर
                </span>
              </Link>
              <p className="text-royal-cream/70 text-sm max-w-sm font-sans italic">
                "Royal Comfort for Every Home" — Dehradun's premier furniture wholesaler delivering high luxury designs at wholesale prices.
              </p>
              {/* Rating */}
              <div className="flex items-center space-x-2 pt-2">
                <div className="flex text-amber-400">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <span className="relative flex h-4 w-4 ml-0.5">
                    <Star fill="currentColor" size={16} className="text-amber-400 opacity-50" />
                    <span className="absolute inset-y-0 left-0 w-[20%] overflow-hidden">
                      <Star fill="currentColor" size={16} className="text-amber-400" />
                    </span>
                  </span>
                </div>
                <span className="text-sm font-bold text-royal-cream">
                  4.2★ Google Rating
                </span>
                <span className="text-xs text-royal-cream/50">
                  (40+ Reviewers)
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col space-y-4 md:pl-12">
              <h3 className="font-serif text-lg font-bold text-royal-gold tracking-wider">
                Browse Collection
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="text-royal-cream/80 hover:text-royal-gold transition-colors block">
                    Home & Featured Collection
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-royal-cream/80 hover:text-royal-gold transition-colors block">
                    Furniture Catalogue
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-royal-cream/80 hover:text-royal-gold transition-colors block">
                    Our Story & Values
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-royal-cream/80 hover:text-royal-gold transition-colors block">
                    Showroom Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-royal-cream/80 hover:text-royal-gold transition-colors block">
                    Contact & Enquiry Setup
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Details */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-serif text-lg font-bold text-royal-gold tracking-wider animate-pulse">
                Find Our Store
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="text-royal-gold shrink-0 mt-0.5" />
                  <span className="text-royal-cream/80 leading-relaxed">
                    37, Moti Bazar, Puran Market, Paltan Bazaar, Dehradun, Uttarakhand 248001
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-royal-gold shrink-0" />
                  <a href="tel:+917302972997" className="text-royal-cream/80 hover:text-royal-gold transition-colors">
                    +91 73029 72997
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <Clock size={18} className="text-royal-gold shrink-0 mt-0.5" />
                  <span className="text-royal-cream/80">
                    Open Daily: 9:00 AM – 8:00 PM <br />
                    <span className="text-[11px] text-royal-gold-light mt-0.5 inline-block">
                      Women-Owned & Wholesaler Pricing
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-royal-cream/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-[0.2em] text-royal-cream/60 gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center md:text-left">
              <span>&copy; {currentYear} Kings Furniture</span>
              <span className="hidden sm:inline w-1 h-1 bg-royal-gold rounded-full"></span>
              <span>37, Moti Bazar, Dehradun</span>
              <span className="hidden sm:inline w-1 h-1 bg-royal-gold rounded-full"></span>
              <span>Open Daily: 9 AM - 8 PM</span>
            </div>
            <div className="flex gap-6">
              <a href="https://wa.me/917302972997" target="_blank" rel="noopener noreferrer" className="text-royal-gold hover:text-royal-gold-light transition-colors">
                Enquire on WhatsApp
              </a>
              <a href="tel:+917302972997" className="text-royal-cream hover:text-royal-gold transition-colors">
                +91 73029 72997
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        id="floating-whatsapp-trigger"
        href="https://wa.me/917302972997"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-green-500/50"
        aria-label="Enquire on WhatsApp with Kings Furniture"
        title="Chat on WhatsApp"
      >
        <MessageSquare fill="currentColor" size={24} className="sm:size-26" />
        <span className="absolute right-full mr-3 bg-royal-blue text-royal-cream text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-royal-gold/20">
          WhatsApp Business
        </span>
      </a>
    </>
  );
}
