import { IMAGES } from './assets';
import { Product, Review, FeatureCard, GalleryItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-bed-1',
    name: 'Royal Hexagonal Wing Double Bed',
    category: 'beds',
    image: IMAGES.luxuryBed,
    priceType: 'Wholesale Price Available',
    description: 'A masterpiece of royal comfort. Features a custom hexagonal wingback headboard in premium purple-grey plush velvet, a matching footrest bench, and dual bedside cabinets with mirrors.',
    alt: 'Royal plush double bed with a purple-grey hexagonal padded headboard, matching footrest bench, and geometric styling'
  },
  {
    id: 'prod-sofa-1',
    name: 'Imperial Velvet L-Shape Corner Sofa',
    category: 'sofas',
    image: IMAGES.purpleSofa,
    priceType: 'Best Wholesale Price',
    description: 'Bespoke royal purple velvet corner sectional sofa. Engineered with highly resilient foam, plush matching throw pillows, and gold-plated titanium legs, coupled with a luxury burl wood top coffee table.',
    alt: 'Luxury L-shape purple velvet sofa with golden sleek legs and white soft accent cushions'
  },
  {
    id: 'prod-dining-1',
    name: 'Modern Quartz Marble Dining Set',
    category: 'dining',
    image: IMAGES.diningTable,
    priceType: 'Wholesale Price Available',
    description: 'Magnificent dining set featuring a solid white marble top table with gold electroplated double-cylinder legs. Accompanied by 6 premium diamond-stitched beige chairs with high backs and gold tipped feet.',
    alt: 'Modern dining table set with white quartz marble top, polished gold posts, and premium camel-beige chairs'
  },
  {
    id: 'prod-sofa-2',
    name: 'Chesterfield Tufted Beige Leather Sofa Set',
    category: 'sofas',
    image: IMAGES.sofaOutdoor,
    priceType: 'Wholesale Price Available',
    description: 'Classic elegance meet modern durability. This cream-beige sofa set boasts deep diamond tufting, thick rounded padded arms with wooden rim lines, and heavy-duty wear resistant leather upholstery.',
    alt: 'Beige leather luxury sofa set displayed outside Kings Furniture showroom under bright daylight'
  },
  {
    id: 'prod-wardrobe-1',
    name: 'Bespoke LED Glass Sliding Wardrobe',
    category: 'wardrobes',
    image: IMAGES.luxuryWardrobe,
    priceType: 'Wholesale Price Available',
    description: 'Sleek floor-to-ceiling multi-door sliding wardrobe crafted from seasoned dark teak wood. Features brass gold recessed handles and premium interior sensory LED strip lights profiling.',
    alt: 'Luxury dark wood multi-compartment sliding wardrobe with built-in warm LED profile illumination'
  },
  {
    id: 'prod-office-1',
    name: 'Ergonomic Gas-Lift Luxury Bar Stool',
    category: 'office',
    image: IMAGES.barStool,
    priceType: 'Call for Price',
    description: 'High-end wooden swivel counter bar stool featuring smooth 360-degree rotation, pneumatically adjustable gas-lift cylinder, gold chromed pedestal base, footrest, and cozy white cushion pad.',
    alt: 'Modern workspace bar stool with curved walnut wood shell and high contrast white padded leather seat on gold column'
  },
  {
    id: 'prod-office-2',
    name: 'Elite Power Recliner Armchair',
    category: 'office',
    image: IMAGES.leatherRecliner,
    priceType: 'Best Wholesale Price',
    description: 'Indulge in absolute comfort with our thick-padded premium dark brown leather electric power recliner. Equipped with heavy-duty steel reclining mechanics and ergonomic lumber support arches.',
    alt: 'Premium dark brown leather electric power recliner armchair with extra-comfort double arm padding'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    stars: 5,
    text: 'Had a great experience. Special thanks to Kunal — very genuine and helpful person. Made the whole buying process smooth and comfortable.',
    author: 'Manish Pant',
    source: 'Google Review'
  },
  {
    id: 'rev-2',
    stars: 5,
    text: 'I just love Kings Furniture — high quality furniture at reasonable prices. Staff was really helpful and patient throughout.',
    author: 'Raksha Joshi',
    source: 'Google Review'
  },
  {
    id: 'rev-3',
    stars: 4,
    text: 'Nice collection with genuine price and wide variety of furniture.',
    author: 'Google Review',
    source: 'Google Maps'
  }
];

export const FEATURES: FeatureCard[] = [
  {
    id: 'feat-1',
    title: 'Wide Variety',
    description: 'From luxury double beds and L-shaped velvet sofas to premium sliding wardrobes, dining table sets, and ergonomic office options.',
    iconName: 'Layers'
  },
  {
    id: 'feat-2',
    title: 'Genuine Prices',
    description: 'Direct-from-manufacturer wholesale rates that eliminate middlemen markup, offering unmatched pocket-friendly prices in Paltan Bazaar.',
    iconName: 'Tag'
  },
  {
    id: 'feat-3',
    title: 'Quality Designs',
    description: 'All furniture is sculpted using certified robust woods, high-resilience foam, thick rust-proof gold chrome details, and premium fabric.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'feat-4',
    title: 'Helpful Staff',
    description: 'Enjoy a stress-free experience led by Kunal and our sizing experts with personalized recommendations for color, wood type, and dimensions.',
    iconName: 'Smile'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    image: IMAGES.shopFront,
    title: 'Kings Furniture Showroom Elevation',
    category: 'showroom',
    alt: 'Modern high storefront building of Kings Furniture Dehradun with glossy metallic facade and bright light fixtures'
  },
  {
    id: 'gal-2',
    image: IMAGES.luxuryBed,
    title: 'Kingsize Hexagonal Wing Bed Set',
    category: 'beds',
    alt: 'Elegant king-size bed layout featuring hexagonal tufted velvet winged headboard and footrest bench'
  },
  {
    id: 'gal-3',
    image: IMAGES.purpleSofa,
    title: 'Imperial Purple Sectional Suite',
    category: 'sofas',
    alt: 'Royal velvet corner lounge sofa in purple color with sleek round coffee table and gold legs'
  },
  {
    id: 'gal-4',
    image: IMAGES.diningTable,
    title: 'Quartz Marble Gold Dining Collection',
    category: 'dining',
    alt: 'Marble top tables with custom circular gold legs and high back cream tufted dining chairs'
  },
  {
    id: 'gal-5',
    image: IMAGES.sofaOutdoor,
    title: 'Chesterfield Styled Tufted Sofa',
    category: 'sofas',
    alt: 'Durable and cozy cream-beige leather modular sofa set with elegant detailing'
  },
  {
    id: 'gal-6',
    image: IMAGES.luxuryWardrobe,
    title: 'Teak sliding Wardrobe with LED Profiling',
    category: 'wardrobes',
    alt: 'Dark teak slide doors wardrobe system showcasing warm LED closet lights grid'
  },
  {
    id: 'gal-7',
    image: IMAGES.barStool,
    title: 'Retro-Modern Walnut Wood Counter Stool',
    category: 'office',
    alt: 'Swivel bar stool made of bent dark wood veneer and clean white leather upholstery'
  },
  {
    id: 'gal-8',
    image: IMAGES.leatherRecliner,
    title: 'Plush Leather Electrical Recliner',
    category: 'office',
    alt: 'Thick brown real-leather power recliner chair perfect for executive office or lounge relaxation'
  }
];
