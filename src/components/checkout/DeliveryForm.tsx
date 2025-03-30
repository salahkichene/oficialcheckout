
import { useState, useEffect } from "react";
import type { ShippingMethod } from "./types";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export const DeliveryForm = () => {
  const [country, setCountry] = useState("Canada");
  const [shippingMethods] = useState<ShippingMethod[]>([
    {
      id: "fedex",
      name: "FedEx Ground",
      description: "2 to 3 business days",
      price: "$10.00",
      selected: true,
    },
    {
      id: "usps",
      name: "USPS Priority",
      description: "2 to 3 business days",
      price: "$10.00",
      selected: false,
    },
  ]);

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
  const renderAddressFields = () => {
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

  return (
    <section className="w-full pb-[38px]">
      <h2 className="text-black text-[21px] font-semibold leading-[1.2]">
        Delivery
      </h2>
      <div className="w-full font-normal mt-3.5">
        <div className="w-full whitespace-nowrap">
          <div className="relative w-full">
            <select 
              className="h-[52px] w-full bg-white rounded-[5px] border border-[#dedede] border-solid px-[11px] py-4 appearance-none"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="Canada">Canada</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
            </select>
            <label className="absolute left-[11px] top-1/2 -translate-y-1/2 text-base pointer-events-none text-[#707070]">
              Country/Region
            </label>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-3.5 flex-wrap mt-3.5">
          <div className="min-w-[181px] flex-1 shrink basis-[0%]">
            <Input
              label="First name (optional)"
              defaultValue="Jordan"
              className="bg-white"
            />
          </div>
          <div className="min-w-[181px] flex-1 shrink basis-[0%]">
            <Input
              label="Last name"
              defaultValue="Chen"
              className="bg-white"
            />
          </div>
        </div>

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

        {renderAddressFields()}
        
        <div className="w-full mt-3.5">
          <Input
            label="Phone (optional)"
            className="w-full bg-white"
          />
        </div>
      </div>

      <div className="w-full mt-[26px]">
        <h3 className="text-black text-base font-semibold leading-[1.2]">
          Shipping method
        </h3>
        <div className="w-full mt-3.5">
          <div className="bg-neutral-100 border w-full rounded-[5px] border-[rgba(222,222,222,1)] border-solid">
            {shippingMethods.map((method) => (
              <div
                key={method.id}
                className={`w-full ${
                  method.selected
                    ? "bg-[rgba(239,245,255,1)] border-[rgba(23,115,176,1)]"
                    : "bg-white"
                } border flex w-full gap-[11px] flex-wrap p-3.5 rounded-[5px] border-solid`}
              >
                <input
                  type="radio"
                  name="shipping"
                  checked={method.selected}
                  className="w-[18px] h-[18px]"
                />
                <div className="flex min-w-60 gap-[7px] text-sm flex-wrap flex-1 shrink basis-[0%]">
                  <div className="min-w-60 font-normal flex-1 shrink basis-[0%]">
                    <div className="flex-1 shrink basis-[0%] w-full gap-2.5 text-black">
                      {method.name}
                    </div>
                    <div className="flex-1 shrink basis-[0%] w-full gap-2.5 text-[#707070] mt-[5px]">
                      {method.description}
                    </div>
                  </div>
                  <div className="flex flex-col text-black font-semibold whitespace-nowrap text-right">
                    <div className="gap-2.5">{method.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
