import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant women's clothing collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in">
          Where Style Blooms
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 font-body max-w-2xl mx-auto animate-fade-in">
          Discover our curated collection of romantic, feminine pieces that celebrate your unique beauty and grace.
        </p>
        <Button
          onClick={() => navigate("/")}
          size="lg"
          className="bg-white text-primary hover:bg-white/90 font-body font-semibold px-8 py-4 text-lg shadow-elegant transition-romantic animate-gentle-bounce"
        >
          Explore the Collection
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
        <div className="w-1 h-12 bg-white/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;