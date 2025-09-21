import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import HeroSection from "@/components/HeroSection";
import { products, Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

interface ShopAllProps {
  onAddToCart?: (product: Product) => void;
}

const ShopAll = ({ onAddToCart }: ShopAllProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { addToCart } = useCart();
  
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const categories = ["All", "Dresses", "Tops", "Knitwear", "Skirts"];
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Product Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Beautiful Collection
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Carefully curated pieces that celebrate femininity and grace. Each item is selected for its quality, beauty, and timeless appeal.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-body font-medium transition-romantic ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-romantic"
                    : "bg-card text-foreground hover:bg-primary-soft border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopAll;