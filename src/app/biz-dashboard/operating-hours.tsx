import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const hours = Array.from(
  { length: 24 },
  (_, i) => i.toString().padStart(2, "0") + ":00",
);

type TimeSlot = { open: string; close: string } | null;

interface OperatingHoursProps {
  data: Record<string, TimeSlot>;
  setData: React.Dispatch<React.SetStateAction<Record<string, TimeSlot>>>;
}

export function OperatingHours({ data, setData }: OperatingHoursProps) {
  const handleToggle = (day: string, isOpen: boolean) => {
    setData((prev) => ({
      ...prev,
      [day]: isOpen ? { open: "09:00", close: "17:00" } : null,
    }));
  };

  const handleTimeChange = (
    day: string,
    type: "open" | "close",
    time: string,
  ) => {
    setData((prev) => ({ ...prev, [day]: { ...prev[day]!, [type]: time } }));
  };

  return (
    <div className="space-y-4">
      {days.map((day) => (
        <div key={day} className="flex items-center space-x-4">
          <Switch
            id={`${day}-toggle`}
            checked={!!data[day]}
            onCheckedChange={(checked: boolean) => handleToggle(day, checked)}
          />
          <Label htmlFor={`${day}-toggle`} className="w-24">
            {day}
          </Label>
          {data[day] && (
            <>
              <Select
                onValueChange={(value) => handleTimeChange(day, "open", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={data[day]?.open || "Open"} />
                </SelectTrigger>
                <SelectContent>
                  {hours.map((hour) => (
                    <SelectItem key={hour} value={hour}>
                      {hour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span>to</span>
              <Select
                onValueChange={(value) => handleTimeChange(day, "close", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={data[day]?.close || "Close"} />
                </SelectTrigger>
                <SelectContent>
                  {hours.map((hour) => (
                    <SelectItem key={hour} value={hour}>
                      {hour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
