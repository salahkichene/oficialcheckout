
import { useState } from "react";
import type { PaymentMethod } from "./types";
import { Input } from "@/components/ui/input";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { ChevronDown } from "lucide-react";

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
  ]);

  // Additional card icons for the popup
  const additionalCardIcons = [
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/diners_club.B9hVEmwz.svg",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/elo.Clup5T29.svg",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/jcb.BgZHqF0u.svg",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/unionpay.8M-Boq_z.svg"
  ];

  const [useSameAddress, setUseSameAddress] = useState(true);
  const [country, setCountry] = useState("US");

  const countries = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "GB", name: "United Kingdom" },
    { code: "AU", name: "Australia" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
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
                  <HoverCard openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div className="ml-1 bg-white text-[rgba(23,115,176,1)] font-medium text-sm border border-gray-200 rounded-sm h-6 flex items-center justify-center px-1.5 cursor-pointer">+4</div>
                    </HoverCardTrigger>
                    <HoverCardContent side="top" align="center" className="bg-black text-white p-3 rounded-md border-none w-auto">
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
                    </HoverCardContent>
                  </HoverCard>
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
            <input 
              type="checkbox" 
              checked={useSameAddress} 
              onChange={(e) => setUseSameAddress(e.target.checked)} 
              className="w-4 h-4" 
            />
            <span className="text-sm">
              Use shipping address as billing address
            </span>
          </label>

          {/* Billing Address Form (conditional rendering) */}
          {!useSameAddress && (
            <div className="mt-3.5 space-y-2.5">
              <div className="text-sm font-medium text-[#505050] mb-1">Billing Address</div>
              
              <div className="w-full relative">
                <FloatingLabelInput
                  as="select"
                  label="Country/Region"
                  className="min-h-[40px] text-sm w-full cursor-pointer bg-white appearance-none"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name}
                    </option>
                  ))}
                </FloatingLabelInput>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>

              <div className="flex w-full gap-2.5">
                <div className="flex-1">
                  <FloatingLabelInput
                    label="First name"
                    defaultValue=""
                    className="min-h-[40px] text-sm bg-white"
                  />
                </div>
                <div className="flex-1">
                  <FloatingLabelInput
                    label="Last name"
                    defaultValue=""
                    className="min-h-[40px] text-sm bg-white"
                  />
                </div>
              </div>
              
              <FloatingLabelInput
                label="Address"
                defaultValue=""
                className="min-h-[40px] text-sm bg-white"
              />
              
              <FloatingLabelInput
                label="Apartment, suite, etc. (optional)"
                defaultValue=""
                className="min-h-[40px] text-sm bg-white"
              />
              
              <div className="flex w-full gap-2.5">
                <div className="flex-1">
                  <FloatingLabelInput
                    label="City"
                    defaultValue=""
                    className="min-h-[40px] text-sm bg-white"
                  />
                </div>
                <div className="flex-1">
                  <FloatingLabelInput
                    label="State"
                    defaultValue=""
                    className="min-h-[40px] text-sm bg-white"
                  />
                </div>
                <div className="flex-1">
                  <FloatingLabelInput
                    label="ZIP code"
                    defaultValue=""
                    className="min-h-[40px] text-sm bg-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Secure checkout message */}
      <div className="flex justify-between items-center mt-6 mb-3 text-[#8A898C]">
        <div className="flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span className="text-sm font-normal">Secure and encrypted</span>
        </div>
        <div className="text-[#8A898C] text-right">
          <img 
            src="/lovable-uploads/6e2e9145-7db3-43b1-a007-ac5257a7bba6.png" 
            alt="Shop logo" 
            className="h-6 object-contain" 
          />
        </div>
      </div>

      <button className="w-full bg-[rgba(23,115,176,1)] text-white font-semibold text-[19px] rounded-[5px] py-4">
        Pay now
      </button>

      {/* Terms of service text */}
      <div className="text-sm text-[#505050] mt-3">
        Your info will be saved to a Shop account. By continuing, you agree to Shop's <a href="#" className="text-[#1773b0] hover:underline">Terms of Service</a> and acknowledge the <a href="#" className="text-[#1773b0] hover:underline">Privacy Policy</a>.
      </div>
    </section>
  );
};
