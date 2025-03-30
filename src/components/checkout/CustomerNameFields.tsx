
import { Input } from "@/components/ui/input";

export const CustomerNameFields = () => {
  return (
    <div className="flex w-full gap-3.5 flex-wrap mt-3.5">
      <div className="min-w-[181px] flex-1 shrink basis-[0%]">
        <Input
          label="First name (optional)"
          defaultValue="Jordan"
          className="bg-white"
        />
      </div>
      <div className="min-w-[181px] flex-1 shrink basis-[0%]">
        <Input
          label="Last name"
          defaultValue="Chen"
          className="bg-white"
        />
      </div>
    </div>
  );
};
