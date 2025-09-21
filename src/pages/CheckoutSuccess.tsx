import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ShoppingBag, Heart } from "lucide-react";

const CheckoutSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="max-w-md w-full bg-card border-border shadow-elegant">
        <CardContent className="p-8 text-center space-y-6">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-secondary-foreground" />
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-2">
            <h1 className="font-heading text-3xl font-bold text-foreground">
              Thank You!
            </h1>
            <p className="text-muted-foreground font-body text-lg">
              Your order has been successfully placed
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-primary-soft p-4 rounded-lg space-y-2">
            <div className="flex items-center justify-center space-x-2 text-primary-foreground">
              <Heart className="w-4 h-4" />
              <span className="font-body text-sm">
                Order confirmation sent to your email
              </span>
            </div>
            <p className="text-primary-foreground/80 font-body text-xs">
              We'll notify you when your items are on their way!
            </p>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <p className="text-foreground font-body">
              Your beautiful pieces from Blush and Bloom are being carefully prepared for you.
            </p>
            <p className="text-muted-foreground font-body text-sm">
              Expected delivery: 3-5 business days
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => navigate("/")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
            
            <Button
              variant="outline"
              onClick={() => navigate("/about")}
              className="w-full border-border text-foreground hover:bg-accent font-body"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Decorative Element */}
          <div className="pt-4">
            <p className="text-muted-foreground font-body text-xs italic">
              "Where style blooms and dreams come true"
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutSuccess;