import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingBag } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card
      className="group overflow-hidden border-0 shadow-romantic hover:shadow-elegant transition-romantic bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-80 object-cover transition-romantic group-hover:scale-105"
        />
        
        {/* Overlay with actions */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-romantic ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex space-x-3">
            <Button
              size="icon"
              className="bg-white/90 hover:bg-white text-primary shadow-elegant"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
            </Button>
            <Button
              onClick={() => onAddToCart(product)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant font-body"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Sale badge if needed */}
        {/* <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
          New
        </div> */}
      </div>

      <div className="p-4">
        <h3 className="font-heading font-medium text-lg text-foreground mb-1 group-hover:text-primary transition-romantic">
          {product.name}
        </h3>
        <p className="font-body text-primary font-semibold text-lg">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Card>
  );
};

export default ProductCard;