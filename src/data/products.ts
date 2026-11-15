
import type { Product } from '../types';

export const jewelleryMenu: Record<string, string[]> = {
  NECKLACE: ['Bolo', 'Chain Bracelet', 'Chain Necklace', 'Cluster', 'Drop', 'Fashion', 'Flexible', 'J Bali', 'Light Necklace', 'Solitaire'],
  PENDANT: ['Chain Necklace', 'Drop', 'Fashion', 'Loop Pendant', 'Slider', 'Solitaire'],
  MANGALSUTRA: ['Chain Necklace', 'Fashion', 'Mangalsutra', 'Slider', 'Solitaire'],
  EARRING: ['Cluster', 'Drop', 'Fashion', 'Hoop', 'J Bali', 'Long Earring', 'Oval', 'Semi Mount', 'Solitaire', 'Stud'],
  RING: ['Band', 'Bridal', 'Cluster', 'Cocktail', 'Crossover', 'Engagement', 'Eternity', 'Fashion', 'Invisible', 'Oval', 'Semi Mount', 'Slider', 'Solitaire', 'Stud'],
  BRACELET: ['Bolo', 'Bridal', 'Chain Bracelet', 'Chain Necklace', 'Fashion', 'Loop Pendant', 'Loose', 'Tennis'],
  BANGLE: ['Chain Bracelet', 'Cluster', 'Fashion', 'Oval', 'Pipe'],
};

export const collections = [
  'Arch', 'Baby Stud', 'Black Diamond', 'Bliss',
  'Blue Sapphire Ring', 'Bubble 1.0', 'Chain Bracelet',
  'Charm Bracelet', 'Clover', 'Coffee Diamond',
  'Colour Candy', 'Connection', 'Cross Over', 'Damayanti',
  'Dancing Lariyat', 'Drizzle', 'Duo', 'Fancy Diamond Set',
  'Fancy Mangalsutra', 'Floral 2', 'Florina', 'Florina 2',
  'Flow', 'Frame', 'Fusion', 'Gemtastic', 'Geometry',
  'Geometry Shape', 'Happy', 'Honey Bee', 'Initial Letter',
  'Lariyat', 'Linear', 'Link', 'Liquid Lines', 'Love Beats',
  'Love Knot', 'Margaretha', 'Margaretha Sapphire',
  "Men’s Pendant", "Men’s Solitaire Ring",
  'Mysterious Garden', 'Nagin', 'Ocean Life', 'Olivia',
  'Ombre', 'Only You', 'Petali', 'Princess Ring',
  'Princess Semi Mount', 'Radiant Elegance',
  'Radiant Essence', 'Radiant Essence 2', 'Rainbow',
  'Single Halo', 'Space', 'Sphere', 'Squirrel Bridal',
  'Star Dust', 'Station Necklace', 'Sugar',
  'The Polaris Edit', 'The Water Lily', 'Thematic',
  'Tiny Avatar',
];

export const products: Product[] = [
  {
    name: 'The Interlace Pendant',
    code: 'PLP-19443WHT',
    category: 'Pendant',
    tone: 'white',
     image: "/pd1.png",
  },
  {
    name: 'The Interlace Earring',
    code: 'PLE-19444WHT',
    category: 'Earring',
    tone: 'rose',
     image: "/pd2.png",
  },
  {
    name: 'The Triune Band',
    code: 'PLR-19442WHT',
    category: 'Ring',
    tone: 'gold',
     image: "/pd3.png",
  },
  {
    name: 'Petali Diamond Ring',
    code: 'PJR-39217WHT',
    category: 'Ring',
    tone: 'champagne',
     image: "/pd4.png",
  },
  {
    name: 'Halo Drop Pendant',
    code: 'PJP-38607WHT',
    category: 'Pendant',
    tone: 'silver',
     image: "/pd5.png",
  },
   {
    name: 'Halo Drop Pendant',
    code: 'PJP-38607WHT',
    category: 'Pendant',
    tone: 'silver',
     image: "/pd6.png",
  },
];

export const categories = [
  'All',
  'Necklace',
  'Pendant',
  'Ring',
  'Earring',
  'Bracelet',
];
