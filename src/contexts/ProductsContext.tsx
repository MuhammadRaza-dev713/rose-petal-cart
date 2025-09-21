import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/data/products';
import { products as initialProducts } from '@/data/products';

export interface ProductVariant {
  color: string;
  size: string;
  stock: number;
}

export interface AdminProduct extends Omit<Product, 'colors' | 'sizes' | 'hoverImage'> {
  sku: string;
  tags: string[];
  variants: ProductVariant[];
  images: string[];
}

interface ProductsContextType {
  products: AdminProduct[];
  addProduct: (product: Omit<AdminProduct, 'id'>) => void;
  updateProduct: (id: string, product: Partial<AdminProduct>) => void;
  deleteProduct: (id: string) => void;
  getProduct: (id: string) => AdminProduct | undefined;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};

interface ProductsProviderProps {
  children: ReactNode;
}

// Convert initial products to admin format
const convertToAdminProducts = (products: Product[]): AdminProduct[] => {
  return products.map(product => ({
    ...product,
    sku: `SKU-${product.id.padStart(3, '0')}`,
    tags: [product.category || 'General'],
    variants: [
      { color: product.colors?.[0] || 'Default', size: product.sizes?.[0] || 'M', stock: Math.floor(Math.random() * 50) + 10 }
    ],
    images: [product.image, product.hoverImage].filter(Boolean) as string[]
  }));
};

export const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<AdminProduct[]>(convertToAdminProducts(initialProducts));

  const addProduct = (product: Omit<AdminProduct, 'id'>) => {
    const newId = (Math.max(...products.map(p => parseInt(p.id))) + 1).toString();
    const newProduct: AdminProduct = {
      ...product,
      id: newId
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: string, updatedProduct: Partial<AdminProduct>) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const getProduct = (id: string) => {
    return products.find(product => product.id === id);
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, getProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};