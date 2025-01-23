import { Card, CardContent } from "@/components/ui/card";

type OperatingHours = {
  [day: string]: {
    open: string;
    close: string;
  } | null;
};

interface AvailabilityPreviewProps {
  businessData: {
    name: string;
    type: string;
    address: string;
  };
  operatingHours: OperatingHours;
  timeSlots: {
    defaultDuration: number;
  };
}

export function AvailabilityPreview({
  businessData,
  operatingHours,
  timeSlots,
}: AvailabilityPreviewProps) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="space-y-4">
      <div className="text-sm">
        <p>
          <strong>Business:</strong> {businessData.name} ({businessData.type})
        </p>
        <p>
          <strong>Address:</strong> {businessData.address}
        </p>
        <p>
          <strong>Default Slot Duration:</strong> {timeSlots.defaultDuration}{" "}
          minutes
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {days.map((day) => (
          <Card key={day}>
            <CardContent className="p-4">
              <h3 className="font-bold mb-2">{day}</h3>
              {operatingHours[day] ? (
                <p className="text-sm">
                  {operatingHours[day]!.open} - {operatingHours[day]!.close}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">Closed</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
