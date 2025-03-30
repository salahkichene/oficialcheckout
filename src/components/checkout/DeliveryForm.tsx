
import { useState } from "react";
import type { ShippingMethod } from "./types";
import { CountrySelector } from "./CountrySelector";
import { CustomerNameFields } from "./CustomerNameFields";
import { AddressFields } from "./AddressFields";
import { RegionFields } from "./RegionFields";
import { PhoneField } from "./PhoneField";
import { ShippingMethodSelector } from "./ShippingMethodSelector";

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

  return (
    <section className="w-full pb-[38px]">
      <h2 className="text-black text-[21px] font-semibold leading-[1.2]">
        Delivery
      </h2>
      <div className="w-full font-normal mt-3.5">
        <CountrySelector 
          value={country} 
          onChange={setCountry} 
        />
        <CustomerNameFields />
        <AddressFields />
        <RegionFields country={country} />
        <PhoneField />
      </div>
      <ShippingMethodSelector shippingMethods={shippingMethods} />
    </section>
  );
};
