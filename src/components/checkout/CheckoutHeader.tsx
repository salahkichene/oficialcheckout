
export const CheckoutHeader = () => {
  return (
    <header className="flex w-full items-center justify-between py-4 border-[rgba(222,222,222,1)] border-b">
      <div className="self-stretch flex min-w-60 w-full max-w-[1104px] items-center justify-between flex-wrap flex-1 shrink basis-[0%] mx-auto px-6">
        <div className="flex items-center justify-center h-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/915e5f9a1fe949b13d34fdda5591de8918ea4613?placeholderIfAbsent=true"
            alt="Company Logo"
            className="aspect-[3.13] object-contain w-[141px]"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/86a0e2066a6faa97ec4eff23e66c8b91fc336fe4?placeholderIfAbsent=true"
          alt="Menu"
          className="aspect-[1] object-contain w-6 shrink-0"
        />
      </div>
    </header>
  );
};
