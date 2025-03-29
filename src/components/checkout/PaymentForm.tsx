
import { useState } from "react";
import type { PaymentMethod } from "./types";
import { Input } from "@/components/ui/input";

export const PaymentForm = () => {
  const [paymentMethods] = useState<PaymentMethod[]>([
    {
      id: "card",
      name: "Credit or debit card",
      icons: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e94a3604e4259c1d6c78f7d5fa7fc8224b788cb0?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/24a12d4f9a6d9b16159fff3c87afd452dbf00be4?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ccdfcef5cf2b174d73af01ebe1232ef9f6a8741e?placeholderIfAbsent=true",
      ],
      selected: true,
    },
    {
      id: "paypal",
      name: "PayPal",
      selected: false,
    },
  ]);

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
            <div className="flex min-w-60 gap-[7px] flex-wrap flex-1 shrink basis-[0%]">
              <div className="min-w-60 text-sm text-black font-normal tracking-[0.02px] flex-1 shrink basis-[0%]">
                {method.name}
              </div>
              {method.icons && (
                <div className="flex gap-[5px]">
                  {method.icons.map((icon, index) => (
                    <img
                      key={index}
                      src={icon}
                      alt={`Payment method ${index + 1}`}
                      className="aspect-[1.58] object-contain w-[38px]"
                    />
                  ))}
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
