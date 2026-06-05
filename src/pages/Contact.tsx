import { useState, FormEvent } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, Star } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'beds',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Simulate API or client storage log submission
    console.log('Submission accepted:', formData);
    setSubmitStatus('success');
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', interest: 'beds', message: '' });
    setSubmitStatus('idle');
  };

  const categoriesOption = [
    { value: 'beds', name: 'Plush Beds & Bedrooms' },
    { value: 'sofas', name: 'Luxury L-Shape Sofas' },
    { value: 'wardrobes', name: 'Modular sliding Wardrobes' },
    { value: 'dining', name: 'Quartz Marble Dining Sets' },
    { value: 'office', name: 'Premium Office & Stools' },
    { value: 'custom', name: 'Custom Dynamic Inquiries' }
  ];

  return (
    <div id="contact-page-container" className="fade-in pt-24 pb-20 font-sans">
      <SEO
        title="Contact Kings Furniture | Paltan Bazaar Dehradun"
        description="Contact Kings Furniture at 37 Moti Bazaar, Paltan Bazaar, Dehradun. Call 073029 72997. Open daily till 8 PM."
        path="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-2xl mx-auto pt-6 mb-16">
          <span className="text-royal-gold uppercase tracking-widest text-xs font-extrabold block mb-2">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-royal-blue tracking-tight">
            Contact Kings Furniture
          </h1>
          <p className="mt-4 text-royal-blue/70 leading-relaxed text-sm sm:text-base">
            Have a question or looking to customize a piece? Submit your enquiry or send us a quick WhatsApp. Our dealer Kunal will guide you!
          </p>
          <div className="w-16 h-1 bg-royal-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* CONTACT MAIN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          
          {/* COLUMN 1: FORM (COLLUMN SPAN 7) */}
          <section id="contact-form-section" className="lg:col-span-7 bg-white rounded-xl shadow-xl p-8 border border-royal-blue/5">
            <h2 className="font-serif text-2xl font-bold text-royal-blue mb-2.5">
              Service Enquiry Form
            </h2>
            <p className="text-royal-blue/60 text-sm mb-6 leading-relaxed">
              Wholesale inquiries and bulk buyers are highly welcome. Complete this form to receive detailed pricing options.
            </p>

            {submitStatus === 'success' ? (
              <div id="enquiry-success" className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-lg text-center font-sans space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-serif text-2xl font-bold">Enquiry Registered!</h3>
                <p className="text-sm max-w-md mx-auto text-emerald-700/90 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your demand has been securely stored. Kunal and our sizing experts will phone you within 2-4 working hours!
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    id="submit-wa-followup"
                    href={`https://wa.me/917302972997?text=Hi,%20I'm%20${encodeURIComponent(formData.name)}.%20I%20just%20submitted%20an%20enquiry%20form%20on%20your%20website%20for%20a%20${encodeURIComponent(formData.interest)}%20piece.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold px-5 py-3 rounded-md transition-all shadow-md font-sans"
                  >
                    <MessageSquare fill="currentColor" size={16} />
                    <span>WhatsApp Follow-up</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="bg-royal-blue/10 hover:bg-royal-blue/20 text-royal-blue text-xs font-bold px-5 py-3 rounded-md transition-all"
                  >
                    New Submission
                  </button>
                </div>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="form-name" className="text-xs uppercase tracking-wider text-royal-blue/70 font-extrabold focus:outline-shadow">
                      Full Name <span className="text-royal-gold">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Manish Pant"
                      className="bg-royal-cream/50 hover:bg-royal-cream border border-royal-blue/10 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold p-3.5 rounded-md text-sm text-royal-blue placeholder-royal-blue/40 focus:outline-none transition-all placeholder:text-xs"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="form-phone" className="text-xs uppercase tracking-wider text-royal-blue/70 font-extrabold">
                      Contact Number <span className="text-royal-gold">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g., 073029 72997"
                      className="bg-royal-cream/50 hover:bg-royal-cream border border-royal-blue/10 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold p-3.5 rounded-md text-sm text-royal-blue placeholder-royal-blue/40 focus:outline-none transition-all placeholder:text-xs"
                    />
                  </div>
                </div>

                {/* Dropdown for Interest */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="form-interest" className="text-xs uppercase tracking-wider text-royal-blue/70 font-extrabold">
                    Product Category Interested In
                  </label>
                  <select
                    id="form-interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="bg-royal-cream/50 hover:bg-royal-cream border border-royal-blue/10 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold p-3.5 rounded-md text-sm text-royal-blue focus:outline-none transition-all cursor-pointer"
                  >
                    {categoriesOption.map((opt) => (
                      <option key={opt.value} value={opt.value} className="text-royal-blue py-1">
                        {opt.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Box */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="form-message" className="text-xs uppercase tracking-wider text-royal-blue/70 font-extrabold">
                    Enquiry Details or Measurements
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe custom sizes, styles, or specific items from our gallery..."
                    className="bg-royal-cream/50 hover:bg-royal-cream border border-royal-blue/10 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold p-3.5 rounded-md text-sm text-royal-blue placeholder-royal-blue/40 focus:outline-none transition-all placeholder:text-xs"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="form-submit-btn"
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-royal-blue hover:bg-royal-blue-light border border-royal-gold/20 hover:border-royal-gold/60 text-royal-gold font-bold py-4 px-6 rounded-md shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 tracking-widest text-xs uppercase"
                >
                  <Send size={15} />
                  <span>Register Enquiry</span>
                </button>
              </form>
            )}
          </section>

          {/* COLUMN 2: CONTACT DETAILS INFO (SPANS 5) */}
          <section id="contact-info-section" className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Info Card */}
            <div className="bg-royal-blue text-royal-cream rounded-xl p-8 border border-royal-gold/20 shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-royal-gold uppercase tracking-widest text-xs font-bold block mb-4">
                  Kings Furniture
                </span>
                <h3 className="font-serif text-2xl font-bold mb-6 text-royal-cream">
                  Showroom Contacts
                </h3>

                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <MapPin className="text-royal-gold shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="text-xs uppercase text-royal-cream/50 tracking-wider font-extrabold mb-1">
                        Showroom Address
                      </h4>
                      <p className="text-sm font-sans text-royal-cream/90 leading-relaxed font-semibold">
                        37, Moti Bazar, Puran Market, Paltan Bazaar, Dehradun, Uttarakhand 248001
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <Phone className="text-royal-gold shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="text-xs uppercase text-royal-cream/50 tracking-wider font-extrabold mb-1">
                        Call / Trade Enquiries
                      </h4>
                      <p className="text-sm font-sans font-semibold">
                        <a href="tel:+917302972997" className="text-royal-cream hover:text-royal-gold transition-colors text-base font-bold">
                          +91 73029 72997
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <Clock className="text-royal-gold shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="text-xs uppercase text-royal-cream/50 tracking-wider font-extrabold mb-1">
                        Operational Hours
                      </h4>
                      <p className="text-sm font-sans text-royal-cream/90 leading-relaxed font-semibold">
                        Open Daily: 9:00 AM – 8:00 PM <br />
                        <span className="text-royal-gold text-[10px] uppercase font-bold tracking-wider inline-block mt-0.5">
                          Women-Owned Wholesaler Store
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Direct WhatsApp Call banner inside info block */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  id="info-wa-btn"
                  href="https://wa.me/917302972997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#1fba56] text-white font-sans font-extrabold py-3 px-4 rounded-md shadow-md text-xs uppercase"
                >
                  <MessageSquare fill="currentColor" size={16} />
                  <span>Start Live Chat</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* GOOGLE MAPS EMBED SECTION */}
        <section id="google-maps" className="rounded-xl overflow-hidden shadow-2xl border border-royal-blue/5">
          <div className="p-5 bg-white border-b border-royal-blue/5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="text-royal-gold" size={18} />
              <span className="font-serif font-bold text-royal-blue text-sm">Paltan Bazaar Location Hub</span>
            </div>
            <div className="flex items-center space-x-2 text-[11px] text-royal-blue/50">
              <Star fill="currentColor" size={12} className="text-amber-500" />
              <span>Google Maps Direction Verified</span>
            </div>
          </div>
          {/* Iframe embed */}
          <div className="relative aspect-video max-h-[450px] w-full">
            <iframe
              title="Kings Furniture Showroom Location Map in Paltan Bazaar Dehradun"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.7107758364893!2d78.04026367584144!3d30.322184174786376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092994f27d9285%3A0xe5a305f884bf6e72!2s37%2C%20Moti%20Bazar%20Rd%2C%20Moti%20Bazar%2C%20Paltan%20Bazaar%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1780658055450!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
