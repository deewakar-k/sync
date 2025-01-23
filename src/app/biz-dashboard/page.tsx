"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BusinessRegistration } from "./business-registration";
import { OperatingHours } from "./operating-hours";
import { TimeSlotSettings } from "./time-slot-settings";
import { AvailabilityPreview } from "./availability-preview";

export default function Dashboard() {
  const [businessData, setBusinessData] = useState({
    type: "",
    name: "",
    address: "",
  });
  const [operatingHours, setOperatingHours] = useState({});
  const [timeSlots, setTimeSlots] = useState({
    defaultDuration: 30,
    serviceSpecific: {},
  });

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Business Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Business Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <BusinessRegistration
              data={businessData}
              setData={setBusinessData}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Operating Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <OperatingHours data={operatingHours} setData={setOperatingHours} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Time Slot Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <TimeSlotSettings data={timeSlots} setData={setTimeSlots} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Availability Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <AvailabilityPreview
              businessData={businessData}
              operatingHours={operatingHours}
              timeSlots={timeSlots}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
