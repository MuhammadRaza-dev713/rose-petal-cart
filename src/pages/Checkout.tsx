import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  // Redirect to shop if cart is empty
  React.useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems.length, navigate]);

  const handleCheckoutComplete = () => {
    navigate("/success");
  };

  if (cartItems.length === 0) {
    return null; // Prevent flash of content before redirect
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-foreground hover:bg-accent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Shop
              </Button>
              <h1 className="font-heading text-3xl font-bold text-foreground">
                Checkout
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Checkout Form */}
          <div className="space-y-6">
            <CheckoutForm onComplete={handleCheckoutComplete} />
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;