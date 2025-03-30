
import { Input } from "@/components/ui/input";

export const AddressFields = () => {
  return (
    <>
      <Input
        label="Address"
        defaultValue="151 O'Connor Street"
        className="w-full mt-3.5 bg-white"
      />

      <Input
        label="Apartment, suite, etc. (optional)"
        defaultValue="Unit 8"
        className="w-full mt-3.5 bg-white"
      />
    </>
  );
};
