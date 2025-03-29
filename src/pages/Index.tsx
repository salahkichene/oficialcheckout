
import { CheckoutHeader } from "@/components/checkout/CheckoutHeader";
import { ExpressCheckout } from "@/components/checkout/ExpressCheckout";
import { ContactForm } from "@/components/checkout/ContactForm";
import { DeliveryForm } from "@/components/checkout/DeliveryForm";
import { PaymentForm } from "@/components/checkout/PaymentForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { CheckoutFooter } from "@/components/checkout/CheckoutFooter";

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <CheckoutHeader />

      <div className="flex w-full items-stretch justify-center flex-wrap">
        <main className="bg-white flex min-w-60 flex-col grow shrink w-[659px]">
          <div className="w-[660px] max-w-[660px] p-[38px] pr-0 border-0">
            <ExpressCheckout />

            <div className="flex w-full items-center gap-[11px] text-sm text-[#707070] font-normal whitespace-nowrap text-center leading-none flex-wrap pb-[26px]">
              <div className="bg-[rgba(222,222,222,1)] self-stretch flex min-w-60 w-[270px] shrink h-px flex-1 basis-[0%] my-auto" />
              <div className="self-stretch my-auto">OR</div>
              <div className="bg-[rgba(222,222,222,1)] self-stretch flex min-w-60 w-[271px] shrink h-px flex-1 basis-[0%] my-auto" />
            </div>

            <div className="pr-[38px]">
              <ContactForm />
              <DeliveryForm />
              <PaymentForm />
              <CheckoutFooter />
            </div>
          </div>
        </main>

        <OrderSummary />
      </div>
    </div>
  );
};

export default Index;
