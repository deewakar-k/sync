import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TimeSlotData {
  defaultDuration: number;
  serviceSpecific: Record<string, number>;
}

interface TimeSlotSettingsProps {
  data: TimeSlotData;
  setData: React.Dispatch<React.SetStateAction<TimeSlotData>>;
}

export function TimeSlotSettings({ data, setData }: TimeSlotSettingsProps) {
  const [newService, setNewService] = useState({ name: "", duration: "" });

  const handleDefaultDurationChange = (duration: string) => {
    setData((prev) => ({
      ...prev,
      defaultDuration: Number.parseInt(duration),
    }));
  };

  const handleAddService = () => {
    if (newService.name && newService.duration) {
      setData((prev) => ({
        ...prev,
        serviceSpecific: {
          ...prev.serviceSpecific,
          [newService.name]: Number.parseInt(newService.duration),
        },
      }));
      setNewService({ name: "", duration: "" });
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="defaultDuration">Default Slot Duration (minutes)</Label>
        <Select onValueChange={handleDefaultDurationChange}>
          <SelectTrigger id="defaultDuration">
            <SelectValue placeholder={data.defaultDuration.toString()} />
          </SelectTrigger>
          <SelectContent>
            {[15, 30, 45, 60].map((duration) => (
              <SelectItem key={duration} value={duration.toString()}>
                {duration}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Service-Specific Durations</Label>
        <div className="flex space-x-2 mt-2">
          <Input
            placeholder="Service name"
            value={newService.name}
            onChange={(e) =>
              setNewService((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <Select
            onValueChange={(value) =>
              setNewService((prev) => ({ ...prev, duration: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
              {[15, 30, 45, 60, 90, 120].map((duration) => (
                <SelectItem key={duration} value={duration.toString()}>
                  {duration} min
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleAddService}>Add</Button>
        </div>
        <div className="mt-2">
          {Object.entries(data.serviceSpecific).map(([service, duration]) => (
            <div key={service} className="text-sm">
              {service}: {duration} minutes
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
