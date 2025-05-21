
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { PrivateRoute } from '@/components/PrivateRoute';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2, User, Trophy, Settings } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const UserDashboard = () => {
  const { user } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [profileForm, setProfileForm] = useState({
    username: '',
    bio: ''
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
        
      if (error) throw error;
      
      setProfile(data);
      setProfileForm({
        username: data?.username || '',
        bio: data?.bio || ''
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast.error('Échec du chargement du profil');
    } finally {
      setIsLoading(false);
    }
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;
    if (!profileForm.username.trim()) {
      toast.error('Le nom d\'utilisateur est requis');
      return;
    }
    
    setIsUpdating(true);
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          username: profileForm.username,
          bio: profileForm.bio
        })
        .eq('id', user.id);
      
      if (error) throw error;
      
      toast.success('Profil mis à jour avec succès');
      fetchProfile();
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Échec de la mise à jour du profil');
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <PrivateRoute>
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Tableau de bord utilisateur</h1>
          <p className="text-muted-foreground mt-1">
            Bienvenue sur votre espace personnel, {profile?.username || user?.email}
          </p>
        </div>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList>
            <TabsTrigger value="profile">
              <User className="mr-2 h-4 w-4" /> Profil
            </TabsTrigger>
            <TabsTrigger value="tournaments">
              <Trophy className="mr-2 h-4 w-4" /> Mes tournois
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="mr-2 h-4 w-4" /> Paramètres
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations du profil</CardTitle>
                <CardDescription>
                  Modifiez vos informations personnelles ici
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Nom d'utilisateur</Label>
                    <Input 
                      id="username" 
                      value={profileForm.username} 
                      onChange={(e) => setProfileForm(prev => ({ ...prev, username: e.target.value }))}
                      placeholder="Votre nom d'utilisateur"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Biographie</Label>
                    <Textarea 
                      id="bio" 
                      value={profileForm.bio || ''} 
                      onChange={(e) => setProfileForm(prev => ({ ...prev, bio: e.target.value }))}
                      placeholder="Une courte biographie (optionnel)"
                      className="h-32"
                    />
                  </div>
                  
                  <Button type="submit" disabled={isUpdating}>
                    {isUpdating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Mise à jour...
                      </>
                    ) : 'Enregistrer les modifications'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tournaments" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Mes tournois</CardTitle>
                <CardDescription>
                  Les tournois auxquels vous participez ou que vous avez créés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-4">Aucun tournoi trouvé</p>
                <div className="flex justify-center">
                  <Button className="mt-2">Créer un tournoi</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres du compte</CardTitle>
                <CardDescription>
                  Gérez les paramètres de votre compte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Fonctionnalités supplémentaires à venir</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PrivateRoute>
  );
};

export default UserDashboard;
