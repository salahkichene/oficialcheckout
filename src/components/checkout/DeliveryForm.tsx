import { useState } from "react";
import type { ShippingMethod } from "./types";

export const DeliveryForm = () => {
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
        <div className="w-full whitespace-nowrap">
          <div className="bg-white border flex w-full flex-wrap rounded-[5px] border-[rgba(222,222,222,1)] border-solid">
            <select className="min-w-60 min-h-[52px] overflow-hidden flex-1 shrink basis-[0%] pt-[11px] px-[11px]">
              <option value="CA">Canada</option>
            </select>
          </div>
        </div>

        <div className="flex w-full gap-3.5 flex-wrap mt-3.5">
          <div className="min-w-[181px] flex-1 shrink basis-[0%]">
            <input
              type="text"
              placeholder="First name (optional)"
              defaultValue="Jordan"
              className="bg-white border w-full rounded-[5px] border-[rgba(222,222,222,1)] border-solid p-3"
            />
          </div>
          <div className="min-w-[181px] flex-1 shrink basis-[0%]">
            <input
              type="text"
              placeholder="Last name"
              defaultValue="Chen"
              className="bg-white border w-full rounded-[5px] border-[rgba(222,222,222,1)] border-solid p-3"
            />
          </div>
        </div>

        <input
          type="text"
          placeholder="Address"
          defaultValue="151 O'Connor Street"
          className="w-full mt-3.5 bg-white border rounded-[5px] border-[rgba(222,222,222,1)] border-solid p-3"
        />

        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          defaultValue="Unit 8"
          className="w-full mt-3.5 bg-white border rounded-[5px] border-[rgba(222,222,222,1)] border-solid p-3"
        />

        <div className="flex w-full gap-3.5 flex-wrap mt-3.5">
          <input
            type="text"
            placeholder="City"
            defaultValue="Ottawa"
            className="min-w-40 flex-1 bg-white border rounded-[5px] border-[rgba(222,222,222,1)] border-solid p-3"
          />
          <select className="min-w-40 flex-1 bg-white border rounded-[5px] border-[rgba(222,222,222,1)] border-solid p-3">
            <option value="ON">Ontario</option>
          </select>
          <input
            type="text"
            placeholder="Postal code"
            defaultValue="K2P 2L8"
            className="min-w-40 flex-1 bg-white border rounded-[5px] border-[rgba(222,222,222,1)] border-solid p-3"
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
