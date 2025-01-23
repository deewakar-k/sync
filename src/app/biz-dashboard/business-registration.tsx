import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BusinessRegistrationProps {
  data: Record<string, string>;
  setData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export function BusinessRegistration({
  data,
  setData,
}: BusinessRegistrationProps) {
  const handleChange = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="businessType">Business Type</Label>
        <Select onValueChange={(value) => handleChange("type", value)}>
          <SelectTrigger id="businessType">
            <SelectValue placeholder="Select business type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="salon">Salon</SelectItem>
            <SelectItem value="clinic">Clinic</SelectItem>
            <SelectItem value="consultancy">Consultancy</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="businessName">Business Name</Label>
        <Input
          id="businessName"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="businessAddress">Business Address</Label>
        <Input
          id="businessAddress"
          value={data.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />
      </div>
    </div>
  );
}
