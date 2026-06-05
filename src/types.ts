export interface Product {
  id: string;
  name: string;
  category: 'beds' | 'sofas' | 'wardrobes' | 'dining' | 'office';
  image: string;
  priceType: 'Wholesale Price Available' | 'Call for Price' | 'Best Wholesale Price';
  description: string;
  alt: string;
}

export interface Review {
  id: string;
  stars: number;
  text: string;
  author: string;
  source: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  alt: string;
}
