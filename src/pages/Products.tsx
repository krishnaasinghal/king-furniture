import { useState } from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data';
import SEO from '../components/SEO';

type FilterCategory = 'all' | 'beds' | 'sofas' | 'wardrobes' | 'dining' | 'office';

interface TabItem {
  key: FilterCategory;
  label: string;
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const tabs: TabItem[] = [
    { key: 'all', label: 'All' },
    { key: 'beds', label: 'Beds' },
    { key: 'sofas', label: 'Sofas' },
    { key: 'wardrobes', label: 'Wardrobes' },
    { key: 'dining', label: 'Dining Sets' },
    { key: 'office', label: 'Office Furniture' },
  ];

  // Filter products based on active categories
  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(prod => prod.category === activeCategory);

  return (
    <div id="products-page-container" className="fade-in pt-24 pb-20 font-sans">
      <SEO
        title="Furniture Collection | Kings Furniture Dehradun"
        description="Browse our wide range of beds, sofas, wardrobes, dining sets at wholesale prices. Kings Furniture, Paltan Bazaar, Dehradun."
        path="/products"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-2xl mx-auto pt-6 mb-12">
          <span className="text-royal-gold uppercase tracking-widest text-xs font-extrabold block mb-2">
            The Catalog
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-royal-blue tracking-tight">
            Wholesale Collection
          </h1>
          <p className="mt-4 text-royal-blue/70 leading-relaxed text-sm sm:text-base">
            Browse our royal comfort selections. Visit our store in Paltan Bazaar to customise your choice regarding fabric, measurements, and wood finish.
          </p>
          <div className="w-16 h-1 bg-royal-gold mx-auto mt-5 rounded-full" />
        </div>

        {/* RESPONSIVE FILTER TABS */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex space-x-1 sm:space-x-2 bg-royal-blue/5 border border-royal-blue/10 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                id={`tab-btn-${tab.key}`}
                onClick={() => setActiveCategory(tab.key)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-md transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-royal-gold ${
                  activeCategory === tab.key
                    ? 'bg-royal-blue text-royal-gold font-bold shadow-sm'
                    : 'text-royal-blue hover:text-royal-gold hover:bg-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS COUNT FEEDBACK */}
        <div className="mb-8 text-xs text-royal-blue/60 tracking-wider text-right font-medium">
          Showing {filteredProducts.length} of {PRODUCTS.length} premium products
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <article
                key={prod.id}
                id={`cat-product-card-${prod.id}`}
                className="bg-white rounded-lg overflow-hidden border border-royal-blue/5 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Image layout container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-royal-cream-dark">
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
                    <span className="bg-royal-blue/95 border border-royal-gold/30 text-royal-gold-light text-[10px] tracking-wider uppercase font-extrabold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                      {prod.category === 'dining' ? 'Dining Set' : prod.category === 'office' ? 'Office Furniture' : prod.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs uppercase tracking-widest text-royal-gold font-bold font-sans mb-1.5 inline-block">
                    {prod.priceType}
                  </span>
                  <h2 className="font-serif text-xl font-bold text-royal-blue mb-2.5 truncate">
                    {prod.name}
                  </h2>
                  <p className="text-sm text-royal-blue/70 mb-6 leading-relaxed font-sans line-clamp-3">
                    {prod.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-royal-cream-dark">
                    <a
                      id={`enquiry-whatsapp-btn-${prod.id}`}
                      href={`https://wa.me/917302972997?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(prod.name)}%20from%20Kings%20Furniture`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-sans font-extrabold py-3.5 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <MessageSquare fill="currentColor" size={18} />
                      <span className="text-sm tracking-wide uppercase">Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-lg border border-royal-blue/5">
            <p className="text-lg text-royal-blue/60 font-serif">No products found in this category.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="mt-4 text-royal-gold hover:text-royal-blue font-bold flex items-center justify-center mx-auto space-x-2 text-sm uppercase"
            >
              <span>Show All Products</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
