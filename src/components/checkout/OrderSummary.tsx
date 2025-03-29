
import { useState } from "react";
import type { Product } from "./types";

export const OrderSummary = () => {
  const [products] = useState<Product[]>([
    {
      name: "Monstera plant",
      description: "Concrete pot",
      price: "$59.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c35e511bd8c0282f34485e88cecc5840d7847554?placeholderIfAbsent=true",
    },
    {
      name: "Snake plant",
      description: "Concrete pot",
      price: "$59.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e275d03803f1fbeb6ff5705d51dd64cafd4fb3cb?placeholderIfAbsent=true",
    },
    {
      name: "Watering can",
      description: "Matte black",
      price: "$39.00",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/29791eee6368db96bc453b57b9de3168b310d97c?placeholderIfAbsent=true",
    },
  ]);

  return (
    <aside className="bg-neutral-100 flex min-w-60 flex-col justify-center grow shrink w-[520px] p-[38px] pt-[17px]">
      <div className="w-[444px] max-w-[444px]">
        <div className="w-full text-sm font-normal">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex w-full items-center gap-3.5 justify-center mb-3.5"
            >
              <img
                src={product.image}
                alt={product.name}
                className="aspect-[1] object-contain w-16 self-stretch shrink-0"
              />
              <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
                <div className="text-black">{product.name}</div>
                <div className="text-[#707070]">{product.description}</div>
              </div>
              <div className="self-stretch flex gap-3.5 text-black whitespace-nowrap my-auto">
                <div className="min-h-16">{product.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full text-sm mt-[21px]">
          <div className="flex gap-3.5">
            <input
              type="text"
              placeholder="Discount code"
              className="flex-1 bg-white border rounded-[5px] border-[rgba(222,222,222,1)] border-solid p-3"
            />
            <button className="bg-[rgba(237,237,237,1)] text-[#707070] font-semibold px-6 rounded-[5px] border border-[rgba(214,214,214,1)]">
              Apply
            </button>
          </div>
        </div>

        <div className="w-full text-black font-normal mt-[21px]">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>$157.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Estimated taxes</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between items-center font-semibold mt-4">
              <span className="text-[19px]">Total</span>
              <span className="text-[21px]">$162.00</span>
            </div>
            <p className="text-sm text-[#707070]">Including $5.00 in taxes</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
