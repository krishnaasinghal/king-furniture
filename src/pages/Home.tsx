import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Tag, Layers, Smile, Phone, MessageSquare, ArrowRight, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../assets';
import { PRODUCTS, REVIEWS, FEATURES } from '../data';
import SEO from '../components/SEO';

export default function Home() {
  // Use the first 3 products as featured products
  const featuredProducts = PRODUCTS.slice(0, 3);

  // Helper to map string to lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="text-royal-gold" size={32} />;
      case 'Tag':
        return <Tag className="text-royal-gold" size={32} />;
      case 'ShieldCheck':
        return <ShieldCheck className="text-royal-gold" size={32} />;
      case 'Smile':
        return <Smile className="text-royal-gold" size={32} />;
      default:
        return <Layers className="text-royal-gold" size={32} />;
    }
  };

  return (
    <div id="home-page-container" className="fade-in pt-16 font-sans">
      <SEO
        title="Kings Furniture Dehradun | Best Furniture Wholesaler in Paltan Bazaar"
        description="Kings Furniture — trusted furniture wholesaler in Dehradun. Wide variety of beds, sofas, wardrobes at wholesale prices. Visit Paltan Bazaar."
        path="/"
      />

      {/* 1. HERO SECTION */}
      <section
        id="hero-banner"
        className="relative min-h-[90vh] flex items-center justify-center bg-royal-blue overflow-hidden px-4 py-20 border-b border-royal-gold/15"
      >
        {/* Background Image with Dark Golden Tint Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.shopFront}
            alt="Kings Furniture Storefront Dehradun showroom exterior elevation"
            referrerPolicy="no-referrer"
            width={1200}
            height={800}
            className="w-full h-full object-cover object-center opacity-25 transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue via-royal-blue/85 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-transparent to-royal-blue/30" />
        </div>

        {/* Decorative Geometric Grid from Immersive UI Template */}
        <div className="absolute inset-0 opacity-15 overflow-hidden pointer-events-none z-10">
          <div className="grid grid-cols-4 gap-6 w-full h-full">
            <div className="border border-royal-gold/30 transform -rotate-12 translate-y-16 scale-95" />
            <div className="border border-royal-gold/30 transform rotate-6 -translate-y-24 scale-100" />
            <div className="border border-royal-gold/30 transform -rotate-3 translate-y-36 scale-90" />
            <div className="border border-royal-gold/30 transform rotate-12 -translate-y-16 scale-105" />
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main textual column (Spans 7 on desktop) */}
          <div className="lg:col-span-7 text-center lg:text-left text-royal-cream">
            {/* Tag Badge */}
            <div className="inline-block bg-royal-gold text-royal-blue text-[10px] font-bold px-3 py-1 mb-6 rounded-sm tracking-widest uppercase shadow-md select-none">
              Women-Owned Business
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Kings Furniture <br className="hidden sm:inline" />
              <span className="text-royal-gold italic font-serif">Royal Comfort</span> for Every Home
            </h1>

            <p className="text-base sm:text-lg text-royal-cream/80 max-w-2xl leading-relaxed font-light mb-8">
              Dehradun's premier furniture wholesaler in Paltan Bazaar. Discover custom-built double beds, plush l-shape sofas, sleek sliding wardrobes, and premium office seating crafted for lifetime durability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                id="hero-products-cta"
                to="/products"
                className="group bg-royal-gold hover:bg-royal-gold-hover text-royal-blue px-8 py-3.5 font-bold uppercase text-xs tracking-widest shadow-xl hover:brightness-110 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Collection</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <a
                id="hero-call-cta"
                href="tel:+917302972997"
                className="border-2 border-royal-cream text-royal-cream px-8 py-3.5 font-bold uppercase text-xs tracking-widest hover:bg-royal-cream hover:text-royal-blue transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Spotlight Column / Majestic Interactive Frame (Spans 5) */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative p-6">
            <div className="relative w-full h-80 border-4 border-royal-gold p-4 bg-royal-blue-light/40 backdrop-blur-sm shadow-2xl rounded-sm group transition-all duration-500 hover:border-royal-gold-light">
              {/* Inner Luxury Container */}
              <div className="w-full h-full bg-royal-blue flex flex-col items-center justify-center text-royal-gold/20 text-7xl font-serif italic font-bold tracking-wider select-none shadow-inner border border-royal-gold/10">
                Luxury
                <span className="text-xs uppercase tracking-[0.25em] text-royal-gold/40 font-bold font-sans mt-2">
                  Direct Wholesaler
                </span>
              </div>

              {/* Float Card Decoration */}
              <div className="absolute -bottom-6 -left-6 bg-royal-cream p-5 shadow-2xl border-l-4 border-royal-gold max-w-[280px] rounded-r-md transition-transform duration-300 group-hover:scale-105">
                <p className="text-[10px] italic text-royal-blue/60 mb-1 font-semibold uppercase tracking-wider">
                  Featured Choice
                </p>
                <p className="text-sm font-bold font-serif text-royal-blue mb-1">
                  Imperial Teak Bed Set
                </p>
                <p className="text-xs font-semibold text-royal-gold">
                  Genuine Wholeseller Price
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. TRUST BADGES ROW */}
      <section
        id="trust-row"
        className="bg-royal-blue-light border-y border-royal-gold/20 py-6 md:py-8 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-royal-cream">
            {/* Badge 1 */}
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-serif font-extrabold text-royal-gold">4.2 ★</span>
              <span className="text-xs uppercase tracking-widest text-royal-cream/60 mt-1 font-semibold">Google Rating</span>
            </div>
            {/* Badge 2 */}
            <div className="flex flex-col items-center border-l border-royal-cream/10">
              <span className="text-xl sm:text-2xl font-serif font-extrabold text-royal-gold">40+</span>
              <span className="text-xs uppercase tracking-widest text-royal-cream/60 mt-1 font-semibold">Trusted Reviews</span>
            </div>
            {/* Badge 3 */}
            <div className="flex flex-col items-center border-l-0 md:border-l border-royal-cream/10">
              <span className="text-xl sm:text-2xl font-serif font-extrabold text-royal-gold">Women-Owned</span>
              <span className="text-xs uppercase tracking-widest text-royal-cream/60 mt-1 font-semibold">Business Proudly</span>
            </div>
            {/* Badge 4 */}
            <div className="flex flex-col items-center border-l border-royal-cream/10">
              <span className="text-xl sm:text-2xl font-serif font-extrabold text-royal-gold">Wholesale</span>
              <span className="text-xs uppercase tracking-widest text-royal-cream/60 mt-1 font-semibold">Direct-To-You Prices</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section id="why-choose-us" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-royal-gold uppercase tracking-widest text-sm font-extrabold block mb-2 font-sans">
            Guaranteed Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-royal-blue font-bold tracking-tight">
            Why Shop at Kings Furniture?
          </h2>
          <div className="w-16 h-1 bg-royal-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feat) => (
            <div
              key={feat.id}
              id={`feature-card-${feat.id}`}
              className="bg-white rounded-lg p-8 border border-royal-blue/5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-lg bg-royal-cream border border-royal-gold/10 flex items-center justify-center mb-6 group-hover:bg-royal-gold/15 transition-all duration-300">
                {getIcon(feat.iconName)}
              </div>
              <h3 className="font-serif text-xl font-bold text-royal-blue mb-3">
                {feat.title}
              </h3>
              <p className="text-sm text-royal-blue/70 leading-relaxed font-sans">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS GRID */}
      <section id="featured-products" className="bg-royal-cream-dark/40 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div className="max-w-xl">
              <span className="text-royal-gold uppercase tracking-widest text-sm font-extrabold block mb-2 font-sans">
                Curated Selection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-royal-blue font-bold tracking-tight">
                Featured Masterpieces
              </h2>
              <div className="w-12 h-1 bg-royal-gold mt-4 rounded-full" />
            </div>

            <Link
              id="view-all-products-link"
              to="/products"
              className="mt-4 sm:mt-0 flex items-center space-x-2 text-royal-blue hover:text-royal-gold/90 font-bold tracking-wider uppercase text-sm"
            >
              <span>View Full Catalogue</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((prod) => (
              <article
                key={prod.id}
                id={`featured-card-${prod.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Product Image Wrapper */}
                <div className="relative overflow-hidden aspect-[4/3] bg-royal-cream-dark">
                  <img
                    src={prod.image}
                    alt={prod.alt}
                    referrerPolicy="no-referrer"
                    width={400}
                    height={300}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-royal-blue/90 border border-royal-gold/30 text-royal-gold-light text-[10px] uppercase font-extrabold px-3 py-1.5 rounded-full tracking-wider shadow-md backdrop-blur-sm">
                      {prod.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-royal-gold/90 uppercase font-bold tracking-widest font-sans mb-1">
                    {prod.priceType}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-royal-blue mb-2.5 truncate">
                    {prod.name}
                  </h3>
                  <p className="text-sm text-royal-blue/70 line-clamp-2 leading-relaxed mb-6 font-sans">
                    {prod.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-royal-cream-dark flex items-center justify-between">
                    <a
                      id={`featured-enquire-wa-${prod.id}`}
                      href={`https://wa.me/917302972997?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(prod.name)}%20from%20Kings%20Furniture`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-royal-blue hover:text-royal-gold font-bold text-sm tracking-wider uppercase transition-colors"
                    >
                      <MessageSquare size={16} className="text-green-500" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                    <Link
                      to="/products"
                      className="text-royal-gold hover:text-royal-gold-hover text-sm"
                      title="View products detail"
                    >
                      <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER REVIEWS */}
      <section id="customer-reviews" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-royal-gold uppercase tracking-widest text-sm font-extrabold block mb-2">
            Client Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-royal-blue font-bold tracking-tight">
            Loved By Dehradun Families
          </h2>
          <div className="w-16 h-1 bg-royal-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              id={`review-box-${rev.id}`}
              className="bg-white/90 border border-royal-blue/5 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow relative flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex text-amber-500 mb-5">
                  {Array.from({ length: rev.stars }).map((_, i) => (
                    <Star key={i} fill="currentColor" size={18} className="mr-0.5" />
                  ))}
                  {rev.stars === 4 && <Star size={18} className="text-amber-500/30" />}
                </div>

                <p className="text-sm sm:text-base text-royal-blue/80 italic leading-relaxed font-sans mb-8">
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-royal-cream-dark pt-4">
                <div>
                  <h4 className="font-sans font-extrabold tracking-wide text-royal-blue text-sm">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] text-royal-gold uppercase tracking-widest font-bold">
                    {rev.source}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-royal-gold/10 flex items-center justify-center">
                  <Star fill="currentColor" size={14} className="text-royal-gold" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VISIT US BANNER */}
      <section
        id="visit-us"
        className="bg-royal-blue text-royal-cream py-16 md:py-20 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-x-0 bottom-0 top-0 bg-royal-gold/5 blur-3xl rounded-full transform translate-y-12" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-royal-gold uppercase tracking-widest text-xs font-bold block mb-3">
            Puran Market • Paltan Bazaar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-royal-cream tracking-tight max-w-2xl mx-auto leading-tight">
            Experience Our Quality First-Hand
          </h2>
          <p className="mt-4 text-sm sm:text-base text-royal-cream/80 max-w-lg mx-auto">
            Open daily until 8:00 PM. Meet Kunal and the team to browse 100+ wholesale designs. Special offers on bulk purchases!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-royal-cream/90 max-w-lg mx-auto border-y border-royal-cream/10 py-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-royal-gold" />
              <span>073029 72997</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-royal-cream/20" />
            <div className="flex items-center space-x-2">
              <Star fill="currentColor" size={14} className="text-royal-gold" />
              <span>Aggregate 4.2★</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              id="visit-wa-cta"
              href="https://wa.me/917302972997?text=Hi,%20I'm%20planning%20to%20visit%20Kings%20Furniture.%20Please%20share%20the%20exact%20location."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-8 py-3.5 rounded-md shadow-md transition-all duration-300 text-sm tracking-wider uppercase font-sans font-bold"
            >
              <MessageSquare fill="currentColor" size={18} />
              <span>Connect on WhatsApp</span>
            </a>
            <Link
              id="visit-contact-cta"
              to="/contact"
              className="flex items-center justify-center space-x-2 bg-royal-gold hover:bg-royal-gold-hover text-royal-blue font-bold px-8 py-3.5 rounded-md shadow-md transition-all duration-300 text-sm tracking-wider uppercase"
            >
              <span>Get Directions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
