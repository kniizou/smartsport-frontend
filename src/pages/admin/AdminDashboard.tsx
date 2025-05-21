
import { useEffect, useState } from 'react';
import { AdminRoute } from '@/components/AdminRoute';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { StatsCard } from '@/components/admin/StatsCard';
import { RecentActivitiesTable } from '@/components/admin/RecentActivitiesTable';
import { Users, Calendar, BarChart } from 'lucide-react';
import { toast } from 'sonner';

// Types pour les statistiques et activités
interface DashboardStats {
  totalUsers: number;
  totalTournaments: number;
  activeUsers: number;
  userGrowth: number;
  tournamentGrowth: number;
}

interface Activity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  status: "success" | "pending" | "error";
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalTournaments: 0,
    activeUsers: 0,
    userGrowth: 2.5,
    tournamentGrowth: 8.2,
  });
  
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Ici, vous feriez une vraie requête à votre API ou Supabase
        // Pour l'exemple, on utilise des données fictives
        setStats({
          totalUsers: 342,
          totalTournaments: 27,
          activeUsers: 186,
          userGrowth: 5.3,
          tournamentGrowth: 12.8,
        });

        setActivities([
          {
            id: "1",
            user: "john.doe@example.com",
            action: "A créé un nouveau tournoi",
            timestamp: new Date(Date.now() - 25 * 60000).toLocaleString(),
            status: "success",
          },
          {
            id: "2",
            user: "alice.smith@example.com",
            action: "S'est inscrit à un tournoi",
            timestamp: new Date(Date.now() - 55 * 60000).toLocaleString(),
            status: "success",
          },
          {
            id: "3",
            user: "bob.johnson@example.com",
            action: "A mis à jour son profil",
            timestamp: new Date(Date.now() - 120 * 60000).toLocaleString(),
            status: "success",
          },
          {
            id: "4",
            user: "emma.wilson@example.com",
            action: "A tenté de créer un tournoi",
            timestamp: new Date(Date.now() - 180 * 60000).toLocaleString(),
            status: "error",
          },
          {
            id: "5",
            user: "david.brown@example.com",
            action: "Inscription au tournoi en cours",
            timestamp: new Date(Date.now() - 10 * 60000).toLocaleString(),
            status: "pending",
          },
        ]);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des données du dashboard:', error);
        toast.error('Erreur lors du chargement des données');
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <AdminRoute>
      <div className="flex h-screen overflow-hidden bg-background">
        <AdminSidebar />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Bienvenue sur le tableau de bord administrateur.
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <StatsCard 
              title="Utilisateurs totaux" 
              value={stats.totalUsers} 
              icon={<Users />}
              trend={{ value: stats.userGrowth, positive: true }}
            />
            <StatsCard 
              title="Tournois" 
              value={stats.totalTournaments} 
              icon={<Calendar />}
              trend={{ value: stats.tournamentGrowth, positive: true }}
            />
            <StatsCard 
              title="Utilisateurs actifs" 
              value={stats.activeUsers} 
              description="Utilisateurs actifs sur les 30 derniers jours"
              icon={<BarChart />}
            />
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Activités récentes</h2>
            <RecentActivitiesTable 
              activities={activities}
              isLoading={isLoading} 
            />
          </div>
        </main>
      </div>
    </AdminRoute>
  );
};

export default AdminDashboard;
