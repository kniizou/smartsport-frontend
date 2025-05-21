
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard,
  Users,
  Calendar,
  Settings,
  LogOut 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const AdminSidebar = () => {
  const { signOut, user } = useAuth();

  const navItems = [
    {
      title: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
    },
    {
      title: 'Utilisateurs',
      href: '/admin/users',
      icon: Users,
    },
    {
      title: 'Tournois',
      href: '/admin/tournaments',
      icon: Calendar,
    },
    {
      title: 'Paramètres',
      href: '/admin/settings',
      icon: Settings,
    },
  ];

  return (
    <div className="h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col border-r">
      <div className="p-4">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <div className="mt-2 text-sm opacity-70">
          Connecté en tant que<br/>
          {user?.email}
        </div>
      </div>
      
      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
                end
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 mt-auto border-t">
        <button 
          onClick={() => signOut()}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-destructive hover:text-destructive-foreground transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );
};
