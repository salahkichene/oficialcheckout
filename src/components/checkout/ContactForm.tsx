
import { useState, useRef, useEffect } from "react";

export const ContactForm = () => {
  const [email, setEmail] = useState("jordan.chen@domain.com");
  const [receiveNews, setReceiveNews] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Set initial focus state based on whether the input has value
  useEffect(() => {
    if (email) {
      setIsFocused(true);
    }
  }, [email]);

  return (
    <section className="w-full font-normal pb-8">
      <h2 className="flex-1 shrink basis-[0%] w-full gap-[5px] text-[21px] text-black font-semibold whitespace-nowrap leading-[1.2]">
        Contact
      </h2>
      <div className="w-full mt-3.5">
        <div className="bg-white border flex w-full rounded-[5px] border-[rgba(222,222,222,1)] border-solid">
          <div className="min-w-60 min-h-[52px] w-full overflow-hidden flex-1 shrink basis-[0%] px-[11px] relative">
            <label 
              className={`transition-all duration-200 absolute ${
                isFocused 
                  ? "text-xs text-[#707070] top-[11px]" 
                  : "text-sm text-[#707070] top-[50%] transform -translate-y-1/2"
              }`}
              onClick={() => inputRef.current?.focus()}
            >
              Email address or phone number
            </label>
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(!!email)}
              className={`flex-1 shrink basis-[0%] w-full text-sm text-black bg-transparent ${
                isFocused ? "pt-[25px]" : "pt-[11px]"
              } pb-[11px]`}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full gap-[11px] text-sm text-black tracking-[0.02px] flex-wrap mt-3.5">
        <input
          type="checkbox"
          checked={receiveNews}
          onChange={(e) => setReceiveNews(e.target.checked)}
          className="aspect-[0.86] w-[18px]"
        />
        <label className="flex min-w-60 items-center gap-3.5 flex-1 shrink basis-[0%]">
          Email me with news and offers
        </label>
      </div>
    </section>
  );
};
