import { useState } from "react";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
export const ContactForm = () => {
  const [email, setEmail] = useState("jordan.chen@domain.com");
  const [receiveNews, setReceiveNews] = useState(false);
  return <section className="w-full font-normal pb-8">
      <h2 className="flex-1 shrink basis-[0%] w-full gap-[5px] text-[21px] text-black font-semibold whitespace-nowrap leading-[1.2]">
        Contact
      </h2>
      <div className="w-full mt-3.5">
        <FloatingLabelInput type="email" label="Email address or phone number" value={email} onChange={e => setEmail(e.target.value)} className="bg-white" />
      </div>
      <div className="flex w-full gap-[11px] text-sm text-black tracking-[0.02px] flex-wrap mt-3.5">
        <input type="checkbox" checked={receiveNews} onChange={e => setReceiveNews(e.target.checked)} className="aspect-[0.86] w-[18px] mx-[10px]" />
        <label className="flex min-w-60 items-center gap-3.5 flex-1 shrink basis-[0%]">
          Email me with news and offers
        </label>
      </div>
    </section>;
};