export const CheckoutFooter = () => {
  return (
    <footer className="flex w-full flex-col items-stretch text-sm text-[rgba(25,124,189,1)] font-normal underline justify-center py-[21px] border-[rgba(222,222,222,1)] border-t">
      <div className="flex w-full gap-3.5 flex-wrap">
        <a href="#" className="hover:text-[rgba(25,124,189,0.8)]">
          Return policy
        </a>
        <a href="#" className="hover:text-[rgba(25,124,189,0.8)]">
          Privacy policy
        </a>
        <a href="#" className="hover:text-[rgba(25,124,189,0.8)]">
          Terms of service
        </a>
      </div>
    </footer>
  );
};
