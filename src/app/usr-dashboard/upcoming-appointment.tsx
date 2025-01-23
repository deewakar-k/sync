import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CalendarDays } from "lucide-react";

interface Appointment {
  id: string;
  service: string;
  date: string;
  time: string;
}

interface UpcomingAppointmentsProps {
  appointments: Appointment[];
}

export function UpcomingAppointments({
  appointments,
}: UpcomingAppointmentsProps) {
  return (
    <Card className="bg-background/50 backdrop-blur">
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] pr-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="mb-4 flex items-center space-x-4 rounded-md border p-4"
            >
              <CalendarDays className="h-6 w-6 flex-shrink-0 text-primary" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{appointment.service}</p>
                <p className="text-xs text-muted-foreground">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
