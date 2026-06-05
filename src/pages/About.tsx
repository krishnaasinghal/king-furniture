import { ShieldCheck, Heart, UserCheck, Star, Award, Layers } from 'lucide-react';
import { IMAGES } from '../assets';
import SEO from '../components/SEO';

export default function About() {
  const values = [
    {
      title: 'Uncompromising Quality',
      desc: 'We construct all furnishings using carefully chosen seasoned teak wood, premium plywoods, rust-proof electroplated metals, and wear-resistant velvet/leather fabrics.',
      icon: <ShieldCheck size={28} className="text-royal-gold" />
    },
    {
      title: 'Affordability First',
      desc: 'Trading directly with state manufacturers enables us to remove distributors and commissions, providing real wholesale-pricing rates to Dehradun families.',
      icon: <Award size={28} className="text-royal-gold" />
    },
    {
      title: 'Customer-First Trust',
      desc: 'Our work depends entirely on client satisfaction. Spearheaded by Kunal, we ensure transparent transactions, customization advice, and reliable delivery services.',
      icon: <Heart size={28} className="text-royal-gold" />
    }
  ];

  return (
    <div id="about-page-container" className="fade-in pt-24 pb-20 font-sans">
      <SEO
        title="About Us | Kings Furniture — Women-Owned Furniture Wholesaler Dehradun"
        description="Learn about Kings Furniture — a women-owned furniture wholesaler in Dehradun's Paltan Bazaar offering quality furniture at genuine prices."
        path="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-2xl mx-auto pt-6 mb-16">
          <span className="text-royal-gold uppercase tracking-widest text-xs font-extrabold block mb-2 animate-pulse">
            Our Story & Heritage
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-royal-blue tracking-tight">
            About Kings Furniture
          </h1>
          <p className="mt-4 text-royal-blue/70 leading-relaxed text-sm sm:text-base">
            Delivering royal comfort, elegant geometries, and wholesale affordability to Uttarakhand homes.
          </p>
          <div className="w-16 h-1 bg-royal-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* CONTENT STORY GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 border-2 border-royal-gold translate-x-3 translate-y-3 rounded-lg z-0" />
            <img
              src={IMAGES.shopFront}
              alt="Kings Furniture Storefront Puran Market outer signage board"
              referrerPolicy="no-referrer"
              width={500}
              height={600}
              className="relative z-10 rounded-lg shadow-xl w-full object-cover aspect-[4/5]"
            />
          </div>

          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6 text-royal-blue">
            <span className="text-xs uppercase tracking-widest font-extrabold text-royal-gold bg-royal-gold/10 px-3.5 py-1.5 rounded-full inline-block">
              Est. Dehradun, Uttarakhand
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight">
              A Trusted Traditional Wholesaler In Paltan Bazaar
            </h2>
            <p className="text-sm sm:text-base text-royal-blue/80 leading-relaxed">
              Located at <strong>37 Moti Bazar near Puran Market in Paltan Bazaar</strong>, Kings Furniture (किंग्स फर्नीचर) has served as Dehradun's landmark for beautiful designs, luxury L-shaped sectionals, high-cushioned storage beds, and premium custom wardrobes.
            </p>
            <p className="text-sm sm:text-base text-royal-blue/80 leading-relaxed">
              As a proud <strong>women-owned and operated enterprise</strong>, we hold ourselves to a standard of absolute integrity and customer focus. We believe that elegant, space-age, high-comfort furniture shouldn't carry an inflated premium price tag.
            </p>
            
            {/* Dealer Mention */}
            <div className="bg-royal-gold/10 border-l-4 border-royal-gold p-6 rounded-r-lg flex items-start space-x-4 mt-6">
              <UserCheck size={36} className="text-royal-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-lg font-bold">Personalized Support By Kunal</h4>
                <p className="text-sm text-royal-blue/80 leading-relaxed mt-1">
                  At Kings Furniture, you are not dealing with pushy salespeople. Our valued customers consistently praise <strong>Kunal</strong>, a genuine, helpful, and highly patient consultant who makes the choosing and buying process incredibly smooth and stress-free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED STATISTICS ROW */}
        <section className="bg-royal-blue rounded-xl p-8 md:p-12 text-royal-cream text-center shadow-xl border border-royal-gold/20 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Star fill="currentColor" className="text-royal-gold mb-3 animate-spin duration-1000" size={32} />
              <span className="text-2xl md:text-3xl font-serif font-extrabold text-royal-gold">4.2★ Rating</span>
              <span className="text-xs text-royal-cream/60 mt-1 uppercase tracking-widest font-semibold">Active Google Score</span>
            </div>
            <div className="flex flex-col items-center border-l-0 md:border-l border-white/10">
              <UserCheck className="text-royal-gold mb-3" size={32} />
              <span className="text-2xl md:text-3xl font-serif font-extrabold text-royal-gold">40+ Reviews</span>
              <span className="text-xs text-royal-cream/60 mt-1 uppercase tracking-widest font-semibold">Verified Feedback</span>
            </div>
            <div className="flex flex-col items-center border-l-0 md:border-l border-white/10">
              <Award className="text-royal-gold mb-3" size={32} />
              <span className="text-2xl md:text-3xl font-serif font-extrabold text-royal-gold">Wholesale</span>
              <span className="text-xs text-royal-cream/60 mt-1 uppercase tracking-widest font-semibold">Unmatched Prices</span>
            </div>
            <div className="flex flex-col items-center border-l-0 md:border-l border-white/10">
              <Layers className="text-royal-gold mb-3" size={32} />
              <span className="text-2xl md:text-3xl font-serif font-extrabold text-royal-gold">Paltan Bazaar</span>
              <span className="text-xs text-royal-cream/60 mt-1 uppercase tracking-widest font-semibold">Heart of Dehradun</span>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section id="values-grid">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-royal-gold uppercase tracking-widest text-xs font-bold block mb-2">
              Our Foundations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-royal-blue font-bold tracking-tight">
              Values We Stand For
            </h3>
            <div className="w-12 h-0.5 bg-royal-gold mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-8 border border-royal-blue/5 shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-royal-cream border border-royal-gold/10 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h4 className="font-serif text-lg font-bold text-royal-blue mb-3">
                  {val.title}
                </h4>
                <p className="text-sm text-royal-blue/70 leading-relaxed font-sans">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
