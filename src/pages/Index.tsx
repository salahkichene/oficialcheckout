
import { CheckoutHeader } from "@/components/checkout/CheckoutHeader";
import { ContactForm } from "@/components/checkout/ContactForm";
import { DeliveryForm } from "@/components/checkout/DeliveryForm";
import { PaymentForm } from "@/components/checkout/PaymentForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { CheckoutFooter } from "@/components/checkout/CheckoutFooter";

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <CheckoutHeader />

      <div className="flex w-full items-stretch p-0 m-0 gap-0 hero-checkout">
        <main className="bg-white flex min-w-60 flex-col grow w-[659px] border-r border-[rgba(222,222,222,1)]">
          <div className="w-full py-[38px] px-[38px] max-w-[660px] ml-auto">
            <ContactForm />
            <DeliveryForm />
            <PaymentForm />
            <CheckoutFooter />
          </div>
        </main>

        <OrderSummary />
      </div>
    </div>
  );
};

export default Index;
