import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

// Step 1: Contact Information Schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

// Step 2: Shipping Information Schema
const shippingSchema = z.object({
  address: z.string().min(5, "Please enter a valid address"),
  city: z.string().min(2, "Please enter a valid city"),
  state: z.string().min(2, "Please enter a valid state"),
  zipCode: z.string().min(5, "Please enter a valid ZIP code"),
  country: z.string().min(2, "Please enter a valid country"),
  sameAsBilling: z.boolean().optional(),
});

// Step 3: Payment Information Schema
const paymentSchema = z.object({
  cardNumber: z.string().min(16, "Please enter a valid card number"),
  expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Please enter MM/YY format"),
  cvv: z.string().min(3, "Please enter a valid CVV"),
  nameOnCard: z.string().min(2, "Please enter the name on card"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type ShippingFormData = z.infer<typeof shippingSchema>;
type PaymentFormData = z.infer<typeof paymentSchema>;

interface CheckoutFormProps {
  onComplete: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [contactData, setContactData] = useState<ContactFormData | null>(null);
  const [shippingData, setShippingData] = useState<ShippingFormData | null>(null);
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const { toast } = useToast();

  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactData || {},
  });

  const shippingForm = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: shippingData || {},
  });

  const paymentForm = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });

  const handleContactSubmit = (data: ContactFormData) => {
    setContactData(data);
    setCurrentStep(2);
  };

  const handleShippingSubmit = (data: ShippingFormData) => {
    setShippingData(data);
    setCurrentStep(3);
  };

  const handlePaymentSubmit = (data: PaymentFormData) => {
    // Simulate payment processing
    toast({
      title: "Processing Payment...",
      description: "Please wait while we process your order.",
    });

    setTimeout(() => {
      clearCart();
      navigate("/success");
    }, 2000);
  };

  const goToPreviousStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Contact Information";
      case 2: return "Shipping & Billing";
      case 3: return "Payment Details";
      default: return "";
    }
  };

  return (
    <Card className="bg-card border-border shadow-romantic">
      <CardHeader>
        <CardTitle className="font-heading text-2xl text-foreground">
          {getStepTitle()}
        </CardTitle>
        <div className="flex space-x-2 mt-4">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-romantic ${
                step === currentStep
                  ? "bg-primary text-primary-foreground"
                  : step < currentStep
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {step}
            </div>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {currentStep === 1 && (
          <form onSubmit={contactForm.handleSubmit(handleContactSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-foreground font-body">Full Name</Label>
              <Input
                id="fullName"
                {...contactForm.register("fullName")}
                className="bg-input border-border focus:ring-ring"
                placeholder="Enter your full name"
              />
              {contactForm.formState.errors.fullName && (
                <p className="text-destructive text-sm mt-1">
                  {contactForm.formState.errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground font-body">Email Address</Label>
              <Input
                id="email"
                type="email"
                {...contactForm.register("email")}
                className="bg-input border-border focus:ring-ring"
                placeholder="Enter your email address"
              />
              {contactForm.formState.errors.email && (
                <p className="text-destructive text-sm mt-1">
                  {contactForm.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground font-body">Phone Number</Label>
              <Input
                id="phone"
                {...contactForm.register("phone")}
                className="bg-input border-border focus:ring-ring"
                placeholder="Enter your phone number"
              />
              {contactForm.formState.errors.phone && (
                <p className="text-destructive text-sm mt-1">
                  {contactForm.formState.errors.phone.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}

        {currentStep === 2 && (
          <form onSubmit={shippingForm.handleSubmit(handleShippingSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="address" className="text-foreground font-body">Address</Label>
              <Input
                id="address"
                {...shippingForm.register("address")}
                className="bg-input border-border focus:ring-ring"
                placeholder="Enter your street address"
              />
              {shippingForm.formState.errors.address && (
                <p className="text-destructive text-sm mt-1">
                  {shippingForm.formState.errors.address.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city" className="text-foreground font-body">City</Label>
                <Input
                  id="city"
                  {...shippingForm.register("city")}
                  className="bg-input border-border focus:ring-ring"
                  placeholder="City"
                />
                {shippingForm.formState.errors.city && (
                  <p className="text-destructive text-sm mt-1">
                    {shippingForm.formState.errors.city.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="state" className="text-foreground font-body">State</Label>
                <Input
                  id="state"
                  {...shippingForm.register("state")}
                  className="bg-input border-border focus:ring-ring"
                  placeholder="State"
                />
                {shippingForm.formState.errors.state && (
                  <p className="text-destructive text-sm mt-1">
                    {shippingForm.formState.errors.state.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="zipCode" className="text-foreground font-body">ZIP Code</Label>
                <Input
                  id="zipCode"
                  {...shippingForm.register("zipCode")}
                  className="bg-input border-border focus:ring-ring"
                  placeholder="ZIP Code"
                />
                {shippingForm.formState.errors.zipCode && (
                  <p className="text-destructive text-sm mt-1">
                    {shippingForm.formState.errors.zipCode.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="country" className="text-foreground font-body">Country</Label>
                <Input
                  id="country"
                  {...shippingForm.register("country")}
                  className="bg-input border-border focus:ring-ring"
                  placeholder="Country"
                />
                {shippingForm.formState.errors.country && (
                  <p className="text-destructive text-sm mt-1">
                    {shippingForm.formState.errors.country.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="sameAsBilling"
                {...shippingForm.register("sameAsBilling")}
                className="border-border data-[state=checked]:bg-primary"
              />
              <Label htmlFor="sameAsBilling" className="text-foreground font-body">
                Billing address same as shipping
              </Label>
            </div>

            <div className="flex space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={goToPreviousStep}
                className="flex-1 border-border text-foreground hover:bg-accent"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-body"
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        )}

        {currentStep === 3 && (
          <form onSubmit={paymentForm.handleSubmit(handlePaymentSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="nameOnCard" className="text-foreground font-body">Name on Card</Label>
              <Input
                id="nameOnCard"
                {...paymentForm.register("nameOnCard")}
                className="bg-input border-border focus:ring-ring"
                placeholder="Enter name as it appears on card"
              />
              {paymentForm.formState.errors.nameOnCard && (
                <p className="text-destructive text-sm mt-1">
                  {paymentForm.formState.errors.nameOnCard.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="cardNumber" className="text-foreground font-body">Card Number</Label>
              <Input
                id="cardNumber"
                {...paymentForm.register("cardNumber")}
                className="bg-input border-border focus:ring-ring"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
              {paymentForm.formState.errors.cardNumber && (
                <p className="text-destructive text-sm mt-1">
                  {paymentForm.formState.errors.cardNumber.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expirationDate" className="text-foreground font-body">Expiration Date</Label>
                <Input
                  id="expirationDate"
                  {...paymentForm.register("expirationDate")}
                  className="bg-input border-border focus:ring-ring"
                  placeholder="MM/YY"
                  maxLength={5}
                />
                {paymentForm.formState.errors.expirationDate && (
                  <p className="text-destructive text-sm mt-1">
                    {paymentForm.formState.errors.expirationDate.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="cvv" className="text-foreground font-body">CVV</Label>
                <Input
                  id="cvv"
                  {...paymentForm.register("cvv")}
                  className="bg-input border-border focus:ring-ring"
                  placeholder="123"
                  maxLength={4}
                />
                {paymentForm.formState.errors.cvv && (
                  <p className="text-destructive text-sm mt-1">
                    {paymentForm.formState.errors.cvv.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={goToPreviousStep}
                className="flex-1 border-border text-foreground hover:bg-accent"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-body"
              >
                Pay Now
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default CheckoutForm;