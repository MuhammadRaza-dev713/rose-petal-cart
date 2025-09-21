import React from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { useProducts } from '@/contexts/ProductsContext';
import { Package, ShoppingBag, DollarSign, TrendingUp } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { products } = useProducts();

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, product) => 
    sum + product.variants.reduce((variantSum, variant) => variantSum + variant.stock, 0), 0
  );
  const averagePrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;

  return (
    <div className="flex min-h-screen bg-background mt-16">
      <AdminSidebar />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif text-primary mb-2">Welcome to Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your Blush & Bloom inventory and orders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Products</p>
                <p className="text-2xl font-bold text-primary">{totalProducts}</p>
              </div>
              <Package className="h-8 w-8 text-primary/60" />
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Stock</p>
                <p className="text-2xl font-bold text-primary">{totalStock}</p>
              </div>
              <ShoppingBag className="h-8 w-8 text-primary/60" />
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Price</p>
                <p className="text-2xl font-bold text-primary">${averagePrice.toFixed(2)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-primary/60" />
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Categories</p>
                <p className="text-2xl font-bold text-primary">4</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary/60" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-medium mb-4">Recent Products</h3>
            <div className="space-y-3">
              {products.slice(0, 5).map((product) => (
                <div key={product.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">${product.price}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{product.sku}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-medium mb-4">Low Stock Alerts</h3>
            <div className="space-y-3">
              {products
                .filter(product => 
                  product.variants.some(variant => variant.stock < 10)
                )
                .slice(0, 5)
                .map((product) => (
                  <div key={product.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.sku}</p>
                      </div>
                    </div>
                    <span className="text-sm text-destructive font-medium">
                      {Math.min(...product.variants.map(v => v.stock))} left
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;