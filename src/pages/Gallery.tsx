import { useState } from 'react';
import { X, ZoomIn, Star } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import SEO from '../components/SEO';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filters = [
    { key: 'all', label: 'All Images' },
    { key: 'showroom', label: 'Our Showroom' },
    { key: 'beds', label: 'Beds' },
    { key: 'sofas', label: 'Sofas' },
    { key: 'dining', label: 'Dining Sets' },
    { key: 'wardrobes', label: 'Wardrobes' },
    { key: 'office', label: 'Premium Seating' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div id="gallery-page-container" className="fade-in pt-24 pb-20 font-sans">
      <SEO
        title="Furniture Gallery | Kings Furniture Dehradun"
        description="View our furniture gallery — beds, sofas, wardrobes, dining sets. Kings Furniture, Paltan Bazaar, Dehradun."
        path="/gallery"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-2xl mx-auto pt-6 mb-12">
          <span className="text-royal-gold uppercase tracking-widest text-xs font-extrabold block mb-2">
            Visual Experience
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-royal-blue tracking-tight">
            Furniture Gallery
          </h1>
          <p className="mt-4 text-royal-blue/70 leading-relaxed text-sm sm:text-base">
            Take a virtual tour of our Paltan Bazaar showroom. Browse photographs of bespoke items crafted for double storeys, villas, and premium workspaces.
          </p>
          <div className="w-16 h-1 bg-royal-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* GALLERY TABS */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex space-x-1 bg-royal-blue/5 border border-royal-blue/10 p-1 rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter.key}
                id={`gal-tab-${filter.key}`}
                onClick={() => setActiveFilter(filter.key)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-md transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-royal-gold ${
                  activeFilter === filter.key
                    ? 'bg-royal-blue text-royal-gold font-bold shadow-sm'
                    : 'text-royal-blue hover:text-royal-gold hover:bg-white/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* PHOTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              className="group relative bg-white rounded-lg overflow-hidden border border-royal-blue/5 shadow-md hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer object-cover"
              onClick={() => setSelectedImage(item)}
              aria-label={`Open lightbox for ${item.title}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(item);
                }
              }}
            >
              {/* Image Area */}
              <div className="relative aspect-square w-full bg-royal-cream-dark overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-royal-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6" />
                
                {/* Floating zoom indicator on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-royal-gold text-royal-blue p-3.5 rounded-full shadow-lg z-10 hover:scale-110 active:scale-95">
                  <ZoomIn size={20} />
                </div>

                {/* Categories Tag */}
                <div className="absolute top-4 left-4 z-10 transition-transform">
                  <span className="bg-royal-blue/90 border border-royal-gold/20 text-royal-gold-light text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-sm tracking-wider shadow-md">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 z-10 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-royal-cream text-left">
                  <h3 className="font-serif text-base font-bold text-royal-gold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-royal-cream/70 font-sans tracking-wide">
                    Click to view full dimension
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX MODAL */}
        {selectedImage && (
          <div
            id="gallery-lightbox-modal"
            className="fixed inset-0 bg-royal-blue/98 z-50 flex flex-col justify-center items-center p-4 md:p-8 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Viewing ${selectedImage.title}`}
          >
            {/* Close Button */}
            <button
              id="lightbox-close-btn"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-royal-cream hover:text-royal-gold p-2 bg-white/5 rounded-full focus:outline-none focus:ring-2 focus:ring-royal-gold transition-colors"
              aria-label="Close lightbox modal"
            >
              <X size={28} />
            </button>

            {/* Modal Media wrapper */}
            <div
              className="relative max-w-4xl max-h-[75vh] w-full flex items-center justify-center bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain rounded-md shadow-2xl border border-royal-gold/10"
              />
            </div>

            {/* Bottom Details Panel */}
            <div
              className="mt-6 text-center text-royal-cream max-w-sm px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-[10px] text-royal-gold uppercase tracking-widest font-extrabold font-sans">
                {selectedImage.category} Collection
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                {selectedImage.title}
              </h4>
              <p className="text-xs text-royal-cream/60 mt-2 leading-relaxed">
                {selectedImage.alt}
              </p>
              
              {/* WhatsApp direct trigger inside Lightbox */}
              <a
                id="lightbox-wa-btn"
                href={`https://wa.me/917302972997?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(selectedImage.title)}%20catalog%20item%20rendered%20in%20your%20website%20gallery.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold px-4 py-2 mt-5 rounded-md transition-all uppercase tracking-wider"
              >
                <Star fill="currentColor" size={12} className="text-royal-gold-light" />
                <span>Enquire Via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
