export const ExpressCheckout = () => {
  return (
    <section className="flex w-full gap-2.5 pb-[17px]">
      <div className="min-w-[278px] w-full flex-1 shrink basis-[0%]">
        <div className="flex w-full flex-col items-stretch">
          <div className="text-[#707070] text-center text-sm font-normal leading-none">
            Express checkout
          </div>
          <div className="w-full mt-[17px]">
            <div className="flex w-full items-center gap-3.5 justify-center flex-wrap">
              <button className="min-w-[146px] justify-center items-center bg-[#5A31F4] self-stretch flex min-h-12 flex-col flex-1 shrink basis-10 my-auto pl-12 pr-[49px] py-[13px] rounded-[5px]">
                <div className="flex min-h-[21px] w-[88px] items-stretch">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/508a2ed05bb7edb7051abf9c6ecff33483c12c7f?placeholderIfAbsent=true"
                    alt="Shop Pay"
                    className="aspect-[4] object-contain w-full flex-1"
                  />
                </div>
              </button>
              <button className="bg-black self-stretch flex min-w-[146px] min-h-12 flex-col overflow-hidden items-center justify-center flex-1 shrink basis-[0%] my-auto pl-[68px] pr-[69px] py-3.5 rounded-[5px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e28024394f596cd9b97e37e18f3edc85990465c7?placeholderIfAbsent=true"
                  alt="Apple Pay"
                  className="aspect-[2.4] object-contain w-12"
                />
              </button>
              <button className="bg-[rgba(255,196,57,1)] self-stretch flex min-w-[146px] min-h-12 flex-col overflow-hidden items-center justify-center flex-1 shrink basis-[30px] my-auto pl-[53px] pr-[54px] py-3.5 rounded-[5px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2fca2feaba4ee4a85b8b006892c81ca1cf17a4b?placeholderIfAbsent=true"
                  alt="Google Pay"
                  className="aspect-[3.91] object-contain w-[78px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
