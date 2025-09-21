import React from 'react';
import { NavLink } from 'react-router-dom';
import { Package, Plus, LayoutDashboard, LogOut } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

const AdminSidebar: React.FC = () => {
  const { logout } = useAdmin();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-card border-r border-border w-64 min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-serif text-primary mb-2">Blush & Bloom</h2>
        <p className="text-sm text-muted-foreground">Admin Panel</p>
      </div>

      <nav className="space-y-2">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-accent hover:text-accent-foreground'
            }`
          }
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-accent hover:text-accent-foreground'
            }`
          }
        >
          <Package className="h-4 w-4" />
          Products
        </NavLink>

        <NavLink
          to="/admin/products/new"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-accent hover:text-accent-foreground'
            }`
          }
        >
          <Plus className="h-4 w-4" />
          Add Product
        </NavLink>
      </nav>

      <div className="mt-auto pt-8">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-md text-destructive hover:bg-destructive/10 transition-colors w-full"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;