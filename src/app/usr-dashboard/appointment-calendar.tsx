import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AppointmentCalendarProps {
  availableDates: Date[];
  onSelectDate: (date: Date | undefined) => void;
}

export function AppointmentCalendar({
  availableDates,
  onSelectDate,
}: AppointmentCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    onSelectDate(newDate);
  };

  return (
    <Card className="bg-background/50 backdrop-blur">
      <CardHeader>
        <CardTitle>Select a Date</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          className="rounded-md border"
          modifiers={{
            available: availableDates,
          }}
          modifiersStyles={{
            available: { color: "var(--primary)", fontWeight: "bold" },
          }}
        />
      </CardContent>
    </Card>
  );
}
