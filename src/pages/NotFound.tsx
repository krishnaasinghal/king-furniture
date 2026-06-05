import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div id="notfound-page-container" className="fade-in min-h-[90vh] flex items-center justify-center pt-24 pb-12 font-sans px-4">
      <SEO
        title="Page Not Found | Kings Furniture Dehradun"
        description="The requested page could not be located in Kings Furniture catalogue."
        path="/404"
      />

      <div className="bg-white rounded-xl shadow-2xl p-10 max-w-md w-full text-center border border-royal-blue/5">
        <div className="w-16 h-16 bg-royal-cream text-royal-gold border border-royal-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Compass size={32} className="animate-spin" />
        </div>

        <h1 className="font-serif text-3xl font-extrabold text-royal-blue mb-2.5">
          Page Not Found
        </h1>
        <p className="text-royal-blue/30 text-8xl font-serif font-extrabold block my-6 select-none">
          404
        </p>

        <p className="text-sm text-royal-blue/70 mb-8 leading-relaxed max-w-xs mx-auto">
          The requested section or resource could not be found. Let's return you back to our wholesale catalog!
        </p>

        <Link
          id="notfound-home-cta"
          to="/"
          className="w-full inline-flex items-center justify-center space-x-2 bg-royal-blue hover:bg-royal-blue-light border border-royal-gold/20 hover:border-royal-gold/60 text-royal-gold font-bold py-3.5 px-6 rounded-md shadow-md transition-all uppercase tracking-widest text-xs"
        >
          <Home size={15} />
          <span>Return To Home</span>
        </Link>
      </div>
    </div>
  );
}
