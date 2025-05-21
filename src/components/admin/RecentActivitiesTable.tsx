
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Activity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  status: "success" | "pending" | "error";
}

interface RecentActivitiesTableProps {
  activities: Activity[];
  isLoading?: boolean;
}

export const RecentActivitiesTable = ({
  activities,
  isLoading = false,
}: RecentActivitiesTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Utilisateur</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4">
                Chargement des activités...
              </TableCell>
            </TableRow>
          ) : activities.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4">
                Aucune activité récente
              </TableCell>
            </TableRow>
          ) : (
            activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>{activity.timestamp}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      activity.status === "success"
                        ? "bg-green-100 text-green-800"
                        : activity.status === "error"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {activity.status === "success"
                      ? "Réussi"
                      : activity.status === "error"
                      ? "Erreur"
                      : "En cours"}
                  </span>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
