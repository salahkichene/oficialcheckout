
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FloatingLabelInput({
  label,
  value,
  onChange,
  className,
  error,
  ...props
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  
  useEffect(() => {
    // Check if the input has a value on mount
    if (value || props.defaultValue) {
      setIsFilled(true);
    }
  }, [value, props.defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilled(e.target.value.length > 0);
    if (onChange) onChange(e);
  };

  return (
    <div className="relative w-full">
      <input
        value={value}
        className={cn(
          "h-[52px] w-full bg-white rounded-[5px] border border-solid px-[11px] text-black transition-all duration-200",
          isFilled ? "pt-7 pb-2" : "py-4", // Adjust vertical padding based on filled state
          "placeholder-transparent", // Hide the default placeholder
          isFocused ? "border-[#1773b0] outline-none" : "border-[#dedede]",
          error ? "border-red-500" : "",
          className
        )}
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
            isFilled ? 
              "top-[6px] text-xs" : // Label moves up only when input has content
              "text-base top-1/2 -translate-y-1/2", // Centered when empty 
            isFocused && "text-[#1773b0]", // Blue color when focused
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
