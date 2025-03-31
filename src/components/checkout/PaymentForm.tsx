
import { useState } from "react";
import type { PaymentMethod } from "./types";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const PaymentForm = () => {
  const [paymentMethods] = useState<PaymentMethod[]>([
    {
      id: "card",
      name: "Credit or debit card",
      icons: [
        "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg",
        "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/mastercard.1c4_lyMp.svg",
        "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/amex.Csr7hRoy.svg",
        "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/discover.C7UbFpNb.svg",
      ],
      selected: true,
    },
    {
      id: "paypal",
      name: "PayPal",
      selected: false,
    },
  ]);

  // Additional card icons for the popup
  const additionalCardIcons = [
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/diners_club.B9hVEmwz.svg",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/elo.Clup5T29.svg",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/jcb.BgZHqF0u.svg",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/unionpay.8M-Boq_z.svg"
  ];

  return (
    <section className="w-full pb-[38px]">
      <div className="w-[333px] max-w-full">
        <h2 className="text-black text-[21px] font-semibold leading-[1.2]">
          Payment
        </h2>
        <p className="text-[#707070] text-sm font-normal mt-[5px]">
          All transactions are secure and encrypted
        </p>
      </div>

      <div className="bg-white border w-full mt-3.5 rounded-[5px] border-[rgba(222,222,222,1)] border-solid">
        {paymentMethods.map((method) => (
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
              name="payment"
              checked={method.selected}
              className="w-[18px] h-[18px]"
            />
            <div className="flex min-w-60 gap-[7px] flex-wrap items-center flex-1 shrink basis-[0%]">
              <div className="min-w-60 text-sm text-black font-normal tracking-[0.02px] flex-1 shrink basis-[0%]">
                {method.name}
              </div>
              {method.icons && (
                <div className="flex items-center gap-[5px]">
                  {method.icons.map((icon, index) => (
                    <img
                      key={index}
                      src={icon}
                      alt={`Payment method ${index + 1}`}
                      className="h-6 object-contain"
                    />
                  ))}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="ml-1 text-[rgba(23,115,176,1)] font-medium text-sm">+4</button>
                    </PopoverTrigger>
                    <PopoverContent side="top" className="bg-black text-white p-3 rounded-md border-none w-auto">
                      <div className="flex gap-2">
                        {additionalCardIcons.map((icon, index) => (
                          <img
                            key={index}
                            src={icon}
                            alt={`Additional payment method ${index + 1}`}
                            className="h-6 object-contain"
                          />
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Card Details Form */}
        <div className="bg-neutral-100 p-3.5 space-y-3.5">
          <Input 
            label="Card number" 
            defaultValue="4564 1234 1234 1234" 
            className="bg-white"
          />
          <div className="flex gap-3.5">
            <Input
              label="Expiration date (MM/YY)"
              defaultValue="12/24"
              className="flex-1 bg-white"
            />
            <Input
              label="Security code"
              defaultValue="123"
              className="flex-1 bg-white"
            />
          </div>
          <Input
            label="Name on card"
            defaultValue="Jordan Chen"
            className="w-full bg-white"
          />
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <span className="text-sm">
              Use shipping address as billing address
            </span>
          </label>
        </div>
      </div>

      <button className="w-full bg-[rgba(23,115,176,1)] text-white font-semibold text-[19px] rounded-[5px] py-4 mt-6">
        Pay now
      </button>
    </section>
  );
};
