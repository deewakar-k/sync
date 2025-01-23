"use client";

import { useState } from "react";
import { UserProfile } from "./user-profile";
import { UpcomingAppointments } from "./upcoming-appointment";
import { AppointmentCalendar } from "./appointment-calendar";
import { TimeSlotList } from "./time-slot-list";
import { AppointmentConfirmationForm } from "./appointment-confirmation-form";

const user = {
  name: "John Doe",
  email: "john@example.com",
  avatarUrl: "/placeholder.svg?height=100&width=100",
};

const availableDates = [
  new Date(2024, 0, 15),
  new Date(2024, 0, 16),
  new Date(2024, 0, 17),
  new Date(2024, 0, 18),
  new Date(2024, 0, 19),
];

const timeSlots = [
  { time: "09:00 AM", available: true, seats: 3 },
  { time: "10:00 AM", available: false },
  { time: "11:00 AM", available: true, seats: 1 },
  { time: "12:00 PM", available: true, seats: 2 },
  { time: "01:00 PM", available: false },
  { time: "02:00 PM", available: true, seats: 4 },
  { time: "03:00 PM", available: true, seats: 2 },
  { time: "04:00 PM", available: false },
  { time: "05:00 PM", available: true, seats: 1 },
];

const upcomingAppointments = [
  { id: "1", service: "Haircut", date: "Jan 20, 2024", time: "10:00 AM" },
  { id: "2", service: "Massage", date: "Jan 25, 2024", time: "02:00 PM" },
  { id: "3", service: "Dental Checkup", date: "Feb 1, 2024", time: "11:00 AM" },
];

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined,
  );
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(undefined);
  };

  const handleTimeSelect = (slot: {
    time: string;
    available: boolean;
    seats?: number;
  }) => {
    setSelectedTime(slot.time);
    setIsConfirmationOpen(true);
  };

  const handleConfirmAppointment = (notes: string) => {
    console.log("Appointment confirmed:", {
      selectedDate,
      selectedTime,
      notes,
    });
    setIsConfirmationOpen(false);
    // Here you would typically send this data to your backend
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <UserProfile {...user} />
          <UpcomingAppointments appointments={upcomingAppointments} />
        </div>
        <div className="space-y-4">
          <AppointmentCalendar
            availableDates={availableDates}
            onSelectDate={handleDateSelect}
          />
        </div>
        <div className="space-y-4">
          {selectedDate && (
            <TimeSlotList slots={timeSlots} onSelectSlot={handleTimeSelect} />
          )}
        </div>
      </div>
      <AppointmentConfirmationForm
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        onConfirm={handleConfirmAppointment}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        selectedService="Haircut" // This would typically come from your app state
      />
    </div>
  );
}
