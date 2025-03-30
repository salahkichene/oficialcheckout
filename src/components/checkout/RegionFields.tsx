
import { Input } from "@/components/ui/input";

interface RegionFieldsProps {
  country: string;
}

export const RegionFields = ({ country }: RegionFieldsProps) => {
  // Country-specific region label
  const getRegionLabel = () => {
    switch (country) {
      case "United States":
        return "State";
      case "United Kingdom":
        return "County";
      default:
        return "Province";
    }
  };

  // Country-specific postal code label
  const getPostalLabel = () => {
    switch (country) {
      case "United States":
        return "ZIP code";
      case "United Kingdom":
        return "Postcode";
      default:
        return "Postal code";
    }
  };

  // Render appropriate region/postal fields based on country
  if (country === "United Kingdom") {
    return (
      <div className="flex w-full gap-3.5 flex-wrap mt-3.5">
        <div className="min-w-[181px] flex-1">
          <Input
            label="City"
            defaultValue="London"
            className="bg-white"
          />
        </div>
        <div className="min-w-[181px] flex-1">
          <Input
            label="Postcode"
            defaultValue="SW1A 1AA"
            className="bg-white"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full gap-3.5 flex-wrap mt-3.5">
      <div className="min-w-[181px] flex-1">
        <Input
          label="City"
          defaultValue={country === "United States" ? "New York" : "Ottawa"}
          className="bg-white"
        />
      </div>
      <div className="min-w-[181px] flex-1">
        <div className="relative w-full">
          <select className="h-[52px] w-full bg-white rounded-[5px] border border-[#dedede] border-solid px-[11px] py-4 appearance-none">
            {country === "Canada" && (
              <>
                <option value="ON">Ontario</option>
                <option value="QC">Quebec</option>
                <option value="BC">British Columbia</option>
              </>
            )}
            {country === "United States" && (
              <>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
              </>
            )}
          </select>
          <label className="absolute left-[11px] top-1/2 -translate-y-1/2 text-base pointer-events-none text-[#707070]">
            {getRegionLabel()}
          </label>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L11 1" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="min-w-[181px] flex-1">
        <Input
          label={getPostalLabel()}
          defaultValue={country === "United States" ? "10001" : "K2P 2L8"}
          className="bg-white"
        />
      </div>
    </div>
  );
};
