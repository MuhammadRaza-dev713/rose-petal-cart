import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";

const OrderSummary: React.FC = () => {
  const { cartItems, getCartTotal } = useCart();
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 9.99; // Free shipping over $100
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <Card className="bg-card border-border shadow-romantic sticky top-8">
      <CardHeader>
        <CardTitle className="font-heading text-xl text-foreground">
          Order Summary
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Cart Items */}
        <div className="space-y-3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded border border-border"
                />
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {item.quantity}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-body font-medium text-foreground text-sm">
                  {item.name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  ${item.price.toFixed(2)} each
                </p>
              </div>
              <div className="text-right">
                <p className="font-body font-semibold text-foreground">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground font-body">
              Your cart is empty
            </p>
          </div>
        )}

        {cartItems.length > 0 && (
          <>
            <Separator className="bg-border" />
            
            {/* Cost Breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between text-foreground">
                <span className="font-body">Subtotal</span>
                <span className="font-body">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-foreground">
                <span className="font-body">
                  Shipping 
                  {shipping === 0 && (
                    <span className="text-secondary text-xs ml-1">(Free)</span>
                  )}
                </span>
                <span className="font-body">${shipping.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-foreground">
                <span className="font-body">Tax</span>
                <span className="font-body">${tax.toFixed(2)}</span>
              </div>
            </div>

            <Separator className="bg-border" />
            
            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="font-heading font-semibold text-lg text-foreground">
                Total
              </span>
              <span className="font-heading font-bold text-xl text-primary">
                ${total.toFixed(2)}
              </span>
            </div>

            {/* Free Shipping Notice */}
            {shipping > 0 && (
              <div className="bg-secondary-soft p-3 rounded-md">
                <p className="text-secondary-foreground text-sm font-body">
                  Add ${(100 - subtotal).toFixed(2)} more to qualify for free shipping!
                </p>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default OrderSummary;