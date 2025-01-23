import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface TimeSlot {
  time: string;
  available: boolean;
  seats?: number;
}

interface TimeSlotListProps {
  slots: TimeSlot[];
  onSelectSlot: (slot: TimeSlot) => void;
}

export function TimeSlotList({ slots, onSelectSlot }: TimeSlotListProps) {
  return (
    <Card className="bg-background/50 backdrop-blur">
      <CardHeader>
        <CardTitle>Available Time Slots</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {slots.map((slot, index) => (
            <Button
              key={index}
              variant={slot.available ? "outline" : "ghost"}
              className={`w-full justify-between mb-2 ${
                slot.available
                  ? "hover:bg-primary hover:text-primary-foreground"
                  : "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => slot.available && onSelectSlot(slot)}
              disabled={!slot.available}
            >
              <span>{slot.time}</span>
              <span className="flex items-center gap-2">
                {slot.available ? (
                  <>
                    <Check className="h-4 w-4 text-green-500" />
                    {slot.seats && `${slot.seats} seats`}
                  </>
                ) : (
                  <X className="h-4 w-4 text-red-500" />
                )}
              </span>
            </Button>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
