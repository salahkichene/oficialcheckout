
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isFilled, setIsFilled] = React.useState(false);
    
    React.useEffect(() => {
      // Check if the input has a value on mount
      if (props.value) {
        setIsFilled(Boolean(props.value));
      }
    }, [props.value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsFilled(e.target.value.length > 0);
      if (props.onChange) props.onChange(e);
    };

    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "h-[52px] w-full bg-white rounded-[5px] border border-solid px-[11px] text-black transition-all duration-200",
            isFilled || isFocused ? "pt-7 pb-2" : "py-4", // Adjust padding based on state
            "placeholder-transparent", // Hide the default placeholder
            isFocused ? "border-[#1773b0] outline-none" : "border-[#dedede]",
            error ? "border-red-500" : "",
            className
          )}
          ref={ref}
          placeholder={label || ""}
          onFocus={(e) => {
            setIsFocused(true);
            if (props.onFocus) props.onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (props.onBlur) props.onBlur(e);
          }}
          onChange={handleChange}
          {...props}
        />
        {label && (
          <label
            className={cn(
              "absolute left-[11px] transition-all duration-200 pointer-events-none text-[#707070]",
              (isFilled || isFocused) ? 
                "top-2 text-xs" : 
                "top-1/2 -translate-y-1/2 text-base", // Center label when empty
              isFocused && "text-[#1773b0]",
              error ? "text-red-500" : ""
            )}
          >
            {label}
          </label>
        )}
        {error && (
          <span className="text-red-500 text-xs mt-1 block">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
