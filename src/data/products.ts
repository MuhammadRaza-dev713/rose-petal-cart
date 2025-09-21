export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
  description?: string;
  colors?: string[];
  sizes?: string[];
  category?: string;
}

// Mock product data - in a real app, this would come from an API
export const products: Product[] = [
  {
    id: "1",
    name: "Romantic Floral Dress",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=600&fit=crop&crop=center",
    description: "A dreamy floral dress perfect for romantic occasions.",
    colors: ["Pink", "White", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Dresses"
  },
  {
    id: "2",
    name: "Soft Cashmere Sweater",
    price: 124.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop&crop=center",
    description: "Luxuriously soft cashmere sweater in delicate pastels.",
    colors: ["Blush", "Cream", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Knitwear"
  },
  {
    id: "3",
    name: "Flowing Midi Skirt",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=500&h=600&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center",
    description: "Elegant midi skirt with a romantic flowing silhouette.",
    colors: ["Rose", "Ivory", "Mint"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Skirts"
  },
  {
    id: "4",
    name: "Delicate Lace Blouse",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1564257577322-0d494f7da8a9?w=500&h=600&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&h=600&fit=crop&crop=center",
    description: "Feminine lace blouse with romantic details and vintage charm.",
    colors: ["White", "Blush", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Tops"
  },
  {
    id: "5",
    name: "Bohemian Maxi Dress",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=500&h=600&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop&crop=center",
    description: "Free-spirited maxi dress with bohemian flair and flowing fabric.",
    colors: ["Sage", "Terracotta", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Dresses"
  },
  {
    id: "6",
    name: "Elegant Silk Camisole",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&h=600&fit=crop&crop=center",
    hoverImage: "https://images.unsplash.com/photo-1564257577322-0d494f7da8a9?w=500&h=600&fit=crop&crop=center",
    description: "Luxurious silk camisole perfect for layering or wearing solo.",
    colors: ["Champagne", "Rose", "Ivory"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Tops"
  }
];