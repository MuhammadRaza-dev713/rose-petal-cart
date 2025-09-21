import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 romantic-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Where passion for fashion meets a celebration of feminine beauty and individual style.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Story Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Where Style Blooms
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 font-body text-muted-foreground">
                <p>
                  Blush & Bloom was born from a simple belief: every woman deserves to feel beautiful, 
                  confident, and authentically herself. Our journey began with a passion for creating 
                  clothing that doesn't just follow trends, but celebrates the timeless elegance that 
                  lies within every woman.
                </p>
                <p>
                  We carefully curate each piece in our collection, seeking out designs that embody 
                  romance, sophistication, and that special something that makes you feel extraordinary. 
                  From flowing fabrics that dance with your movement to delicate details that catch the light, 
                  every item tells a story of feminine grace.
                </p>
                <p>
                  Our boutique is more than just a place to shop – it's a sanctuary where style meets 
                  soul, where every woman can discover pieces that speak to her unique beauty and help 
                  her story unfold with elegance and charm.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 rounded-lg bg-card shadow-romantic">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Made with Love
                </h3>
                <p className="text-muted-foreground font-body">
                  Every piece is selected with care and attention to quality, ensuring you receive 
                  clothing that's as beautiful as it is well-made.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-card shadow-romantic">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Timeless Elegance
                </h3>
                <p className="text-muted-foreground font-body">
                  We believe in pieces that transcend seasons and trends, creating a wardrobe 
                  that grows more beautiful with time.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-card shadow-romantic">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Celebrating You
                </h3>
                <p className="text-muted-foreground font-body">
                  Our mission is to help every woman discover and express her unique style 
                  with confidence and grace.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Ready to Bloom?
              </h3>
              <p className="text-lg text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
                Discover our latest collection and find pieces that speak to your heart and celebrate your unique beauty.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 font-body font-semibold px-8 py-4 text-lg shadow-elegant"
              >
                Explore Our Collection
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;