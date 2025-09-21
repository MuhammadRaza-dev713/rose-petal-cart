import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopAll from "./pages/ShopAll";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Navigation from "./components/Navigation";
import ShoppingCartPanel from "./components/ShoppingCartPanel";
import Footer from "./components/Footer";
import { CartProvider, useCart } from "./contexts/CartContext";
import { AdminProvider } from "./contexts/AdminContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProductList from "./pages/admin/ProductList";
import ProductForm from "./pages/admin/ProductForm";

const queryClient = new QueryClient();

const AppContent = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, updateQuantity, removeItem, getCartCount } = useCart();

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation 
          onCartClick={() => setIsCartOpen(true)} 
          cartCount={getCartCount()} 
        />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<ShopAll />} />
            <Route path="/about" element={<About />} />
            <Route path="/new-arrivals" element={<ShopAll />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<CheckoutSuccess />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/products" element={
              <ProtectedRoute>
                <ProductList />
              </ProtectedRoute>
            } />
            <Route path="/admin/products/new" element={
              <ProtectedRoute>
                <ProductForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/products/edit/:id" element={
              <ProtectedRoute>
                <ProductForm />
              </ProtectedRoute>
            } />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ShoppingCartPanel
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
        />
      </div>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AdminProvider>
          <ProductsProvider>
            <CartProvider>
              <AppContent />
            </CartProvider>
          </ProductsProvider>
        </AdminProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
