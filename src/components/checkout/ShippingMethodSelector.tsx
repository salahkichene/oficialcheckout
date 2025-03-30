
import { useState } from "react";
import type { ShippingMethod } from "./types";

interface ShippingMethodSelectorProps {
  shippingMethods: ShippingMethod[];
}

export const ShippingMethodSelector = ({ shippingMethods }: ShippingMethodSelectorProps) => {
  return (
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
  );
};
